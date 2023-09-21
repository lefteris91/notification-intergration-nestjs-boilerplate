import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Request,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  AllMessagesDto,
  BooleanResponseDto,
  InfoResponseDto,
  MessageResponseDto,
} from './dtos/responses.dto';
import { MessageTypeEnum } from './enums/message-type.enum';
import { RequestSendDto } from './dtos/request.dto';
import { NotificationStatusEnum } from './enums/notification-status.enum';
import { ApiExceptionFilter } from './api.exception.filter';
import { AuthGuard } from './auth/auth.guard';
import { senderIsHoster } from './auth/auth.interceptors';
import { JwtPayloadRequest } from './dtos/jwt-payload.request';
import { RegisterDeviceForPush } from './dtos/config.dto';

@Controller()
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseFilters(new ApiExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * @returns Promise<InfoResponseDto>
   */
  @HttpCode(200)
  @Get('info')
  async info(
    @Request() request: Request & JwtPayloadRequest,
  ): Promise<InfoResponseDto> {
    return {
      name: 'The name of the message provider',
      logo: 'Logo of the provider',
      description: 'A description of the provider',
      type: MessageTypeEnum.CHAT, // could be of type EMAIL, PUSH , SMS
    };
  }

  /**
   *
   * @param requestBody RequestSendDto
   * @returns Promise with MessageResponseDto
   */
  @HttpCode(201)
  @Post('send')
  async send(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestSendDto,
  ): Promise<MessageResponseDto> {
    return {
      message_id: 'the id of the message',
      status: NotificationStatusEnum.FAILED, // a boolean that indicates if the message was created successfully
      message_meta: {
        meta: 'any information about the message like subject etc',
      },
    };
  }

  @HttpCode(200)
  @Get('messages')
  async getMessages(
    @Request() request: Request & JwtPayloadRequest,
  ): Promise<AllMessagesDto> {
    return;
  }

  @HttpCode(201)
  @Post('push/register-device')
  async registerDevice(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RegisterDeviceForPush,
  ): Promise<BooleanResponseDto> {
    return;
  }

  @HttpCode(200)
  @Get('push/unregister-device/:user_id')
  async unregisterDevice(
    @Request() request: Request & JwtPayloadRequest,
    @Param('user_id') user_id: string,
  ): Promise<BooleanResponseDto> {
    return;
  }
}
