import { IsMongoId } from 'class-validator';
import { EmailStatusEnum } from '../enums/email-status.enum';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { NotificationStatusEnum } from '../enums/notification-status.enum';
import { SmsStatusEnum } from '../enums/sms-status.enum';

export class MessageResponseDto {
  message_id: string;

  success: boolean;

  timestamp?: string;
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
