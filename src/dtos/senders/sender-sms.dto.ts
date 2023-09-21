import { IsString, IsPhoneNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SmsSenderDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The ID of the SMS message',
    example: '12345',
  })
  message_id: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  @ApiProperty({
    type: String,
    description: 'The sender phone number',
    example: '+1234567890',
  })
  sender_phone: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The SMS message content',
    example: 'Hello, world!',
  })
  message: string;
}
