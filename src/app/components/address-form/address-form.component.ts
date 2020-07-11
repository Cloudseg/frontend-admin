import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/address.model';
import { CepService } from 'src/app/services/cep.service';
import { ToastrService } from 'src/app/services/toastr.service';
import { debounceTime, switchMap } from 'rxjs/operators';
import { FormDataService } from 'src/app/services/form-data.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @ViewChild('addressNumberInput')
  private addressNumberInput: ElementRef;

  @Input('formGroup')
  private mainForm: FormGroup;

  form: FormGroup;
  cities$: Observable<City[]>;

  constructor(
    private _cepService: CepService,
    private _toastrService: ToastrService,
    private _formDataService: FormDataService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.subscribeToCitiesArray();
  }

  onCepBlur(event): void {
    const { value } = event.target;
    value && this.loadCepInfo(value);
  }

  private loadCepInfo(cep: string): void {
    this.form.disable();

    this._cepService.getCepData(cep)
      .then(({ response, city }) => {
        const { logradouro: address, bairro: neighborhood } = response;

        this.form.patchValue({ address, neighborhood, city });
        this.form.enable();
        this.addressNumberInput.nativeElement.focus();
      })
      .catch(() => {
        this.form.enable();
        this._toastrService.error('CEP inválido.')
      });
  }

  cityDisplay(city?: City): string {
    return city ? `${city.name} - ${city.state.code}` : '';
  }

  private subscribeToCitiesArray(): void {
    this.cities$ = this.form.get('city')
      .valueChanges
      .pipe(
        debounceTime(300),
        switchMap((value: string | City) => this._formDataService.cities(typeof value == 'string' ? value : (value || {}).name))
      );
  }

  private buildForm(): void {
    this.form = this._formBuilder.group({
      zip_code: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      neighborhood: new FormControl(null, [Validators.required]),
      complement: new FormControl(null),
      city: new FormControl(null, [Validators.required])
    });

    this.mainForm.addControl('address', this.form);
  }

}
