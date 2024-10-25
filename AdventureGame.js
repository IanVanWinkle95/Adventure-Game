class Character {
  static MAX_HEALTH = 100
    constructor(name) {
        this.name = name
        this.health = 100
        this.inventory = []
    }
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod 
        console.log(`${this.name} rolled a ${result}.`)
    }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard", "Minstrel"]

    constructor(name, role) {
      if (!name || typeof name !== 'string') {
        throw new Error ("Name doesn't match.")
      }

      if (!role || typeof role !== 'string') {
        throw new Error ("Role doesn't match")
      }

      let validRole = false
      for (const validRole of Adventurer.ROLES) {
        if (role === validRole) {
          validRole = true
          break
        }
      }

      if (!validRole) {
        throw new Error ("Role isn't valid")
      }

        super(name)
        // Adventurers have specialized roles.
        this.role = role
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins")
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`)
        super.roll()
    }
}

class Companion extends Adventurer {
  constructor (name, type) {
    super(name, type)
    
    this.inventory.push("Pack", "Food")
  }
  scout () {
    console.log(`${this.name} Support.`)
    super.roll()
  }
}

class AdventurerFactory {  
    constructor (role) {
      this.role = role
      this.adventurers = []
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role)
      this.adventurers.push(newAdventurer)
    }
    findByIndex (index) {
      return this.adventurers[index]
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name)
    }
  }
  
  const healers = new AdventurerFactory("Healer")
  const robin = healers.generate("Robin")
  robin.inventory = ["sword", "potion", "artifact"]
  
  const leo = new Companion("Leo")
  leo.companion.type = "Cat"
  leo.inventory = ["toe beans"]
  robin.companion = leo
  
  const frank = new Companion("Frank")
  frank.companion.type = "Flea"
  frank.inventory = ["small hat", "sunglasses",]
  leo.companion = frank
