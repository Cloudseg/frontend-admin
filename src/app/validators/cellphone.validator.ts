import { AbstractControl } from '@angular/forms';

export function CellPhone(control: AbstractControl) {
    let { value } = control;

    if (!value) return null;

    return /^\(\d{2}\) \d{4,5}-\d{4}$/gi.test(value) ? null : { cellPhone: true };
}