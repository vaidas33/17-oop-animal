class Animals {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    introduce() {
        console.log(`Labas, as esu ${this.name} ir mano kailis yra ${this.color} spalvos.`);
    }

    sound() {
        console.log(`${this.name}: ${this.voice}`);
    }
}

export { Animals }

// Animal (params: name, color; methods: sound, introduce)