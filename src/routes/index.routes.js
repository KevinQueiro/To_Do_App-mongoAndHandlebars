import { Router } from 'express'; //rutas de express
import { create } from '../controllers/create.controller';
import { deleteTask } from '../controllers/delete.controller';
import { edit, editGet } from '../controllers/edit.controller';
import { show } from '../controllers/show.controller';
import { status } from '../controllers/status.controller';
import { forgetTask } from '../controllers/forget.controller';

const router = Router();

//ruta para mostrar tareas
router.get('/', show)

//ruta de presentacion personal
router.get('/about', (req, res) => {
    res.render('about')
})

//ruta para pasar una tarea al historial
router.get('/delete/:id', deleteTask)

//ruta para eliminar una tarea de la db
router.get('/forget/:id', forgetTask)

//rutas para editar tareas (el get muestra y el post modifica)
router.get('/edit/:id', editGet)
router.post('/edit/:id', edit)

//ruta para modificar el estado de una tarea
router.get('/status/:id/:status', status)

//rutas para añadir tareas
router.get('/add', (req,res)=>{
    res.render('add')
})
router.post('/add', create )

//ruta del historial
router.get('/history', show)

export default router;