// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small hat", "sunglasses"],

const robin = new Adventurer("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

roll(mod = 0)
{
    const result = Math.floor(Math.random() * 20) + 1 + modconsole.log(`${this.name} rolled a ${result}.`)
}
//         }
//     }
// }

class Character {
    constructor(name) {
        this.name = name
        this.health = 100
        this.inventory = []
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + modconsole.log(`${this.name} rolled a ${result}.`)
    }
}

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Adventurer {
  constructor (name, role) {
    super(name);
    this.role = role;
    this.inventory.push("Pack", "Food");
  }
  scout () {
    console.log(`${this.name} Support`);
    super.roll();
  }
}


// function invo() {
//     for (let i = 0; i < inventory.length; i++) {
//         invo += inventory[i]
//     }
// }
// console.log(invo)