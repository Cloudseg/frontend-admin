import {
  Directive,
  Input,
  AfterViewInit,
  ElementRef,
  ViewContainerRef,
  ComponentFactoryResolver,
  Renderer2,
  ComponentRef
} from '@angular/core';
import { TooltipComponent } from '../components/tooltip/tooltip.component';

@Directive({
  selector: '[tooltiped]'
})
export class TooltipedDirective implements AfterViewInit {

  @Input()
  private tooltipText: string;

  private tooltip: ComponentRef<TooltipComponent>;

  constructor(
    private _elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef,
    private _resolver: ComponentFactoryResolver,
    private _renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this._renderer.addClass(this._elementRef.nativeElement, 'tooltiped');

    const factory = this._resolver.resolveComponentFactory(TooltipComponent);

    this.tooltip = this._viewContainerRef.createComponent(factory);

    this._elementRef.nativeElement.appendChild(this.tooltip.location.nativeElement);

    setTimeout(() => this.tooltip.instance.text = this.tooltipText);
  }
}
