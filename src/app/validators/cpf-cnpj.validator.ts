import { AbstractControl } from '@angular/forms';

export function CpfCnpj(control: AbstractControl) {
    let { value } = control;
    let valid = true;

    if (!value) return null;

    value = value.replace(/\D/g, '');

    if (value.length > 11) {
        valid = validateCnpj(value);

        return valid ? null : { cpfCnpj: true, cnpj: true };
    } else {
        valid = validateCpf(value);

        return valid ? null : { cpfCnpj: true, cpf: true };
    }
}

function validateCpf(cpf: string) {
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

function validateCnpj(cnpj: string) {

    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') return false;
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
    numbers = cnpj.substring(0,size);
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