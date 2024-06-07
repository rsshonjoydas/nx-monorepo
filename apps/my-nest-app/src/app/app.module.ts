import { Module } from '@nestjs/common';

import { AppService } from '@apps/app/app.service';

import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
