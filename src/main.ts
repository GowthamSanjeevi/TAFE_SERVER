import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PostStatusInterceptor } from "./middleware/post.interceptor";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // app.use(cookieParser());
  //this interceptor change the POST method status code from 201 to 200
  app.useGlobalInterceptors(new PostStatusInterceptor())

  const config = new DocumentBuilder()
    .setTitle('Tafe')
    .setDescription('The Tafe API description')
    .setVersion('1.0')
    .build();
  const headerhide = {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Tafe API",
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, headerhide);

  await app.listen(3000);
  console.log("Tafe Api successfully stared on port 3000");
}
bootstrap();