import { ModelTimestamp } from './model-timestamp.model';
import { User } from './user.model';
import { Address } from './address.model';

export interface Company extends ModelTimestamp {
    id: number;
    cnpj: string;
    trading_name: string;
    corporate_name: string;
    logo?: string;
    primary_phone: string;
    secondary_phone?: string;
    address_id: number;
    user_id: number;
    user?: User;
    address?: Address;
    infos?: CompanyInformation[];
}

export interface BlockedCompany extends Company {
    pivot: BlockedCompanyPivot;
}

export interface BlockedCompanyPivot {
    company_id: number;
    blocked_company_id: number;
}

export interface CompanyInformation {
    id: number;
    title: string;
    subtitle: string;
    picture_url: string;
    company_id: number;
}