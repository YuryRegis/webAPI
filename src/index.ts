import express from 'express'
import heroesRoute from './routes/heroes'


const app = express()

app.use(express.json())

app.use(heroesRoute)

app.listen(3000)