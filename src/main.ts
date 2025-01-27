import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Prueba API Cuentas') // Título de tu API
    .setDescription('API para la gestión de cuentas bancarias') // Descripción
    .setVersion('1.0') // Versión de la API
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Configura Swagger en la ruta /api

  await app.listen(3000);
}
bootstrap();
