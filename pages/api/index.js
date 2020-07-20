const request = require('request');
module.exports = (req, res) => {
  request.post(response_url, {
	  json: {
		  text: 'ok'
		}
	}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
})
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
  res.statusCode = 200
}