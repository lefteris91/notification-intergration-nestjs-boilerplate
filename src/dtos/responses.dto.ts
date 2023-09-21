import {
  IsBase64,
  IsBoolean,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { TabDto } from './info.dto';

export class MessageResponseDto {
  @IsString()
  message_id: string;

  @IsBoolean()
  success: boolean;

  @IsString()
  @IsOptional()
  timestamp?: string;
}

export class InfoResponseDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  @IsBase64()
  logo?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(MessageTypeEnum)
  type: MessageTypeEnum;

  @IsOptional()
  @IsObject()
  settings?: Record<string, any>;

  @IsOptional()
  @IsObject()
  notificationTabs?: TabDto[];
}

export class ErrorResponseDto {
  @IsString()
  id: string;

  @IsOptional()
  errors?: string[] | string;
}

export class TaskResponseDto {
  @IsString()
  taskId: string;
}
