import { Fish } from './Fish.js';

class Nemofish extends Fish {
    constructor(name, color) {
        super(name, color);
        this.voice = 'bur bur bur';
    }
}

export { Nemofish }