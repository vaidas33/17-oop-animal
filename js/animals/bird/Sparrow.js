import { Bird } from './Bird.js';

class Sparrow extends Bird {
    constructor(name, color) {
        super(name, color)
        this.voice = 'Lalala';
    }
}

export { Sparrow }