import { IHeroesRepository } from '../repositories/heroesRepositoryInterface'
import { Hero } from '../model/Hero'


interface IRequest {
    name: string;
}

class GetHeroByNameService {
  constructor(private heroesRepository: IHeroesRepository) {}

  execute({ name }: IRequest): Hero {
    const hero = this.heroesRepository.findByName(name)

    if (!hero) throw new Error('Hero not exists')

    return hero
  }
}

export { GetHeroByNameService } 