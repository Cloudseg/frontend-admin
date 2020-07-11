import { AbstractControl } from '@angular/forms';

export function Cnpj(control: AbstractControl): { cpf: boolean } {
    let { value } = control;

    if (!value) return null;

    value = value.replace(/\D/g, '');

    return validateCnpj(value) ? null : { cpf: true };
}

function validateCnpj(cnpj: string) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;
    if (cnpj.length != 14) return false;

    let size = cnpj.length - 2
    let numbers = cnpj.substring(0, size);
    let digits = cnpj.substring(size);
    let soma = 0;
    let pos = size - 7;

    for (let i = size; i >= 1; i--) {
        soma += parseInt(numbers.charAt(size - i)) * pos--;
        if (pos < 2)
            pos = 9;
    }

    let result = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (result != parseInt(digits.charAt(0))) return false;

    size = size + 1;
    numbers = cnpj.substring(0, size);
    soma = 0;
    pos = size - 7;

    for (let i = size; i >= 1; i--) {
        soma += parseInt(numbers.charAt(size - i)) * pos--;
        if (pos < 2) pos = 9;
    }

    result = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (result != parseInt(digits.charAt(1))) return false;

    return true;
}