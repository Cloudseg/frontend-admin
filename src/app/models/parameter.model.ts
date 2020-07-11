import { ParameterTypeEnum } from '../enums/parameter-type.enum';
import { ModelTimestamp } from './model-timestamp.model';

export interface Parameter {
  id: number;
  type: ParameterTypeEnum;
  value: string;
  description: string;
  changes?: ParameterChange[];
}

export interface ParameterChange extends ModelTimestamp {
  id: number;
  parameter_id: number;
  old_value: string;
  new_value: string;
  parameter?: Parameter;
}