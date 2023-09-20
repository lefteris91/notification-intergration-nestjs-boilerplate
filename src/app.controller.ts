import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { InfoResponseDto } from './dtos/responses.dto';
import { MessageTypeEnum } from './enums/message-type.enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("info")
  async info(): Promise<InfoResponseDto> {
    return {
      info:{
        name: "The name of the message provider",
        logo: "Logo of the provider",
        description: "A description of the provider",
        type: MessageTypeEnum,
      }
    }
  }
}
