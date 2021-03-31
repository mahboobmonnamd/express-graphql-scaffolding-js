import db from './../../database/postgres';

export default {
  Query: {
    books: async () => {
      const data = await db.queryUsingPool('select * from books');
      return data.rows;
    },
    book: async (_parent, args) => {
      const data = await db.queryUsingPool(`select * from books where id = ${args.bookId}`);
      return data.rows[0];
    },
  },
  Mutation: {
    createBook: async (_parent, args) => {
      const {
        book: { id, name, author },
      } = args;
      const data = await db.queryUsingPool(
        `INSERT INTO public.books(id, name, author) VALUES (${id}, '${name}', '${author}') returning id, name, author;`,
      );
      console.log('🚀 ~ file: books.js ~ line 16 ~ createBook: ~ data', data);
      return data.rows[0];
    },
  },
  // If we need to send response with extra data
  Book: {
    extraData: {
      resolve: () => {
        return 'extra data from resolve';
      },
    },
    contextData: {
      resolve: (_parent, args, context) => {
        return context.contextData;
      },
    },
  },
};
