import { Module } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { ThreadsResolver } from './threads.resolver';

@Module({
  providers: [ThreadsResolver, ThreadsService],
})
export class ThreadsModule {}
