const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 仅在直接运行时启动服务器，而不是在被导入时
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
}

module.exports = app; // 确保导出 app，供测试文件使用

