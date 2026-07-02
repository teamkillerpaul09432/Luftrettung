const http = require('http');
const req = http.get('http://127.0.0.1:3000/presse/1', (res) => {
  console.error('STATUS', res.statusCode);
  let body = '';
  res.on('data', (chunk) => body += chunk.toString());
  res.on('end', () => {
    console.log('BODY_START');
    console.log(body.slice(0, 2000));
  });
});
req.on('error', (err) => {
  console.error('ERR', err.message);
});
