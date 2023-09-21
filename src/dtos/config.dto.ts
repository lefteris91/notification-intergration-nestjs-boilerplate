import { IsNotEmpty, IsString, IsBoolean, IsInt } from 'class-validator';

export class EmailConfig {
  @IsNotEmpty()
  @IsString()
  smtp_server: string;

  @IsNotEmpty()
  @IsInt()
  smtp_port: number;

  @IsNotEmpty()
  @IsString()
  smtp_username: string;

  @IsNotEmpty()
  @IsString()
  smtp_password: string;

  @IsNotEmpty()
  @IsBoolean()
  use_tsl: boolean;
}

export class RegisterDeviceForPush {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  device_token: string;
}

export class ChatUser {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  displayName: string;
}
