// test/index.test.js
const request = require('supertest');
const app = require('../index'); // 假设你从 index.js 导出了 app

describe('GET /', () => {
  it('should return "Hello World!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
    expect(response.status).toBe(200);
  });
});
