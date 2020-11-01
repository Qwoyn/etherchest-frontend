import sslRedirect from 'heroku-ssl-redirect';
const express = require("express");
const path = require("path");
const app = express();

// enable ssl redirect
app.use(sslRedirect());

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT);
