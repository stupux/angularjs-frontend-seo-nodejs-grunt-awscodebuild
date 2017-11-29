const express = require('express');
const app     = express();

app.use(express.static(__dirname + '/dist/'));
// app.use(cors())
// app.get('*', function(request, response){
//     response.sendFile(__dirname + '/dist/index.html');
// });

let server = require('http').createServer(app);  
server.listen(3000, function () {
    console.log('listening on port ' + 3000 + '!');
});