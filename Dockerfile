# 使用官方 NGINX 镜像作为基础镜像
FROM nginx:latest

# 将自定义的 index.html 复制到 NGINX 默认的 HTML 目录
COPY ./index.html /usr/share/nginx/html/

# 暴露 NGINX 默认的 80 端口
EXPOSE 80

# 启动 NGINX 服务
CMD ["nginx", "-g", "daemon off;"]

