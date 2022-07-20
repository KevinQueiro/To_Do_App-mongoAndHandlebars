import Task from '../models/Task'

export const show = async (req, res) => {
    try {
        console.log(!!req.path.split('/')[1]);
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
                id: eachTask._id,
                archived: eachTask.archived
            }
            allTasks.push(taskFormat)
        }

        !!req.path.split('/')[1]? res.render('history', {tasks: allTasks}) : res.render('index', { tasks: allTasks })
    } catch (error) {
        console.log(error);
        res.render('index')
    }
}
