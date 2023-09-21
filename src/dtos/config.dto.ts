import { IsNotEmpty, IsString, IsBoolean, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailConfig {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'SMTP server hostname or IP address',
    example: 'smtp.example.com',
  })
  smtp_server: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty({
    type: Number,
    description: 'SMTP server port number',
    example: 587,
  })
  smtp_port: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'SMTP server username',
    example: 'user@example.com',
  })
  smtp_username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'SMTP server password',
    example: 'password123',
  })
  smtp_password: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    description: 'Use TLS for SMTP connection',
    example: true,
  })
  use_tls: boolean;
}

export class RegisterDeviceForPush {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'User ID',
    example: 'user123',
  })
  user_id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Device token for push notifications',
    example: 'device_token_123',
  })
  device_token: string;
}

export class ChatUser {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Username',
    example: 'john_doe',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Display name for the user',
    example: 'John Doe',
  })
  displayName: string;
}
