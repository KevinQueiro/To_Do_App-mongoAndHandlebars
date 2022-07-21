import {} from 'dotenv/config'
import app from './app'
import './database'

app.listen(process.env.PORT || 3000)
console.log(`Runing on port: ${process.env.PORT || 3000}`) 