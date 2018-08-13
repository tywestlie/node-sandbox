const dog = {
  name: 'Spot',
  breed: 'corgi',
  tricksLearned: {
    sit: true,
    stay: true,
    rollOver: false,
    beg: true,
    speak: false
  }
}

let { name, breed } = dog;
let { sit, stay, speak, rollOver, beg } = dog.tricksLearned;

console.log(breed);
console.log(rollOver);

const strings = ['one', 'two', 'three'];
let [one, two, three] = strings;

console.log(two);
