
const express = require("express");
const path = require("path");
const app = express();
var Ddos = require('ddos')
var ddos = new Ddos({burst:15, limit:20})

//ddos protection
app.use(ddos.express);

//redirect to ssl
if(process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
      next()
  })
}

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT);
