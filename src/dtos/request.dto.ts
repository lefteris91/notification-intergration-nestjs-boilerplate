import { EmailConfig } from './config.dto';
import { ChatData, SenderEmailDto, PushData, SmsData } from './sender.dto';
import {
  EmailReceiver,
  SmsReceiver,
  PushReceiver,
  ChatReceiver,
} from './receiver.dto';

export class RequestSendDto {
  sender: SenderEmailDto | SmsData | PushData | ChatData;

  receiver: EmailReceiver | SmsReceiver | PushReceiver | ChatReceiver;
}
