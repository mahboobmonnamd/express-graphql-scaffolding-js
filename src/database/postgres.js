import { Pool } from 'pg';
import config from 'config';

let db = null;
let connectionString = `postgresql://${config.get('dbUrl')}`;

const PG = {
  connect: async () => {
    if (db) {
      return db;
    }
    try {
      db = new Pool({ connectionString });
      await PG.validateQuery();
      return db;
    } catch (error) {
      console.log('connect: ~ error', error);
    }
  },
  queryUsingPool: async (query, args) => {
    return db.query(query, args);
  },
  validateQuery: async () => {
    const result = await PG.queryUsingPool('select now();', null);
    console.log('validateQuery: ~ result', result.rows);
    return result;
  },
};

export default PG;
