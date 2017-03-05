const createServer = require('http').createServer;
const trace        = require('jstrace');

createServer((req, res) => {
  trace('request:start', {
    url: req.url
  });

  res.setHeader('content-type', 'application/json');

  let status, body;
  if (req.url === '/prognosis' && req.method === 'GET') {
    status = 200;
    body = {
      ok: true
    };
  } else {
    status = 404;
    body = {
      error: 'notfound'
    };
  }

  res.writeHead(status);
  res.end(JSON.stringify(body));

  trace('request:end', {
    statusCode: status,
    body: body
  });
})
.listen(5000, () => {
  console.error('up');
});
