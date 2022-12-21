import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Extension } from "src/v1/business/common/type/extension.type";
import ISendEmailDto from "src/v1/business/domain/email/use-case/dto/input/sendEmail-dto.interface";

export default class SendEmailRequest implements ISendEmailDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  senderEmailAddress: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  recipientEmailAddress: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string; 

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;

  @ApiProperty({ example: [{_name: "cake_secret.txt", _extension: "txt", _content: "ianmsdoMKAMSJNMAIOSDOAiJAI91293"}]})
  attachment: { _name: string; _extension: Extension; _content: string; }[];

  @ApiProperty()
  copyEmailAddress: string[];
}