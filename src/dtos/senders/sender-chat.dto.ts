import { IsString, IsNotEmpty } from 'class-validator';

export class ChatSenderDto {
  @IsNotEmpty()
  @IsString()
  message_id: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
