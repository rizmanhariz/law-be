import { LogInSchema } from './../schemas/logIn.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { LogInController } from './log-in.controller';
import { LogInService } from './log-in.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'users', schema: LogInSchema}])],
  controllers: [LogInController],
  providers: [LogInService]
})
export class LogInModule {}
