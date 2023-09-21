import { IsMongoId } from 'class-validator';
import { EmailStatusEnum } from '../enums/email-status.enum';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { NotificationStatusEnum } from '../enums/notification-status.enum';
import { SmsStatusEnum } from '../enums/sms-status.enum';

export class MessageResponseDto {
  message_id: string;

  status: NotificationStatusEnum | EmailStatusEnum | SmsStatusEnum;

  timestamp?: string;

  message_meta?: Record<string, any>;
}

export class InfoResponseDto {
  name: string;

  logo?: string;

  description?: string;

  type: MessageTypeEnum;
}

export class ErrorResponseDto {
  id: string;
  errors?: string[] | string;
}

export class AllMessagesDto {
  messages: MessageResponseDto[];
}
export class BooleanResponseDto {
  @IsMongoId()
  id: string;

  success?: boolean = true;
}
