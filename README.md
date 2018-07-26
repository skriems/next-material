next-material
=============

A [Next.js](https://github.com/zeit/next.js/) deployment on AWS Lambda leveraging [serverless-http][] and [material-ui][].

This is the official Next.js example from the material-ui repo which you can find [here][].

Make sure that you have `serverless` installed globally. At the time of writing there's a [bug][] in version `1.28.0` which made me downgrade to version `1.27.3`.

Deploy
------

Once you have `serverless` configured install with `yarn` or `npm`:

    $ yarn install
    $ npm run deploy

Development
-----------

    $ npm run dev


[serverless-http]: https://github.com/dougmoscrop/serverless-http/
[material-ui]: https://github.com/mui-org/material-ui/
[here]: https://github.com/mui-org/material-ui/tree/master/examples/nextjs
[bug]: https://github.com/serverless/serverless/issues/5094
