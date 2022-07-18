import Series from '../models/Series'

export const create = async (req, res) => {
  
  console.log(req.body.cover);
  
  const caps=[]
  for(let i=0; i<req.body.chapters; i++){
    caps.push(i+1)
  }
  console.log(caps);
  const series = Series({
    title: req.body.title,
    description: req.body.description,
    chapters: caps,
  });
  
  console.log(series);


  // const serieSaved = await series.save()

  res.redirect('/')
}

