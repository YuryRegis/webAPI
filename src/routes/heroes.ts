import { Router } from 'express'
import { HeroesRepository } from '../repositories/heroesRepository'
import { 
    CreateHeroService, 
    GetHeroByNameService, 
    UpdateHeroService,
    DeleteHeroService } from '../services' 


const heroesRoute = Router()
const heroesRepository = new HeroesRepository()


heroesRoute.post('/heroes', (request, response) => {
    const { name, resume, power } = request.body

    const createHeroesService = new CreateHeroService(heroesRepository)
    try {
        createHeroesService.execute({ name, resume, power })
        return response.status(201).json({message: 'Hero created'})
    } catch (error) {
        return response.status(400).json({error: error.message})
    }

})


heroesRoute.get('/', (request, response) => {
    const allHeroes = heroesRepository.getAll()
    return response.json(allHeroes)
})


heroesRoute.get('/heroes/:name', (request, response) => {
    const { name } = request.params
    const getHero = new GetHeroByNameService(heroesRepository)

    try {
        const hero = getHero.execute({ name })
        return response.json(hero)
    } catch (error) {
        return response.status(404).json({error: error.message})
    }
})


heroesRoute.put('/heroes/update', (request, response) => {
    const req = request.body
    const updateHero = new UpdateHeroService(heroesRepository)

    try {
        updateHero.execute(req)
        return response.json({message: 'Hero updated'})
    } catch(error) {
        return response.status(404).json({error: error.message})
    }
})


heroesRoute.delete('/heroes/:id', (request, response) => {
    const { id } = request.params
    const deleteHero = new DeleteHeroService(heroesRepository)

    try {
        deleteHero.execute({ id })
        return response.status(200).json({message: 'Hero deleted'})
    } catch(error) {
        return response.status(404).json({error: error.message})
    }
})


export default heroesRoute