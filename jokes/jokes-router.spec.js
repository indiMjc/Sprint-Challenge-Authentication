const request = require('supertest');

const server = require('../api/server');

describe('jokes-router', () => {
  it('should return json format', () => {
    return request(server)
      .get('/api/jokes')
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });

  it('should return status 400 if not logged in', () => {
    return request(server)
      .get('/api/jokes')
      .then(res => {
        expect(res.status).toBe(400);
      });
  });
});
