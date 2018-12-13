const descripcion  = {
   alias:'d',
   desc: 'Descripcion de una tarea por hacer'
};

const completado = {
   alias:'c',
   desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
.command('crear', 'Crear un elemento por hacer',{
   descripcion
})
.command('actualizar', 'Actualiza el estado completado de una tarea',{
   descripcion,
   completado
})
.command('borrar', 'borra una tarea',{
   descripcion
})
.help()
.argv;

 module.exports = {
    argv
 }