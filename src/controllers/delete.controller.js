import Task from "../models/Task"

export const deleteTask = async(req, res) => {
    console.log(req.body);

    const toChange = await Task.find({id:req.params.id}).lean()
   
    //const response = await Task.findByIdAndDelete(req.params.id)
   await Task.findByIdAndUpdate(req.params.id, {archived:true})

    res.redirect('/')
}
