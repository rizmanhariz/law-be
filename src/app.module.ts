import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { LogInModule } from './log-in/log-in.module';
import config from './configs/mongo.keys'

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri), LogInModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
