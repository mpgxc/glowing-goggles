import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

(async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  app.enableShutdownHooks();
  app.enableCors({
    credentials: true,
  });

  await app.startAllMicroservices();

  app.listen(Number(process.env.APP_PORT) || 3000).then(async () => {
    console.log(`Http Server running 🚀: ${await app.getUrl()}`);
  });
})();
