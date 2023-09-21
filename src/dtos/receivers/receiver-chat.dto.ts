import { IsNotEmpty, IsString } from 'class-validator';

export class ChatReceiverDto {
  @IsNotEmpty()
  @IsString()
  receiver_id: string;
}
