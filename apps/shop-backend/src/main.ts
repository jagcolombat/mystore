/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { getDbConnection, getDbConnectionOptions } from './shared/utils';

const port = 3333;

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { cors: true});
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix, 'Bootstrap');
  });

  /**
   * Apply validation for all inputs globally
   */
  app.useGlobalPipes(
    new ValidationPipe({
        whitelist: true,
        transform: true
    })
  );
}

bootstrap();
