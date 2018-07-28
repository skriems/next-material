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
      let host = req.headers.host;
      let assetPrefix = 'https://' + host;
      if (host.indexOf('amazonaws.com') != -1) {
        // needs to match the stages defined in `serverless.yml`
        let stage = dev ? '/dev' : '/prod'
        assetPrefix += stage;
      }
      app.setAssetPrefix(assetPrefix);
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
