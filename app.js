import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import indexRoutes from './routes/index.routes.js'
import productsRoutes from './routes/products.routes.js'

const app = express()


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

//convertir el upload a middleware y que solo afecte a la ruta de post para evitar subir archivos en otras funciones
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: './uploads'
}));

app.use(indexRoutes)
app.use(productsRoutes)

export default app