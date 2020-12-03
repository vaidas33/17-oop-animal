import { Fish } from './Fish.js';

class Salmon extends Fish {
    constructor(name, color) {
        super(name, color);
        this.voice = 'bur bur bur';
    }
}

export { Salmon }