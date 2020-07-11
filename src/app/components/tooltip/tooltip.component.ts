import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <ion-icon name="help-circle" [matTooltip]="text"></ion-icon>
  `,
  styles: [
    `
      ion-icon {
        position: absolute;
        top: 30%;
        right: 0;
        font-size: 1.3em;
        color: darkslategrey;
      }
    `
  ],
})
export class TooltipComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit(): void { }
}
