import { MessageFormData } from './create-message/create-message.models';

export interface FullMessageInfo extends MessageFormData {
  username: string;
}

export interface UserIdentifier {
  symbol: string;
}
