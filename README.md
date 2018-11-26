next-material-aws-lambda
========================

[![Build Status](https://travis-ci.org/skriems/next-material-aws-lambda.svg?branch=master)](https://travis-ci.org/skriems/next-material-aws-lambda)
[![Greenkeeper badge](https://badges.greenkeeper.io/skriems/next-material-aws-lambda.svg)](https://greenkeeper.io/)

A [Next.js](https://github.com/zeit/next.js/) deployment on AWS Lambda leveraging [serverless-http][] and [material-ui][].

This is the official Next.js example from the material-ui repo which you can find [here][].

Deploy
------

Once you have `serverless` configured and created your Domain with `serverless create_domain` install with `yarn` or `npm`:

    $ yarn install
    $ npm run deploy

One limitation though is, that currently HTTP is not redirected to HTTPS.

Development
-----------

    $ npm run dev


[serverless-http]: https://github.com/dougmoscrop/serverless-http/
[material-ui]: https://github.com/mui-org/material-ui/
[here]: https://github.com/mui-org/material-ui/tree/master/examples/nextjs
[bug]: https://github.com/serverless/serverless/issues/5094
