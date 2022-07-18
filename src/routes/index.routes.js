import { Router } from 'express'; //rutas de express
import { create } from '../controllers/create.controller';

const router = Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/edit', (req, res) => {
    res.render('edit')
})


router.get('/add', (req,res)=>{
    res.render('add')
})
router.post('/series/add', create )

export default router;