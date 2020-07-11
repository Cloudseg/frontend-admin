import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImageHelper } from 'src/app/helpers/image.helper';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ImageInputComponent,
    multi: true
  }]
})
export class ImageInputComponent implements OnInit, ControlValueAccessor {

  @ViewChild('file', { static: true })
  private fileInput: ElementRef;

  @Input() title: string = 'Imagem';
  @Input() showTitle: boolean = true;

  private onChange: Function = (url: string) => { };
  private onTouch: Function = () => { };
  private disabled: boolean = false;

  url: string;

  constructor() { }

  ngOnInit(): void { }

  onClick(): void {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event): void {
    const { files } = event.target;
    files.length && this.transformFile(files[0]);
  }

  removePicture(): void {
    this.writeValue(null);
  }

  private async transformFile(file: File): Promise<void> {
    const url: string = await ImageHelper.blobToB64(file);
    this.writeValue(url);
  }

  writeValue(value: string) {
    this.onChange(value);
    this.url = value;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
