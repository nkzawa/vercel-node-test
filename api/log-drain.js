module.exports = (req, res) => {
  console.log('!request headers:', req.headers);
  console.log('!request body:', JSON.stringify(req.json, null, 2));
  res.end('ok');
}
