import Task from "../models/Task"

//delete no borra sino que cambie de vista la tarea para que el usuario no la vea, pero se puede acceder desde el historial
export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, { archived: true })
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}
