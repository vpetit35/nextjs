module.exports = (request, response) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
  res.statusCode = 200
}