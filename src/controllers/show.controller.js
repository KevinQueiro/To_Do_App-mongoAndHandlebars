import Task from '../models/Task'

export const show = async (req, res) => {
    try {
        const tasksDB = await Task.find().lean() //lean es para tranformar a objetos normales
        const allTasks = []
        //se recorren todas las entradas para poder darle un formato mas ameno a la informacion que se envia
        for (const eachTask of tasksDB) {
            const aux = eachTask.createdAt.toString().split(' ');
            //se acomodan las fechas
            const formatCreation = {
                day: aux[2],
                month: aux[1],
                year: aux[3]
            }
            const taskFormat = {
                title: eachTask.title,
                description: eachTask.description,
                status: eachTask.status,
                creation: formatCreation,
                id: eachTask._id,
                archived: eachTask.archived
            }
            allTasks.push(taskFormat)
        }
        //condicional para diferenciar entre las tareas que van a la vista principal y las del historial
        !!req.path.split('/')[1] ? res.render('history', { tasks: allTasks }) : res.render('index', { tasks: allTasks })
    } catch (error) {
        console.log(error);
        res.render('index')
    }
}
