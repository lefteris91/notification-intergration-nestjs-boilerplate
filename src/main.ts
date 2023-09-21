import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
