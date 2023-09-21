import { IsNotEmpty, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    type: [EmailSenderDto, SmsSenderDto, PushSenderDto, ChatSenderDto],
    description: 'The sender information',
  })
  sender: EmailSenderDto | SmsSenderDto | PushSenderDto | ChatSenderDto;

  @IsNotEmpty()
  @IsObject()
  @ApiProperty({
    type: [EmailReceiverDto, SmsReceiverDto, PushReceiverDto, ChatReceiverDto],
    description: 'The receiver information',
  })
  receiver:
    | EmailReceiverDto
    | SmsReceiverDto
    | PushReceiverDto
    | ChatReceiverDto;
}
