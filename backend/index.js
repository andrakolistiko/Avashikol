//codigo mas seguro y robusto
'use strict'
var mongoose=require('mongoose');
var port='3600';
//promesas nativas de JavaStript
mongoose.promise=global.Promise;
//importancion tu la aplicacion de Express
var app=require('./app');
//conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/proyecto00db')
.then(()=>{
    console.log("Conexion establecida con la bdd");
    app.listen(port,()=>{
        console.log("Conexion establecida en la url: localhost:3600");
    })
})
.catch(err=>console.log(err));