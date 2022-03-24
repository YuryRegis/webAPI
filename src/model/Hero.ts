import {v4 as uuid} from 'uuid'


class Hero {
    name: string;
    resume: string;
    power: number;
    created_at: Date;
    id?: string;

    constructor(){
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Hero }