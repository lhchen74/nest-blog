import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

// import * as mongoose from 'mongoose'
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  // mongoose.connect('mongodb://localhost/nest-blog-api', {
  //   useNewUrlParser: true,
  //   useFindAndModify: true,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true
  // })

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('NestJs blog API')
    .setDescription('The blog API description')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
