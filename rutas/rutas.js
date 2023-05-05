var express = require('express');
var router = express.Router();
// var fcargos = require('./rutas_cargos.js');
// var fareas = require('./rutas_areas.js');

var fdocentes = require('./rutas_docentes.js');
var festudiantes = require('./rutas_estudiantes.js');
var fpreguntas = require('./rutas_preguntas.js');

//Pagina Principal
router.get('/',c_inicio);

//Opciones principales
router.get('/mantenimientos',c_mantenimientos);
// router.get('/procesos',c_procesos);
// router.get('/reportes',c_reportes);

//Opciones de mantenimiento de Docentes
router.get('/m_docentes_listado', fdocentes.listado);
router.get('/m_docentes_nuevo', fdocentes.nuevo);
router.post('/m_docentes_grabar_nuevo', fdocentes.grabar_nuevo);
router.get('/m_docentes_editar/:xid',fdocentes.editar);
router.post('/m_docentes_grabar_editar',fdocentes.grabar_editar);
router.get('/m_docentes_eliminar/:xid',fdocentes.eliminar);

//Opciones de mantenimiento de Estudiantes
router.get('/m_estudiantes_listado', festudiantes.listado);
router.get('/m_estudiantes_nuevo', festudiantes.nuevo);
router.post('/m_estudiantes_grabar_nuevo', festudiantes.grabar_nuevo);
router.get('/m_estudiantes_editar/:xid',festudiantes.editar);
router.post('/m_estudiantes_grabar_editar',festudiantes.grabar_editar);
router.get('/m_estudiantes_eliminar/:xid',festudiantes.eliminar);

//Opciones de mantenimiento de Preguntas
router.get('/m_preguntas_listado', fpreguntas.listado);
router.get('/m_preguntas_nuevo', fpreguntas.nuevo);
router.post('/m_preguntas_grabar_nuevo', fpreguntas.grabar_nuevo);
router.get('/m_preguntas_editar/:xid',fpreguntas.editar);
router.post('/m_preguntas_grabar_editar',fpreguntas.grabar_editar);
router.get('/m_preguntas_eliminar/:xid',fpreguntas.eliminar);

function c_inicio(req,res){
    res.render('index');
}
function c_mantenimientos(req,res){
    res.render('mantenimientos',{});
}
// function c_procesos(req,res){
//     res.send('Procesos');
// }
// function c_reportes(req,res){
//     res.send('Reportes');
// }

module.exports = router;