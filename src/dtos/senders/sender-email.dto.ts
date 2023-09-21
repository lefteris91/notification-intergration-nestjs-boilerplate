import {
  IsEmail,
  IsString,
  IsNotEmpty,
  Length,
  IsObject,
  IsOptional,
} from 'class-validator';
import { Attatchment } from './attachment.dto';

export class EmailSenderDto {
  @IsNotEmpty()
  @IsString()
  message_id: string;

  @IsOptional()
  @IsString()
  full_name?: string;

  @IsNotEmpty()
  @IsEmail()
  from: string;

  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 500)
  message: string;

  @IsOptional()
  @IsObject()
  attachments?: Attatchment[];
}
