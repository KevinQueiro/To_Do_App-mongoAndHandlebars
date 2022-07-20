import Task from "../models/Task";

export const status = async (req,res) => {
    try {
        const newStatus = req.path.split('/')[3]
        await Task.findByIdAndUpdate(req.params.id, {status:newStatus})
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}
