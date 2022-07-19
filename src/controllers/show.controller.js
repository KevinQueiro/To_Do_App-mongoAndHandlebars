import Task from '../models/Task'

export const show = async (__req, res) => {
    try {
        const tasksDB = await Task.find().lean() //lean es para tranformar a objetos normales
        const allTasks = []
        for (const eachTask of tasksDB) {
           const aux = eachTask.createdAt.toString().split(' ');
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
                id: eachTask._id
            }
            allTasks.push(taskFormat)
        }
        res.render('index', { tasks: allTasks })
    } catch (error) {
        console.log(error);
        res.render('index')
    }
}
