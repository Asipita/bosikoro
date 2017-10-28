const express = require('express');

var app = express();

var port = process.env.PORT || 3500

app.use(express.static(__dirname + '/public'))

// app.get('')

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})