const request = require('supertest');
const app = require('../index'); // ✅ 确保 index.js 里正确导出了 app
const server = app.listen(); // ✅ 启动服务器实例

afterAll(() => {
  server.close(); // ✅ 确保 Jest 退出时关闭服务器，避免 Jest 超时
});

describe('GET /', () => {
  it('should return "Hello World!"', async () => {
    const response = await request(server).get('/'); // ✅ 这样 supertest 才能正确使用
    expect(response.text).toBe('Hello World!');
    expect(response.status).toBe(200);
  });
});

