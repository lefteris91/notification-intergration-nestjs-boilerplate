import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { InfoResponseDto, MessageResponseDto } from './dtos/responses.dto';
import { MessageTypeEnum } from './enums/message-type.enum';
import { RequestCreateDto } from './dtos/request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(200)
  @Get("info")
  async info(): Promise<InfoResponseDto> {
    return {
      info:{
        name: "The name of the message provider",
        logo: "Logo of the provider",
        description: "A description of the provider",
        type: MessageTypeEnum.CHAT, // could be of type EMAIL, PUSH , SMS
      }
    }
  }

  @HttpCode(201)
  @Post("create")
  public async create(
    @Body() requestBody: RequestCreateDto
  ): Promise<MessageResponseDto> {
    
    return {
      message_id: "the id of the message",
      success: true, // a boolean that indicates if the message was created successfully
      message_meta: {
        meta: "any information about the message like subject etc"
      }
    };
  }
}

