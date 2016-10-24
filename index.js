var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3333));
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
