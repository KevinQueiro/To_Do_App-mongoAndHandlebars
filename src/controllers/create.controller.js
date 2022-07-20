import Task from '../models/Task'

export const create = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save()
    res.redirect('/')
  } catch (error) {
    console.log(error);
  }
}

