import { Animals } from '../Animals.js';

class Pet extends Animals {
    constructor(name, color) {
        super(name, color);
        this.legsCount = 4;
        this.likePlaying = true;
    }

    walk() {
        console.log(`Vaikstau ant ${this.legsCount} koju.`)
    }
}

export { Pet }

// Pet (params: legsCount, likePlaying; methods: walk)