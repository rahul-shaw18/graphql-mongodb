import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';

@Resolver()
export class BookResolver {
  @Query('books')
  getAllBook() {
    return [
      { id: 1, title: 'Book 1', author: 'Author 1', price: 100 },
      { id: 2, title: 'Book 2', author: 'Author 2', price: 200 },
      { id: 3, title: 'Book 3', author: 'Author 3', price: 300 },
    ];
  }
}
