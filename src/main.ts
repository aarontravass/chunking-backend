import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json as bodyparserJSON, urlencoded as bodyparserURLEncoded } from 'body-parser';
import { json as expressJSON, urlencoded as expressURLEncoded } from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
        'platform',
        'app_version',
        'header_start',
        'header_end',
        'header_total'
    ],
    credentials: true,
    optionsSuccessStatus: 200
});

  app.use(bodyparserJSON({ limit: '10mb' }));
  app.use(
      bodyparserURLEncoded({
          limit: '10mb',
          extended: true,
          parameterLimit: 100
      })
  );
  //app.use(bodyParser.json({ type: 'application/csp-report' }));
  app.use(expressJSON({ limit: '3mb' }));
  //app.use(express.json({ limit: '3mb', type: 'application/csp-report' }));
  app.use(expressURLEncoded({ limit: '10mb', extended: true, parameterLimit: 100 }));
  await app.listen(3000);
}
bootstrap();


