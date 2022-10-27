import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as file_upload from 'express-fileupload'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(file_upload());
  await app.listen(3000);
}
bootstrap();
