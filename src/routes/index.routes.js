import { Router } from 'express'; //rutas de express
import { create } from '../controllers/create.controller';
import { deleteTask } from '../controllers/delete.controller';
import { edit, editGet } from '../controllers/edit.controller';
import { show } from '../controllers/show.controller';
import { status } from '../controllers/status.controller';
import { forgetTask } from '../controllers/forget.controller';

const router = Router();

router.get('/', show)

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/delete/:id', deleteTask)

router.get('/forget/:id', forgetTask)

router.get('/edit/:id', editGet)
router.post('/edit/:id', edit)

router.get('/status/:id/:status', status)

//ADD TASK
router.get('/add', (req,res)=>{
    res.render('add')
})
router.post('/add', create )

router.get('/history', show)

export default router;