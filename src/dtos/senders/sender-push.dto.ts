import { IsString, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class PushSenderDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  message_id: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  user_id: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 1000)
  message: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  subtitle?: string;
}
