// DEPENDENCIES
var express = require('express'),
app = express(),
path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

// CONTROLLERS
var indexController = require('./controllers/index');
var contactController = require('./controllers/contact')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Get clientside assets
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'assets/hearyelogo_cream.png'))); 

app.use(bodyParser.urlencoded({
  extended: true
}));

// ROUTES
app.get('/', indexController.index);
app.get('/contact', contactController.form);
app.get('/thankyou', contactController.thankyou);

// Contact form
app.post('/contact', function (req, res) {
  contactController.sendMail(req, res);
});



// SERVER
app.listen(process.env.PORT || 1337, function(){
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});