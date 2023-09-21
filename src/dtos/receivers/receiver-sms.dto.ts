import { IsArray, IsPhoneNumber } from 'class-validator';

export class SmsReceiverDto {
  @IsArray()
  @IsPhoneNumber()
  receiver_phones: string[];
}
