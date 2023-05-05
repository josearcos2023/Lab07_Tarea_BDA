conn = new Mongo();
db = conn.getDB("Lab07");

// db.Mascotas.insertMany(
//   [
//    {_id: 1,nombre: 'Boby', tipo: 'Perro', genero: 'M', fecha_nacimiento: new Date('01/23/2013')},
//    {_id: 2,nombre: 'Keyla', tipo: 'Gato', genero: 'H', fecha_nacimiento: new Date('09/12/2015')},
//    {_id: 3,nombre: 'Lasie', tipo: 'Perro', genero: 'H', fecha_nacimiento: new Date('08/31/2012')},
//    {_id: 4,nombre: 'Feli', tipo: 'Gato', genero: 'M', fecha_nacimiento: new Date('10/15/2011')},
//    {_id: 5,nombre: 'Lucas', tipo: 'Perro', genero: 'M', fecha_nacimiento: new Date('04/13/2014')},
//    {_id: 6,nombre: 'Messi', tipo: 'Gato', genero: 'M', fecha_nacimiento: new Date('09/12/2015')},
//    {_id: 7,nombre: 'Nana', tipo: 'Perro', genero: 'H', fecha_nacimiento: new Date('02/18/2015')},
//    {_id: 8,nombre: 'Pepa', tipo: 'Loro', genero: 'H', fecha_nacimiento: new Date('11/27/2015')}
//  ]);

// db.Cargos.insertMany(
//   [
//    {_id: 1,nombre: 'Administrador', sueldo: 9000},
//    {_id: 2,nombre: 'Contador', sueldo: 8500},
//    {_id: 3,nombre: 'Gerente', sueldo: 13000},
//    {_id: 4,nombre: 'Supervisor', sueldo: 11000},
//    {_id: 5,nombre: 'Ingeniero', sueldo: 10500},
//    {_id: 6,nombre: 'Tecnico', sueldo: 5000},
//    {_id: 7,nombre: 'Secretaria', sueldo: 4000},
//    {_id: 8,nombre: 'Practicante', sueldo: 1200},
//    {_id: 9,nombre: 'Capataz', sueldo: 3500}
//  ]);

//  db.Areas.insert({nombre:"Docencia",abreviatura:"Doc.",estado:"A" })
//  db.Areas.insertMany(
//   [
//    {_id: 1,nombre:"Docencia",abreviatura:"Doc.",estado:"A" },
//    {_id: 2,nombre:"Informática",abreviatura:"Inf.",estado:"A" },
//    {_id: 3,nombre:"Electrotecnia",abreviatura:"Elect.",estado:"A" },
//    {_id: 4,nombre:"Mecanica",abreviatura:"Mec.",estado:"A" },
//    {_id: 5,nombre:"Estudios Generales",abreviatura:"EEGG",estado:"A" },
//    {_id: 6,nombre:"Administracion",abreviatura:"Adm.",estado:"A" },
//    {_id: 7,nombre:"Tecnologias de la Informacion",abreviatura:"TI",estado:"A" },
//    {_id: 8,nombre:"Seguridad",abreviatura:"Seg.",estado:"A" },
//    ]);

   /*
   Docentes
   Estudiantes
   Preguntas y respuestas
   */

   db.Docentes.insertMany(
    [
        {_id: 1, codigo:"P001", nombre:"Daniel Perez", departamento: "Tecnologia digital",curso:"Calculo", correo:"dperez@tecsup.edu.pe"},
        {_id: 2, codigo:"P002", nombre:"Roberto Soto", departamento: "Tecnologia digital", curso:"Base de datos", correo:"rsoto@tecsup.edu.pe"},
        {_id: 3, codigo:"P003", nombre:"Alejandra Noceda", departamento: "Tecnologia digital", curso:"Sistemas operativos", correo:"anoceda@tecsup.edu.pe"}
    ]
   )

   db.Estudiantes.insertMany(
    [
        {_id: 1, codigo:"E01", nombre:"Sam Riegel", correo:"sam.riegel@tecsup.edu.pe"},
        {_id: 2, codigo:"E02", nombre:"Danna Terrace", correo:"danna.terrace@tecsup.edu.pe"},
        {_id: 3, codigo:"E03", nombre:"Matthew Braly", correo:"matthew.braly@tecsup.edu.pe"}
    ]
   )

   db.PregResp.insertMany(
    [
        {_id:1, curso:"Desarrollo de aplicaciones" ,pregunta:"Cual de las siguientes etiquetas sirve para aceptar información en HTML",resCorr:"<input>"},
        {_id:2, curso:"Bases de datos avanzadas",pregunta:"Que comando en mongodb se utiliza para buscar información",resCorr:"find()"},
        {_id:3, curso:"Fisica aplicada",pregunta:"Qué ley o teorema explica la distribución de tensiones y corrientes en una malla eléctrica",resCorr:"Leyes de Kirchhof"}
    ]
   )