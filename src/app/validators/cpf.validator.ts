import { AbstractControl } from '@angular/forms';

export function Cpf(control: AbstractControl): { cpf: boolean } {
    let { value } = control;

    if (!value) return null;

    value = value.replace(/\D/g, '');

    return validateCpf(value) ? null : { cpf: true };
}

function validateCpf(cpf: string): boolean {
    let sum;
    let rest;

    cpf = cpf.replace(/\D/g, '');

    sum = 0;
    if (cpf == "00000000000") return false;

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) return false;

    return true;
}