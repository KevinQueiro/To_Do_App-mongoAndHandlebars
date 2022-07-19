import { connect } from "mongoose";

//ejecucion automatica de la funcion para el async
(async () => {
    try {
        const db = await connect('mongodb://localhost/TO-DO')
        console.log('db connected to', db.connection.name)
    } catch (error) {
        console.log(error);
    }
})()
