require('babel-core/register');
require('babel-polyfill');

import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(3000);
}
bootstrap();
