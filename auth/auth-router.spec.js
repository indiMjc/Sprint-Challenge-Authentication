const Users = require('../users/users-model');
const db = require('../database/dbConfig');

describe('auth-router.js', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });
});
