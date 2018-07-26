const serverless = require('serverless-http');
const { app, server } = require('./server');

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'binary/octet-stream',
  'image/jpeg',
  'image/png',
  'image/gif',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
  'image/x-icon',
  'image/svg+xml',
  'application/font-woff2',
  'application/font-woff',
  'font/woff',
  'font/woff2',
];

exports.handler = (event, context, callback) => {
  app.prepare()
    .then(() => {
      // saves some money
      if (event.source === 'serverless-plugin-warmup') {
        console.log('WarmUP - Lambda is warm!')
        return callback(null, 'Lambda is warm!')
      }

      const handler = serverless(server, {
        binary: binaryMimeTypes,
      });
      return handler(event, context, callback);
    });
};
