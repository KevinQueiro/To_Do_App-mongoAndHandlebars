import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('hello kitty')
})

app.listen(3000)
console.log(`Runing on port: 3000`)