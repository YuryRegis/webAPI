import express from 'express'
import heroesRoute from './routes/heroes'
import swaggerUi from 'swagger-ui-express'


import swaggerDocument from './swagger.json'

const app = express()

app.use(express.json())

app.use('/api-docs', 
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument))

app.use(heroesRoute)

app.listen(3000)