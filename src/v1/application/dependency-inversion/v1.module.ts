import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import EmailModule from "./email.module";

const modules = [ EmailModule ];

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'v1',
        children: modules
      }
    ]),
    ...modules
  ]
})
export default class V1Module {}