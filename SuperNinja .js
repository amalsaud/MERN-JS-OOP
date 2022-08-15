// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
// In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. 
//speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.
class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(`Ninja's name: ${this.name}\nNinja's health: ${this.health}\nNinja's speed: ${this.speed}\nNinja's strength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class SuperNinja extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 20;
        this.strength = 20;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new SuperNinja("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
