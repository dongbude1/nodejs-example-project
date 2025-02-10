const request = require('supertest');
const app = require('../index'); // 导入 app
const server = app.listen(3000); // 启动服务器并监听 3000 端口

// 在所有测试完成后关闭服务器
afterAll(() => {
  server.close(); // 关闭服务器
});

describe('GET /', () => {
  it('should return "Hello World!"', async () => {
    const response = await request(server).get('/'); // 使用服务器实例进行请求
    expect(response.text).toBe('Hello World!');
    expect(response.status).toBe(200);
  });
});

