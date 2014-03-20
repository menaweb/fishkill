//App.js

var express = require('express'),
	app = express(),
	db = require('./config/dbschema'),
	pass = require('./config/pass'),
	passport = require('passport'),
	basic_routes = require('./routes/basic'),
	user_routes = require('./routes/user');



//var MongoClient = require('mongodb').MongoClient;
//var ObjectID = require('mongodb').ObjectID;


//Configuración

app.configure(function(){
	//Localización de los ficheros estáticos
	app.use(express.static(__dirname + '/public'));

	app.set('views', __dirname + '/views');
  	app.set('view engine', 'jade');

	//Muestra un log de todos los request en la consola
	app.use(express.logger('dev'));
	app.use(express.cookieParser());
	app.use(express.methodOverride());
	app.use(express.session({ secret: 'keyboard cat' }));
	// Initialize Passport!  Also use passport.session() middleware, to support
	// persistent login sessions (recommended).
	app.use(passport.initialize());
	app.use(passport.session());

	//Permite cambiar el HTML con el método POST
	app.use(express.json());
	app.use(express.urlencoded());

});


//Conexión con la base de datos

/*MongoClient.connect('mongodb://localhost:27017/todos', function(err, db){
	if(err) throw err;
	else console.log("Connected!");

	
	var Todo = db.collection('todos');

	
	// Rutas de nuestra API
	// GET de todos los TODOs
	app.get('/api/todos', function(req, res) {				
	    Todo.find().toArray(function(err, todos) {
	        if(err) {
	            res.send(err);
	        }
	        console.log(todos);
	        res.json(todos);
	    });
	});

	// POST que crea un TODO y devuelve todos tras la creación
	app.post('/api/todos', function(req, res) {				
	    Todo.insert(
	    	{ text: req.body.text },
	        { done: false },
	    	function(err, todo){
	        	if(err) {
	            	res.send(err);
	        	}

	        	Todo.find().toArray(function(err, todos) {
		            if(err){
		                res.send(err);
		            }
	            	res.json(todos);
	        	});
	    });
	});

	// DELETE un TODO específico y devuelve todos tras borrarlo.
	app.delete('/api/todos/:todo', function(req, res) {		
	    Todo.remove({_id: ObjectID(req.params.todo)}, function(err, todo) {
	        if(err){
	            res.send(err);
	        }

	        Todo.find(function(err, todos) {
	            if(err){
	                res.send(err);
	            }
	            res.json(todos);
	        });

	    })
	});*/

	// Carga una vista HTML simple donde irá nuestra Single App Page
	// Angular Manejará el Frontend
	app.get('/', function(req, res) {						
	    res.send('./public/index.html');				
	});


	// User pages
	app.get('/login', user_routes.getlogin);
	app.post('/login', user_routes.postlogin);
	app.get('/logout', user_routes.logout);
	app.get('/account', pass.ensureAuthenticated, user_routes.account);
	app.get('/member', pass.ensureAuthenticated, user_routes.member);
	app.get('/admin', pass.ensureAuthenticated, pass.ensureAdmin, user_routes.admin);
	app.get('/manage', pass.ensureAuthenticated, pass.ensureAdmin, function(req, res) {						
	    res.send('./public/manage.html');				
	});
	


//});





//Escucha en el puerto 8080 y corre el server
app.listen(8080, function(){
	console.log('App listening on port 8080');
});