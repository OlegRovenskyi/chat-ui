import { ValidatorFn } from '@angular/forms';
import { MessageFormData } from './create-message/create-message.models';

export interface FullMessageInfo extends MessageFormData {
  username: string;
}

export interface UserIdentifier {
  symbol: string;
}

export type FormGroupConfig<T> = {
  [key in keyof T]:  T[key]
    | [T[key]]
    | [
      T[key],
        ValidatorFn | ValidatorFn[]
    ];
};
