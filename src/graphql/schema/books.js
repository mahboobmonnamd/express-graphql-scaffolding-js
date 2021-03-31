import gql from 'graphql-tag';

export const BookSchema = gql`
  type Book {
    id(preferred: Int): String!
    name: String
    author: String
    extraData: String
    contextData: String
  }

  input InputBook {
    id: Int!
    name: String!
    author: String!
  }

  extend type Query {
    books: [Book]
    book(bookId: String!): Book
  }

  extend type Mutation {
    createBook(book: InputBook!): Book
  }
`;
