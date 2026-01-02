export default {
  async fetch(request, env) {
    // 尝试从静态资源（Assets）中匹配请求
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) {
      return response;
    }
    // 如果没找到，默认返回 index.html (支持 SPA 路由)
    return env.ASSETS.fetch(new Request(request.url.origin + '/index.html', request));
  },
};
