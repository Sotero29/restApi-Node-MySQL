import { PORT } from './config.js'
import app from './app.js'

app.listen(PORT)
console.log(`Server en el puerto ${PORT}`)