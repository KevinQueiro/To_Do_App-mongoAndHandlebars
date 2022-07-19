import { Router } from 'express'; //rutas de express
import { create } from '../controllers/create.controller';
import { edit, editGet } from '../controllers/edit.controller';
import { show } from '../controllers/show.controller';

const router = Router();

router.get('/', show)

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/edit/:id', editGet)
router.post('/edit/:id', edit)

//ADD TASK
router.get('/add', (req,res)=>{
    res.render('add')
})
router.post('/add', create )

export default router;