import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PushReceiverDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The user ID',
    example: '12345',
  })
  userId: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  @ApiProperty({
    type: [String],
    description: 'An array of device tokens',
    example: ['token1', 'token2'],
  })
  deviceTokens: string[];
}
