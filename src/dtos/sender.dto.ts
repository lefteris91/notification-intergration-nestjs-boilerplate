import {
  IsBase64,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import { Attatchment } from './attatchment.dto';

export class SenderEmailDto {
  message_id: string;

  full_name: string;

  @IsEmail()
  from: string;

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

  subtitle?: string;
}
export class ChatData {
  message_id: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
