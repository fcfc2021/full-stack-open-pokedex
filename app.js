const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000 // eslint-disable-line no-undef

app.use(express.static('dist'))

//health check copied from part11c
app.get('/health', (req, res) => {
  res.send('ok')
})


app.get('/version', (req, res) => {
  res.send('1.0.0') // change this string to ensure a new version deployed
})


app.listen(PORT, () => {

  console.log('server started on port 5000')   // eslint-disable-line no-console

})
