import {
  ArrayUnique,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailReceiverDto {
  @IsNotEmpty()
  @IsArray()
  @IsEmail({}, { each: true })
  @ArrayUnique()
  @ApiProperty({
    type: String,
    description: 'An email address for the "to" recipients',
    example: ['user1@example.com', 'user2@example.com'],
  })
  email: string;
}
