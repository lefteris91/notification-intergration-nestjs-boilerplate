import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtPayloadRequest } from './dtos/jwt-payload.request';
import { RequestSendDto } from './dtos/request.dto';
import {
  InfoResponseDto,
  ErrorResponseDto,
  MessageResponseDto,
  TaskResponseDto,
} from './dtos/responses.dto';
import { TabDto } from './dtos/info.dto';
import { ChatReceiverDto } from './dtos/receivers/receiver-chat.dto';
import { EmailReceiverDto } from './dtos/receivers/receiver-email.dto';
import { PushReceiverDto } from './dtos/receivers/receiver-push.dto';
import { SmsReceiverDto } from './dtos/receivers/receiver-sms.dto';
import { Attachment } from './dtos/senders/attachment.dto';
import { ChatSenderDto } from './dtos/senders/sender-chat.dto';
import { EmailSenderDto } from './dtos/senders/sender-email.dto';
import { PushSenderDto } from './dtos/senders/sender-push.dto';
import { SmsSenderDto } from './dtos/senders/sender-sms.dto';
import { MessageTypeEnum } from './enums/message-type.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(`Hoster Notification Integration Boilerplate - OpenAPI 3.0`)
    .addTag('Info')
    .addTag('Notification')
    .setTermsOfService('http://hosterpointer.io/terms') //here you can set your terms of service if you have any
    .setContact('', '', 'info@hoster.com') //here you can set a contact email
    .setDescription('')
    .setVersion('0.1')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .addSecurityRequirements('JWT-auth')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [
      InfoResponseDto,
      ErrorResponseDto,
      RequestSendDto,
      MessageResponseDto,
      TaskResponseDto,
      ChatReceiverDto,
      EmailReceiverDto,
      PushReceiverDto,
      SmsReceiverDto,
      Attachment,
      ChatSenderDto,
      EmailSenderDto,
      PushSenderDto,
      SmsSenderDto,
      TabDto,
    ],
  });

  SwaggerModule.setup('api', app, document);

  // Make use of class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      exceptionFactory: (errors: ValidationError[]) => {
        console.log('ValidationPipe: ', errors);
        return new BadRequestException('Validation error');
      },
      transform: true,
    }),
  );

  await app.listen(process.env.PORT || 3000);
  console.log(
    `Server started.\nSwagger documentation exists on: http://localhost:${process.env.PORT}/api`,
  );
}
bootstrap();
