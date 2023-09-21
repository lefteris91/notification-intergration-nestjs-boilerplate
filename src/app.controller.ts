/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Request,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import {
  ErrorResponseDto,
  InfoResponseDto,
  MessageResponseDto,
  TaskResponseDto,
} from './dtos/responses.dto';
import { MessageTypeEnum } from './enums/message-type.enum';
import { RequestSendDto } from './dtos/request.dto';
import { ApiExceptionFilter } from './api.exception.filter';
import { AuthGuard } from './auth/auth.guard';
import { senderIsHoster } from './auth/auth.interceptors';
import { JwtPayloadRequest } from './dtos/jwt-payload.request';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

@Controller()
@UseGuards(AuthGuard)
@UseInterceptors(senderIsHoster)
@UseFilters(new ApiExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * @returns Promise<InfoResponseDto>
   */
  @ApiOkResponse({
    type: InfoResponseDto,
    description: 'Successful response with info data',
  }) // Define the response type and description
  @ApiResponse({
    type: ErrorResponseDto,
    description: 'Error Response',
  }) // Define the response type and description for internal server error
  @ApiTags('Info')
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
  @ApiOperation({ summary: 'Send a message' }) // Add an operation summary
  @ApiOkResponse({
    schema: {
      oneOf: [
        { $ref: getSchemaPath(MessageResponseDto) },
        { $ref: getSchemaPath(TaskResponseDto) },
      ],
    },
    description: 'Message sent successfully with created response',
  }) // Define the response type and description for successful creation
  @ApiResponse({
    type: ErrorResponseDto,
    description: 'Error Response',
  }) // Define the response type and description for internal server error
  @HttpCode(201)
  @ApiTags('Notification')
  @Post('send')
  async send(
    @Request() request: Request & JwtPayloadRequest,
    @Body() requestBody: RequestSendDto,
  ): Promise<MessageResponseDto | TaskResponseDto> {
    return {
      message_id: 'the id of the message',
      success: false, // a boolean that indicates if the message was created successfully
    };
  }
}
