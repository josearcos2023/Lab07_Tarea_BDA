var mongojs = require('mongojs');
var uri = 'mongodb://127.0.0.1:27017/Lab07'; 
var db = mongojs(uri,["Docentes"]);

function docentes_listado(req,res){
    db.Docentes.find().sort({nombre:1},function(err,records){
        if(err){
            console.log('Error al acceder a la base de datos.');
            return;
        }
        res.render('m_docentes_listado',{records: records});
    });
}

module.exports = {
    listado: function (req,res){
        docentes_listado(req,res);
    },
    nuevo: function (req,res){
        res.render('m_docentes_nuevo',{});
    },
    grabar_nuevo: function (req,res){
        var xid = req.body['xid' ]*1;
        var xcod = req.body['xcod'];
        var xnom = req.body['xnom'];
        var xdep = req.body['xdep'];
        var xcur = req.body['xcur'];
        var xcor = req.body['xcor'];
        db.Docentes.find().sort({_id:-1},function(err,records){
            if (err){
                console.log('Error al acceder a la base de datos.');
                res.end();
                return;
            }
            var xid = records[0]._id + 1;
            db.Docentes.insert({_id:xid, codigo:xcod, nombre:xnom, departamento:xdep, curso:xcur, correo:xcor}, function(){
                docentes_listado(req,res);
            });
        });
    },
    editar: function (req,res){
        var xid = req.params.xid*1;
        console.log(xid);
        db.Docentes.find({_id:xid}, function(err,records){
            if(err){
                console.log('Error al acceder a la base de datos.');
                res.end();
                return;
            }
            res.render('m_docentes_editar',{docente: records[0]});
        });
    },
    grabar_editar: function (req,res){
        var xid = req.body['xid' ]*1;
        var xcod = req.body['xcod'];
        var xnom = req.body['xnom'];
        var xdep = req.body['xdep'];
        var xcur = req.body['xcur'];
        var xcor = req.body['xcor'];
        //faltaba incluir el operador atomico "$set"
        //el método update() es obsoleto, se utilizó updateOne()
        db.Docentes.updateOne({_id:xid},{$set:{codigo:xcod, nombre:xnom, departamento:xdep, curso:xcur, correo:xcor}}, function(){
            docentes_listado(req,res);
        });
    },
    eliminar: function (req,res){
        var xid=req.params.xid*1;
        db.Docentes.remove({_id:xid},function(){
            docentes_listado(req,res);
        });
    }
}