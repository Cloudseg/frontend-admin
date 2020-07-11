import { AbstractControl } from '@angular/forms';

export function AtLeast(control: AbstractControl, count: number = 1): { atLeast: boolean } {
    const hasAtLeast = control.value.length >= count;

    if (!hasAtLeast) return { atLeast: true };
    else return null;
}