import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class EmailReceiver {
  @IsArray()
  @IsEmail()
  to: string[];
  @IsArray()
  @IsEmail()
  cc?: string[];
  @IsArray()
  @IsEmail()
  bcc?: string[];
}
export class SmsReceiver {
  @IsArray()
  @IsPhoneNumber()
  receiver_phones: string[];
}
export class ChatReceiver {
  @IsString()
  receiver_id: string;
}
export class PushReceiver {
  @IsNotEmpty()
  @IsString()
  userId: string;
  @IsArray()
  deviceTokens: string[];
}
