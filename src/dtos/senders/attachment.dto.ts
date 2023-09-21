import { IsString, IsOptional, IsBase64, IsNotEmpty } from 'class-validator';

export class Attatchment {
  @IsNotEmpty()
  @IsString()
  filename: string;

  @IsNotEmpty()
  @IsString()
  @IsBase64()
  content: string;

  @IsOptional()
  @IsString()
  contentType?: string;
}
