import { OrderList } from './order';
import { Status } from './status';

export interface ValidateFormErrors {
  name?: string;
  phone?: string;
  floor?: string;
  address?: string;
  intercom?: string;
}

export interface FormValue {
  field: string;
  value: string;
}

export interface Form {
  address: string;
  error: string | null;
  errors: ValidateFormErrors;
  floor: string;
  format: 'pickup' | 'delivery';
  intercom: string;
  name: string;
  phone: string;
  status: Status;
  touch: boolean;
  response: OrderList[] | null;
  [key: string]: unknown;
}

export interface FormList extends Form {
  orderList: OrderList[];
}

export interface FormResponse {
  name: string;
  phone: string;
  format: string;
  address: string;
  floor: number;
  intercom: number;
  error: string | null;
  errors: ValidateFormErrors;
  touch: boolean;
  status: string;
  orderList: OrderList[];
  id: string;
}
