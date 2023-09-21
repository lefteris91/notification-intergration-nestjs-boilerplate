import {
  IsEmail,
  IsString,
  IsNotEmpty,
  Length,
  IsObject,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Attachment } from './attachment.dto';

export class EmailSenderDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The ID of the message',
    example: '12345',
  })
  message_id: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The full name of the sender',
    example: 'John Doe',
  })
  full_name?: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    description: 'The email address of the sender',
    example: 'sender@example.com',
  })
  from: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 500)
  @ApiProperty({
    type: String,
    description: 'The subject of the email',
    example: 'Important News',
  })
  subject: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 500)
  @ApiProperty({
    type: String,
    description: 'The email message content',
    example: 'Hello, world!',
  })
  message: string;

  @IsOptional()
  @IsObject()
  @ApiProperty({
    type: [Attachment],
    required: false,
    description: 'An array of attachments',
    example: [
      {
        filename: 'example.pdf',
        content: 'base64content...',
      },
    ],
  })
  attachments?: Attachment[];
}
