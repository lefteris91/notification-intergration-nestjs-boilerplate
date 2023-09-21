import { IsString, IsOptional, IsBase64 } from 'class-validator';

export class Attatchment {
  @IsString()
  filename: string;

  @IsString()
  @IsBase64()
  content: string;

  @IsOptional()
  @IsString()
  contentType?: string;
}
