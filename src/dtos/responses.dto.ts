import {
  IsArray,
  IsBase64,
  IsBoolean,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MessageTypeEnum } from '../enums/message-type.enum';
import { TabDto } from './info.dto';

export class MessageResponseDto {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The ID of the message',
    example: '12345',
  })
  message_id: string;

  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    description: 'Indicates if the operation was successful',
    example: true,
  })
  success: boolean;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
    description: 'Timestamp of the response',
    example: '2023-09-21T12:34:56Z',
  })
  timestamp?: string;
}

export class InfoResponseDto {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Name of the Integration',
    example: 'Twilio',
  })
  name: string;

  @IsString()
  @IsOptional()
  @IsBase64()
  @ApiProperty({
    type: String,
    required: false,
    description: 'Base64-encoded logo',
    example: 'base64encodedlogo...',
  })
  logo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: false,
    description: 'Description of the integration',
    example: 'Integration description',
  })
  description?: string;

  @IsEnum(MessageTypeEnum)
  @ApiProperty({
    enum: MessageTypeEnum,
    description: 'Type of the integration',
    example: MessageTypeEnum.EMAIL,
  })
  type: MessageTypeEnum;

  @IsOptional()
  @IsObject()
  @ApiProperty({
    type: Object,
    required: false,
    description: 'Settings for the Integration',
    example: { key1: 'value1', key2: 'value2' },
  })
  settings?: Record<string, any>;

  @IsOptional()
  @IsObject()
  @ApiProperty({
    type: [TabDto],
    required: false,
    description: 'Notification Integration tabs',
    example: [
      {
        label: 'Tab 1',
        url: 'https://example.com/tab1',
      },
    ],
  })
  notificationTabs?: TabDto[];
}

export class ErrorResponseDto {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Error ID',
    example: 'error123',
  })
  id: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    type: [String] || String,
    required: false,
    description: 'Array of error messages',
    example: ['Error message 1', 'Error message 2'],
  })
  errors?: string[] | string;
}

export class TaskResponseDto {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'Task ID',
    example: 'task123',
  })
  taskId: string;
}
