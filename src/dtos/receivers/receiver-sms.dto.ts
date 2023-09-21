import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsPhoneNumber } from 'class-validator';

export class SmsReceiverDto {
  @IsArray()
  @IsPhoneNumber()
  @ApiProperty({
    type: [String],
    description: 'An array of phone numbers for the receivers',
    example: ['+1234567890', '+9876543210'],
  })
  receiver_phones: string[];
}
