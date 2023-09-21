import { IsString, IsNotEmpty, IsOptional, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PushSenderDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  @ApiProperty({
    type: String,
    description: 'The ID of the push message',
    example: '12345',
  })
  message_id: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  @ApiProperty({
    type: String,
    description: 'The user ID',
    example: 'user123',
  })
  user_id: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  @ApiProperty({
    type: String,
    description: 'The title of the push message',
    example: 'New Notification',
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 1000)
  @ApiProperty({
    type: String,
    description: 'The content of the push message',
    example: 'Hello, world!',
  })
  message: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  @ApiProperty({
    type: String,
    required: false,
    description: 'The subtitle of the push message',
    example: 'Subtitle',
  })
  subtitle?: string;
}
