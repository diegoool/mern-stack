const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000) // Si queremos desplegar en la nube tomamos el port que nos entregue o si no el 3000
 
// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static files
// console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`); // El port declarado en Settings
});