import Task from "../models/Task"

//forget borra de la base de latos la tarea seleccionada
export const forgetTask = async (req, res) => {
    try {
        await Task.findOneAndDelete(req.params.id)
        res.redirect('/history')
    } catch (error) {
        console.log(error);
    }

}
