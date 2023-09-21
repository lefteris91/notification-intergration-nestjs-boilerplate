import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChatSenderDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The ID of the message',
    example: '12345',
  })
  message_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The message content',
    example: 'Hello, world!',
  })
  message: string;
}
