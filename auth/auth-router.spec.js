const request = require('supertest');

const server = require('../api/server');

const Users = require('../users/users-model');
const db = require('../database/dbConfig');

describe('auth-router.js', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('register', () => {
    it('should return json', () => {
      return request(server)
        .post('/api/auth/register')
        .send({ username: 'testing', password: 'params' })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
