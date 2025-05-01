import { Resolver, Query, ID } from '@nestjs/graphql';
import { ThreadsService } from './threads.service';
import { Thread } from './thread.type';

@Resolver(()=> Thread)
export class ThreadsResolver {
  constructor(private readonly threadsService: ThreadsService) { }
  
 @Query(() => [Thread], { name: 'threads' })
  async getThreads() {
    return [
      { id: '1', title: 'Thread 1' },
      { id: '2', title: 'Thread 2' }
    ];
  ;
  }

}
