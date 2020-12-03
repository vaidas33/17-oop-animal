import { Animals } from '../Animals.js';

class Bird extends Animals {
    constructor(name, color) {
        super(name, color);
        this.wingsCount = 2;
    }

    fly() {
        console.log(`Turiu ${this.wingsCount} sparnus.`);
    }
}

export { Bird }
// Bird (params: wingsCount; methods: fly)