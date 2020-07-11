import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CompanyInformation } from 'src/app/models/company.model';
import { Subscription } from 'rxjs';
import { ImageHelper } from 'src/app/helpers/image.helper';

@Component({
  selector: 'app-company-informations',
  templateUrl: './company-informations.component.html',
  styleUrls: ['./company-informations.component.scss']
})
export class CompanyInformationsComponent implements OnInit, OnDestroy {

  @ViewChild('fileInput', { static: true })
  private fileInput: ElementRef;

  @Input('control') formControl: FormControl;

  private subscription: Subscription;

  form: FormGroup;
  informations: Partial<CompanyInformation>[] = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();

    this.subscription = this.formControl.valueChanges.subscribe({
      next: (value) => this.informations = value
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  add(): void {
    this.getFile();
  }

  remove(idx: number): void {
    this.informations = this.informations.filter((info, index) => index !== idx);
    this.updateValue(this.informations);
  }

  async onFileChange(event) {
    const { files } = event.target;
    if (!files.length) return;

    const { title, subtitle } = this.form.value;

    const picture_url = await ImageHelper.blobToB64(event.target.files[0]);
    const info: Partial<CompanyInformation> = { title, subtitle, picture_url };
    this.informations = [...this.informations, info];
    this.updateValue(this.informations);

    this.reset();
  }

  private reset(): void {
    this.form.reset();
    this.fileInput.nativeElement.value = null;
  }

  private getFile(): void {
    this.fileInput.nativeElement.click();
  }

  private buildForm(): void {
    this.form = this._formBuilder.group({
      title: new FormControl(null, [Validators.required]),
      subtitle: new FormControl(null)
    });
  }

  private updateValue(infos: Partial<CompanyInformation>[]): void {
    this.formControl.setValue(infos);
  }

}
