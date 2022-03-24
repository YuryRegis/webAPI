import { IHeroesRepository } from '../repositories/heroesRepositoryInterface'


interface IRequest {
    id: string;
}

class DeleteHeroService {
  constructor(private heroesRepository: IHeroesRepository) {}

  execute({ id }: IRequest): void {
    const verifyHeroExists = this.heroesRepository.findById(id)

    if (!verifyHeroExists) throw new Error('Hero not exists')

    this.heroesRepository.delete(id)
  }
}

export { DeleteHeroService } 