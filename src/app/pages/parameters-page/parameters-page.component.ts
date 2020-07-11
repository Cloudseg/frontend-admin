import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ParameterTypeEnum } from 'src/app/enums/parameter-type.enum';
import { ParameterService } from 'src/app/services/parameter.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/services/toastr.service';
import { Parameter } from 'src/app/models/parameter.model';

@Component({
  selector: 'app-parameters-page',
  templateUrl: './parameters-page.component.html',
  styleUrls: ['./parameters-page.component.scss']
})
export class ParametersPageComponent implements OnInit {

  readonly enum = ParameterTypeEnum;

  form: FormGroup;
  parameters: Parameter[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _parameterService: ParameterService,
    private _router: Router,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.load();
  }

  save(): void {
    if (!this.form.valid) return;

    this._parameterService.updateAll(this.form.value)
      .then(() => {
        this._toastrService.success('Paramêtros atualizados com sucesso.');
        this._router.navigate(['/']);
      })
      .catch((err) => this._toastrService.error('Erro ao atualizar paramêtros.'));
  }

  getDescription(type: ParameterTypeEnum): string {
    const parameter = this.parameters.find(el => el.type == type);
    return parameter ? parameter.description : null;
  }

  private load(): void {
    this._parameterService.get()
      .then((parameters) => {
        const object = parameters.reduce((obj, param) => ({ ...obj, [param.type]: param.value }), {});
        this.form.patchValue(object);
        this.parameters = parameters;
      });
  }

  private buildForm(): void {
    this.form = this._formBuilder.group({
      [ParameterTypeEnum.PRICE_PER_KM]: new FormControl(null, [Validators.required, Validators.min(0)]),
      [ParameterTypeEnum.MIN_INSPECTION_PICTURES]: new FormControl(null, [Validators.required, Validators.min(0)]),
      [ParameterTypeEnum.MAX_INSPECTION_PICTURES]: new FormControl(null, [Validators.required, Validators.min(0)]),
      [ParameterTypeEnum.RETRY_DISTRIBUTION_TIME]: new FormControl(null, [Validators.required, Validators.min(0)]),
      [ParameterTypeEnum.CHECK_FOR_LOCATION_UPDATE_TIME]: new FormControl(null, [Validators.required, Validators.min(0)]),
      [ParameterTypeEnum.MAX_DISTRIBUTION_RETRY_TIMES]: new FormControl(null, [Validators.required, Validators.min(1)]),
      [ParameterTypeEnum.CHECK_TACTICAL_RESPONSE_TIME]: new FormControl(null, [Validators.required, Validators.min(0)]),
      [ParameterTypeEnum.MAX_DISTANCE]: new FormControl(null, [Validators.required, Validators.min(0)]),
      [ParameterTypeEnum.DISTANCE_INCREASE_RATIO]: new FormControl(null, [Validators.required, Validators.min(0)]),
      [ParameterTypeEnum.MAX_INCREASED_DISTANCE]: new FormControl(null, [Validators.required, Validators.min(0)]),
      [ParameterTypeEnum.MAX_DISTANCE_CHECKIN]: new FormControl(null, [Validators.required, Validators.min(50)])
    });
  }
}
