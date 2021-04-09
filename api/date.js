const hello = require('./_utils/hello');

module.exports = (req, res) => {
  console.log('Got request at:', req.url);
  res.end(JSON.stringify({
    date: new Date().toISOString(),
    foo: process.env.foo,
    url: req.url,
    env: process.env,
    hello: hello('world'),
  }, null, 2));
}
