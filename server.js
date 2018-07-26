const express = require('express');
const compression = require('compression');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const createServer = () => {
  const server = express();
  server.use(compression());
  server.get('*', (req, res) => {
    if (process.env.LAMBDA) {
      // `assetPrefix` needs to match `serverless.yml:provider.stage
      let assetPrefix = dev ? '/dev' : '/prod'
      app.setAssetPrefix(assetPrefix)
    }
    handle(req, res)}
  );
  return server;
};

const server = createServer();

if (!process.env.LAMBDA) {
  app.prepare()
    .then(() => {
      server.listen(port, (err) => {
        if (err) throw err;
        // eslint-disable-next-line
        console.log(`> Ready on http://localhost:${port}`);
      });
    });
}

exports.app = app;
exports.server = server;
