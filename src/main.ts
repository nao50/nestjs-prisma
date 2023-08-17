import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import * as fs from 'fs';
import { dump } from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .addTag('example')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Export yaml file
  fs.writeFileSync('./openapi-spec.yaml', dump(document, {}));

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
