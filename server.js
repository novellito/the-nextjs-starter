/* eslint-disable */
const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

const devProxy = {
  '/api': {
    target: 'http://localhost:5000/api',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true,
  },
};

const prodProxy = {
  '/api': {
    target: '/api',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true,
  },
};

app
  .prepare()
  .then(() => {
    const server = express();

    const { createProxyMiddleware } = require('http-proxy-middleware');

    if (dev && devProxy) {
      server.use(createProxyMiddleware('/api', devProxy['/api']));
    } else {
      server.use(createProxyMiddleware('/api', prodProxy['/api']));
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
