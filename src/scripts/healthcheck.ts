import { request } from 'http';

const options = {
  host: 'localhost',
  port: '3000',
  path: '/api/ping',
};

const req = request(options, ({ statusCode }) => {
  if (statusCode !== 200) {
    process.exit(1);
    return;
  }

  process.exit(0);
});

req.on('error', () => process.exit(1));
req.end();
