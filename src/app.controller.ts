import { Body, Controller, Delete, Get, HttpCode, Param, Post, Provider } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageResponseDto } from './dtos/responses.dto';
import { MessageTypeEnum } from './enums/message-type.enum';
import {  RequestSendDto } from './dtos/request.dto';
import { InfoResponseDto } from './dtos/info-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * @returns Promise<InfoResponseDto>
   */
  @HttpCode(200)
  @Get("info")
  async info(): Promise<InfoResponseDto> {
    return {
      
        name: "The name of the message provider",
        logo: "Logo of the provider",
        description: "A description of the provider",
        type: MessageTypeEnum.CHAT, // could be of type EMAIL, PUSH , SMS
      
    }
  }

  /**
   *
   * @param requestBody RequestCreateDto
   * @returns Promise with MessageResponseDto
   */
  @HttpCode(201)
  @Post("send")
  async send(
    @Body() requestBody: RequestSendDto
  ): Promise<MessageResponseDto> {
    
    return {
      message_id: "the id of the message",
      success: true, // a boolean that indicates if the message was created successfully
      message_meta: {
        meta: "any information about the message like subject etc"
      }
    };
  }

  @HttpCode(200)
  @Delete(":id")
  async delete(@Param("id") id: string): Promise<any> {
    return null;
  }
}

  

