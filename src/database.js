import {} from 'dotenv/config'
import { connect } from "mongoose";

//ejecucion automatica de la funcion para el async
(async () => {
    try {
        const db = await connect(process.env.MONGODB_URI || "mongodb://localhost/test")
        console.log('db connected to', db.connection.name)
    } catch (error) {
        console.log(error);
    }
})()