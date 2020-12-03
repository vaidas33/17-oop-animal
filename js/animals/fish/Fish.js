import { Animals } from '../Animals.js';

class Fish extends Animals {
    constructor(name, color) {
        super(name, color);
        this.fin = 10;
    }

    swim() {
        console.log(`Turiu ${this.fin} peleku`)
    }
}

export { Fish }

// Fish (params: fin; methods: swim)