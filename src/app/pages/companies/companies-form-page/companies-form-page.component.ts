import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CUSTOM_MASKS } from 'src/app/constants/custom-masks.constant';
import { Cnpj } from 'src/app/validators/cnpj.validator';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'src/app/services/toastr.service';
import { MustMatch } from 'src/app/validators/must-match.validator';
import { AtLeast } from 'src/app/validators/at-least.validator';

@Component({
  selector: 'app-companies-form-page',
  templateUrl: './companies-form-page.component.html',
  styleUrls: ['./companies-form-page.component.scss']
})
export class CompaniesFormPageComponent implements OnInit {

  readonly customMasks = CUSTOM_MASKS;

  form: FormGroup;
  saving: boolean = false;
  companyId: number;

  constructor(
    private _formBuilder: FormBuilder,
    private _companyService: CompanyService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.buildForm();

    this.companyId = parseInt(this._route.snapshot.paramMap.get('id') || '0');
    if (this.companyId) this.loadCompany(this.companyId);
    else this.buildUserForm();
  }

  async submit(): Promise<void> {
    if (!this.form.valid || this.saving) return;
    this.saving = true;

    const { address, ...res } = this.form.value;

    const body = {
      ...res,
      address: {
        ...address,
        city_id: address.city.id
      }
    };

    if (this.companyId) this.update(body);
    else this.save(body);
  }

  private save(data: Partial<Company>): void {
    this._companyService.store(data)
      .then(() => {
        this._toastrService.success('Empresa cadastrada com sucesso.');
        this._router.navigate(['/companies']);
      })
      .catch(() => {
        this.saving = false;
        this._toastrService.error('Erro ao cadastrar empresa.');
      });
  }

  private update(data: Partial<Company>): void {
    this._companyService.update(this.companyId, data)
      .then(() => {
        this._toastrService.success('Empresa atualizada com sucesso.');
        this._router.navigate(['/companies']);
      })
      .catch(() => {
        this.saving = false;
        this._toastrService.error('Erro ao atualizar empresa.');
      });
  }

  private loadCompany(id: number): void {
    this._companyService.get(id)
      .then((company: Company) => this.form.patchValue(company));
  }

  private buildUserForm(): void {
    this.form.addControl('user', this._formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password_confirmation: new FormControl(null)
    }, {
      validators: [
        MustMatch('password', 'password_confirmation')
      ]
    }))
  }

  private buildForm(): void {
    this.form = this._formBuilder.group({
      price: new FormControl(null, [Validators.required]),
      cnpj: new FormControl(null, [Validators.required, Cnpj]),
      corporate_name: new FormControl(null, [Validators.required]),
      trading_name: new FormControl(null, [Validators.required]),
      logo: new FormControl(null),
      primary_phone: new FormControl(null, [Validators.required]),
      secondary_phone: new FormControl(null),
      infos: new FormControl([], [AtLeast])
    });
  }

}
