import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TabDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The label or name for the tab',
    example: 'Home',
  })
  label: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  @ApiProperty({
    type: String,
    description: 'The URL associated with the tab',
    example: 'https://example.com/home',
  })
  url: string;
}
