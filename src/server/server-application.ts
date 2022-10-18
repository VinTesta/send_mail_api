import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import ApiConfig from "./config/api.config";
import RootModule from "./root.module";

export default class ServerApplication {
  private readonly host: string = ApiConfig.HOST;
  private readonly port: number = ApiConfig.PORT;

  public async run(): Promise<void> {
    const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);

    app.useGlobalPipes(new ValidationPipe());
    
    this.buildAPIApplication(app);

    await app.listen(this.port, this.host, this.log);
  }

  private buildAPIApplication(app: NestExpressApplication): void {
    const title: string = 'EmailSender-VinTesta';
    const description: string = 'API documentation';
    const version: string = '1.0.0';

    const options = new DocumentBuilder()
      .setTitle(title)
      .setDescription(description)
      .setVersion(version)
      .addTag('email')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }

  private log(): void {
    Logger.log(`Server started on host: http://${ApiConfig.HOST}:${ApiConfig.PORT};`, ServerApplication.name);
  }

  public static new(): ServerApplication {
    return new ServerApplication
  }
}