import { Module } from '@nestjs/common';
import V1Module from 'src/v1/application/dependency-inversion/v1.module';

@Module({
    imports: [V1Module],
})

export default class RootModule {}