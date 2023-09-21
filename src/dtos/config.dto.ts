import { IsNotEmpty, IsString, IsEmail, IsBoolean } from 'class-validator';

export class EmailConfig {
  @IsString()
  smtp_server: string;
  @IsString()
  smtp_port: string;
  @IsString()
  smtp_username: string;
  @IsString()
  smtp_password: string;
  @IsBoolean()
  use_tsl: boolean;
}
// export class SmSConfig {}

export class RegisterDeviceForPush {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  device_token: string;
}

export class ChatUser {
  @IsString()
  username: string;
  @IsString()
  displayName: string;
}
