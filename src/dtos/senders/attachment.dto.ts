import { IsString, IsOptional, IsBase64, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Attachment {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The filename of the attachment',
    example: 'example.pdf',
  })
  filename: string;

  @IsNotEmpty()
  @IsString()
  @IsBase64()
  @ApiProperty({
    type: String,
    description: 'The base64-encoded content of the attachment',
    example: 'base64content...',
  })
  content: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    required: false,
    description: 'The content type of the attachment',
    example: 'application/pdf',
  })
  contentType?: string;
}
