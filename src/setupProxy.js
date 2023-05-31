const { createProxyMiddleware } = require('http-proxy-middleware');
const DOMAIN = 'https://smeet-makwana.onrender.com/';
// const DOMAIN = 'http://localhost:8082/';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: DOMAIN,
      changeOrigin: true,
    })
  );
};