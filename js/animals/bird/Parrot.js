import { Bird } from './Bird.js';

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color)
        this.voice = 'Lalala';
    }

    repeatSound() {
        console.log(`${this.voice} ${this.voice} ${this.voice}`);
    }
}

export { Parrot }

// Parrot (methods: repeatSound)