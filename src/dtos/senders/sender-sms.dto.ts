import { IsString, IsPhoneNumber, IsNotEmpty } from 'class-validator';

export class SmsSenderDto {
  @IsNotEmpty()
  @IsString()
  message_id: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  sender_phone: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
