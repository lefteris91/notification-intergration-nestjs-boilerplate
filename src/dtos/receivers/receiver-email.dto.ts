import {
  ArrayUnique,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class EmailReceiverDto {
  @IsNotEmpty()
  @IsArray()
  @IsEmail({}, { each: true })
  @ArrayUnique()
  to: string[];

  @IsOptional()
  @IsArray()
  @IsEmail({}, { each: true })
  @ArrayUnique()
  cc?: string[];

  @IsOptional()
  @IsArray()
  @IsEmail({}, { each: true })
  @ArrayUnique()
  bcc?: string[];
}
