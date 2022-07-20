import express from 'express';
import indexRoutes from './routes/index.routes'
import exphbs from 'express-handlebars'
import path from 'path' //para que la direccion de las views sera accesible desde cualquier so
import morgan from 'morgan';

const app = express()

//donde esta la carpeta views?
app.set('views', path.join(__dirname, 'views'));   //setea la ruta de la vista porque no esta directo en el "root" .. __dirname rempleza ruta absoluta para las views
app.engine(
    ".hbs",
    exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"), // donde esta el codigo en comun entre las vistas
    partialsDir: path.join(app.get("views"), "partials"), //si se usa el nombre partials no es necesaria esta linea
    defaultLayout: 'main',
    extname: ".hbs",
})
);
app.set('view engine', '.hbs')

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));

//ruteo
app.use(indexRoutes)

export default app;