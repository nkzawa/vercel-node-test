module.exports = (req, res) => {
  console.log('Got request at:', req.url);
  res.setHeader('cache-control', 's-maxage=60');
  res.end(`This should be cached: ${new Date().toISOString()}`);
}
