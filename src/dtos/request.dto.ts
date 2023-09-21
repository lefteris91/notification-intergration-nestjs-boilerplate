import { EmailConfig } from './config.dto';
import { ChatData, EmailData, PushData, SmsData } from './data.dto';
import {
  EmailReceiver,
  SmsReceiver,
  PushReceiver,
  ChatReceiver,
} from './receiver.dto';

export class RequestSendDto {
  data: EmailData | SmsData | PushData | ChatData;

  receiver: EmailReceiver | SmsReceiver | PushReceiver | ChatReceiver;

  config?: EmailConfig;
}
