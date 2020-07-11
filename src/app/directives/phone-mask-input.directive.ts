import { Directive, ElementRef, HostListener } from '@angular/core';
import { MaskPipe } from 'ngx-mask';

@Directive({
  selector: '[phoneMaskInput]'
})
export class PhoneMaskInputDirective {

  constructor(
    private elementRef: ElementRef,
    private maskPipe: MaskPipe
  ) { }

  @HostListener('keyup') onKeyUp = () => this.updateValue();
  @HostListener('ngModelChange') onNgModelChange = () => this.updateValue();

  private getMask(phone: string): string {
    return phone.replace(/\D/g, '').length > 10 ? '(00) 0 0000-0000' : '(00) 0000-0000';
  }

  private updateValue(): void {
    const value = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = this.maskPipe.transform(value, this.getMask(value));
  }

}
