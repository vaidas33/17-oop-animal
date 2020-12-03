import { Pet } from './Pet.js';

class Rabbit extends Pet {
    constructor(name, color) {
        super(name, color);

        this.voice = 'Happy happy!';
    }
}

export { Rabbit }