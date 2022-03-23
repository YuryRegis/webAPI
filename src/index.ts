import express from 'express'


const app = express()

app.post('/account', (request, response) => {
 
    response.json({message: 'Hello World'})
})

app.listen(3000)