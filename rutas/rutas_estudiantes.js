var mongojs = require('mongojs');
var uri = 'mongodb://127.0.0.1:27017/Lab07'; 
var db = mongojs(uri,["Estudiantes"]);

function estudiantes_listado(req,res){
    db.Estudiantes.find().sort({nombre:1},function(err,records){
        if(err){
            console.log('Error al acceder a la base de datos.');
            return;
        }
        res.render('m_estudiantes_listado',{records: records});
    });
}

module.exports = {
    listado: function (req,res){
        estudiantes_listado(req,res);
    },
    nuevo: function (req,res){
        res.render('m_estudiantes_nuevo',{});
    },
    grabar_nuevo: function (req,res){
        var xid = req.body['xid' ]*1;
        var xcod = req.body['xcod'];
        var xnom = req.body['xnom'];
        var xcor = req.body['xcor'];
        db.Estudiantes.find().sort({_id:-1},function(err,records){
            if (err){
                console.log('Error al acceder a la base de datos.');
                res.end();
                return;
            }
            var xid = records[0]._id + 1;
            db.Estudiantes.insert({_id:xid, codigo:xcod, nombre:xnom, correo:xcor}, function(){
                estudiantes_listado(req,res);
            });
        });
    },
    editar: function (req,res){
        var xid = req.params.xid*1;
        console.log(xid);
        db.Estudiantes.find({_id:xid}, function(err,records){
            if(err){
                console.log('Error al acceder a la base de datos.');
                res.end();
                return;
            }
            res.render('m_estudiantes_editar',{estudiantes: records[0]});
        });
    },
    grabar_editar: function (req,res){
        var xid = req.body['xid' ]*1;
        var xcod = req.body['xcod'];
        var xnom = req.body['xnom'];
        var xcor = req.body['xcor'];
        //faltaba incluir el operador atomico "$set"
        //el método update() es obsoleto, se utilizó updateOne()
        db.Estudiantes.updateOne({_id:xid},{$set:{codigo:xcod, nombre:xnom, correo:xcor}}, function(){
            estudiantes_listado(req,res);
        });
    },
    eliminar: function (req,res){
        var xid=req.params.xid*1;
        db.Estudiantes.remove({_id:xid},function(){
            estudiantes_listado(req,res);
        });
    }
}