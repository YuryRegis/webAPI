import { Hero } from '../model/Hero'


interface ICreatedHeroDTO {
    name: string;
    power: number;
    resume: string;
}

interface IUpdateHeroDTO {
    id: string;
    name?: string;
    power?: number;
    resume?: string;
}

interface IHeroesRepository {
    findByName(name: string): Hero | undefined
    findById(id: string): Hero | undefined
    getAll(): Hero[]
    create({name, resume, power}: ICreatedHeroDTO): void
    update({name, id, resume, power}: IUpdateHeroDTO): void
    delete(id: string): void
}

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

    update({name, id, resume, power}: IUpdateHeroDTO): void {
        const index = this.heroes.findIndex(h => h.id === id)
        const oldData = this.heroes[index] 
        this.heroes[index] = {...oldData, ...{name, resume, power}}
    }

    delete(id: string): void {
        const index = this.heroes.findIndex(hero => hero.id === id)
        this.heroes.splice(index, 1)
    }
}


export { HeroesRepository, IHeroesRepository, ICreatedHeroDTO, IUpdateHeroDTO }