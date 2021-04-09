
module.exports = (req, res) => {
  console.log('Got request at:', req.url);
  res.end(JSON.stringify(req.headers, null, 2));
}
