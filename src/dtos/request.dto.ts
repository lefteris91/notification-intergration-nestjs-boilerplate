import { IsNotEmpty, IsObject } from 'class-validator';
import { ChatReceiverDto } from './receivers/receiver-chat.dto';
import { EmailReceiverDto } from './receivers/receiver-email.dto';
import { PushReceiverDto } from './receivers/receiver-push.dto';
import { SmsReceiverDto } from './receivers/receiver-sms.dto';
import { ChatSenderDto } from './senders/sender-chat.dto';
import { EmailSenderDto } from './senders/sender-email.dto';
import { PushSenderDto } from './senders/sender-push.dto';
import { SmsSenderDto } from './senders/sender-sms.dto';

export class RequestSendDto {
  @IsNotEmpty()
  @IsObject()
  sender: EmailSenderDto | SmsSenderDto | PushSenderDto | ChatSenderDto;

  @IsNotEmpty()
  @IsObject()
  receiver:
    | EmailReceiverDto
    | SmsReceiverDto
    | PushReceiverDto
    | ChatReceiverDto;
}
