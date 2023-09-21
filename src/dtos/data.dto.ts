import {
  IsBase64,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { Attatchment } from './attatchment.dto';

export class EmailData {
  message_id: string;
  @IsEmail()
  from: string;
  @IsString()
  replyTo?: string;
  @IsString()
  subject: string;
  @IsNotEmpty()
  @IsString()
  @Length(1, 500)
  message: string;
  attachments?: Attatchment[];
}
export class SmsData {
  message_id: string;
  @IsPhoneNumber()
  sender_phone: string;
  @IsString()
  message: string;
  attachments?: Attatchment[];
}
export class PushData {
  message_id: string;
  @IsString()
  user_id: string;
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  message: string;
  @IsBase64()
  icon?: string;
  @IsString()
  expiration?: number;
  subtitle?: string;
}
export class ChatData {
  message_id: string;
  sender_id: string;
  room_id: string;
  room_name?: string;
  @IsNotEmpty()
  @IsString()
  message: string;
}
