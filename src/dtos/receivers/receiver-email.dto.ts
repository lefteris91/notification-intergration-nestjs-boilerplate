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
    type: [String],
    description: 'An array of email addresses for the "to" recipients',
    example: ['user1@example.com', 'user2@example.com'],
  })
  to: string[];

  @IsOptional()
  @IsArray()
  @IsEmail({}, { each: true })
  @ArrayUnique()
  @ApiProperty({
    type: [String],
    required: false,
    description: 'An array of email addresses for the "cc" recipients',
    example: ['ccuser1@example.com', 'ccuser2@example.com'],
  })
  cc?: string[];

  @IsOptional()
  @IsArray()
  @IsEmail({}, { each: true })
  @ArrayUnique()
  @ApiProperty({
    type: [String],
    required: false,
    description: 'An array of email addresses for the "bcc" recipients',
    example: ['bccuser1@example.com', 'bccuser2@example.com'],
  })
  bcc?: string[];
}
