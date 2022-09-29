import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import RootModule from './root.module';
require("dotenv/config");
export default class ServerApplication {
  private readonly host: string = process.env.HOST_API;
  private readonly port: number = Number(process.env.PORT_API);

  public async run(): Promise<void> {
    const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);

    this.buildAPIDocumentation(app);

    await app.listen(this.port, this.host, this.log);
  }

  private buildAPIDocumentation(app: NestExpressApplication): void {
    const title = 'GKT-Boilerplate-NestJS';
    const description = 'GKT-Boilerplate-NestJS API documentation';
    const version = '1.0.0';

    const options: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .addBearerAuth({
            type: 'apiKey',
            in: 'header',
            name: 'GKT-Boilerplate-NestJS',
        })
        .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('documentation', app, document);
  }

  private log(): void {
    Logger.log(`Server started on host: http://${process.env.HOST_API}:${process.env.PORT_API};`, ServerApplication.name);
  }

  public static new(): ServerApplication {
      return new ServerApplication();
  }
}