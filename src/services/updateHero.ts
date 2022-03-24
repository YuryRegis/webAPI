import { IHeroesRepository } from '../repositories/heroesRepositoryInterface'


interface IRequest {
    id: string;
    name?: string;
    power?: number;
    resume?: string;
}

class UpdateHeroService {
  constructor(private heroesRepository: IHeroesRepository) {}

  execute(request: IRequest): void {
    const hero = this.heroesRepository.findById(request.id)
    if (!hero) throw new Error('Hero not exists')

    if(request.name){
        const verifyHeroNameExists = this.heroesRepository.findByName(request.name)
        if (verifyHeroNameExists) throw new Error('Hero name already exists')
    }

    this.heroesRepository.update(request)

  }
}

export { UpdateHeroService } 