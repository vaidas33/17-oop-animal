import { Dog } from './animals/pet/Dog.js';

import { Parrot } from './animals/bird/Parrot.js';

import { Nemofish } from './animals/fish/Nemofish.js';

//Pet
const rikis = new Dog('Rikis pikis', 'rudas');

rikis.sound();
rikis.introduce();
rikis.walk();

console.log('------------');

//Bird
const paukstis = new Parrot('Lopelis', 'juodas');

paukstis.fly();
paukstis.repeatSound();


console.log('------------');

//Fish
const nemo = new Nemofish('Nemo', 'raudona');

nemo.swim();
nemo.sound();
nemo.introduce();