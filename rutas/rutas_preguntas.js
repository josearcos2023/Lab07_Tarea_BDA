var mongojs = require('mongojs');
var uri = 'mongodb://127.0.0.1:27017/Lab07'; 
var db = mongojs(uri,["PregResp"]);

function preguntas_listado(req,res){
    db.PregResp.find().sort({nombre:1},function(err,records){
        if(err){
            console.log('Error al acceder a la base de datos.');
            return;
        }
        res.render('m_preguntas_listado',{records: records});
    });
}

module.exports = {
    listado: function (req,res){
        preguntas_listado(req,res);
    },
    nuevo: function (req,res){
        res.render('m_preguntas_nuevo',{});
    },
    grabar_nuevo: function (req,res){
        var xid = req.body['xid' ]*1;
        var xcur = req.body['xcur'];
        var xpre = req.body['xpre'];
        var xres = req.body['xres'];
        db.PregResp.find().sort({_id:-1},function(err,records){
            if (err){
                console.log('Error al acceder a la base de datos.');
                res.end();
                return;
            }
            var xid = records[0]._id + 1;
            db.PregResp.insert({_id:xid, curso:xcur, pregunta:xpre, resCorr:xres}, function(){
                preguntas_listado(req,res);
            });
        });
    },
    editar: function (req,res){
        var xid = req.params.xid*1;
        console.log(xid);
        db.PregResp.find({_id:xid}, function(err,records){
            if(err){
                console.log('Error al acceder a la base de datos.');
                res.end();
                return;
            }
            res.render('m_preguntas_editar',{preguntas: records[0]});
        });
    },
    grabar_editar: function (req,res){
        var xid = req.body['xid' ]*1;
        var xcur = req.body['xcur'];
        var xpre = req.body['xpre'];
        var xres = req.body['xres'];
        //faltaba incluir el operador atomico "$set"
        //el método update() es obsoleto, se utilizó updateOne()
        db.PregResp.updateOne({_id:xid},{$set:{curso:xcur, pregunta:xpre, resCorr:xres}}, function(){
            preguntas_listado(req,res);
        });
    },
    eliminar: function (req,res){
        var xid=req.params.xid*1;
        db.PregResp.remove({_id:xid},function(){
            preguntas_listado(req,res);
        });
    }
}