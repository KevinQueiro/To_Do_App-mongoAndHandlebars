import Task from "../models/Task"

export const forgetTask = async(req, res) => {
    await Task.findOneAndDelete(req.params.id)
    res.redirect('/history')
}
