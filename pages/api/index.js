const request = require('request');
module.exports = (req, res) => {
  request.post(req.body.response_url, {
	  json: {
		  text: 'ok pour mep!'
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