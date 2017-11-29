const express = require('express');
const app     = express();

app.use(express.static(__dirname + '/dist/'));
// app.use(cors())
// app.get('*', function(request, response){
//     response.sendFile(__dirname + '/dist/index.html');
// });

let server              = require('http').createServer(app);  
server.listen(3000, function () {
    console.log('listening on port ' + 3000 + '!');
});

// app.listen(3000, () => console.log('Example app listening on port 3000!'))

// var port = process.env.PORT || 3000,
//     http = require('http'),
//     fs = require('fs');

// http.createServer(function (req, res) {
//   if (req.url.indexOf('/img') != -1) {
//     var filePath = req.url.split('/img')[1];
//     fs.readFile(__dirname + '/dist/img' + filePath, function (err, data) {
//       if (err) console.log(err);
//       res.writeHead(200, {'Content-Type': 'image/svg+xml'});
//       res.write(data);
//       res.end();
//     });
//   } else if (req.url.indexOf('/js') != -1) {
//     var filePath = req.url.split('/js')[1];
//     fs.readFile(__dirname + '/dist/js' + filePath, function (err, data) {
//       if (err) console.log(err);
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   } else if(req.url.indexOf('/css') != -1) {
//     var filePath = req.url.split('/css')[1];
//     fs.readFile(__dirname + '/dist/css' + filePath, function (err, data) {
//       if (err) console.log(err);
//       res.writeHead(200, {'Content-Type': 'text/css'});
//       res.write(data);
//       res.end();
//     });
//   } else {
//     fs.readFile(__dirname + '/dist/index.html', function (err, data) {
//       if (err) console.log(err);
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
// }).listen(port, '0.0.0.0');
