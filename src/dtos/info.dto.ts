import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class TabDto {
  @IsNotEmpty()
  @IsString()
  label: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  url: string;
}
