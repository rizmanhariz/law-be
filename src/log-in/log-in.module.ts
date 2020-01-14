import { jwtConstants } from './../configs/jwt.keys';
import { LogInSchema } from './../schemas/logIn.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { LogInController } from './log-in.controller';
import { LogInService } from './log-in.service';
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports:[
    MongooseModule.forFeature([{name:'users', schema: LogInSchema}]),
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  controllers: [LogInController],
  providers: [LogInService]
})
export class LogInModule {}
