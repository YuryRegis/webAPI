import { IHeroesRepository } from '../repositories/heroesRepositoryInterface'


interface IRequest {
    name: string;
    power: number;
    resume: string;
}

class CreateHeroService {
  constructor(private heroesRepository: IHeroesRepository) {}

  execute({ name, power, resume }: IRequest): void {
    const verifyHeroExists = this.heroesRepository.findByName(name)

    if (verifyHeroExists) throw new Error('Hero already exists')

    this.heroesRepository.create({ name, resume, power })
  }
}

export { CreateHeroService } 