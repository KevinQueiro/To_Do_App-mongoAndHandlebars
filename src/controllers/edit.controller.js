import Task from '../models/Task'

export const edit = async (req,res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

//rellenar campos a editar con info actual
export const editGet = async (req,res) => {
    const task = await Task.findById(req.params.id).lean()
    res.render('edit', {task})
}