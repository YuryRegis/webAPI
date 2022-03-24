import { Hero } from '../model/Hero'
import { IHeroesRepository, ICreatedHeroDTO, IUpdateHeroDTO } from '../repositories/heroesRepositoryInterface'


class HeroesRepository implements IHeroesRepository {
    private heroes: Hero[]
    
    constructor() {
        this.heroes = []
    }

    create({name, resume, power}: ICreatedHeroDTO): void {
        const hero = new Hero()
        Object.assign(hero, { name, resume, power, created_at: new Date() })
    
        this.heroes.push(hero)
    }

    getAll(): Hero[] {
        return this.heroes
    }

    findByName(name: string): Hero | undefined {
        return this.heroes.find(hero => hero.name.toLowerCase() === name.toLowerCase())
    }

    findById(id: string): Hero | undefined {
        return this.heroes.find(hero => hero.id === id)
    }

    update(hero: IUpdateHeroDTO): void {
        const index = this.heroes.findIndex(h => h.id === hero.id)
        const oldData = this.heroes[index] 
        this.heroes[index] = {...oldData, ...hero}
    }

    delete(id: string): void {
        const index = this.heroes.findIndex(hero => hero.id === id)
        this.heroes.splice(index, 1)
    }
}


export	{ HeroesRepository }