function abilityModifier(abilityScore) {
  if (abilityScore > 18) throw new Error('Ability scores can be at most 18');
  if (abilityScore < 3) throw new Error('Ability scores must be at least 3');
  return Math.floor((abilityScore - 10) / 2);
}

function dice6() {
  return Math.floor(Math.random() * 6) + 1;
}


class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();

    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {
    const throws = [ dice6(), dice6(), dice6(), dice6() ];
    const minValue = Math.min(...throws);
    const minIndex = throws.indexOf(minValue);
    throws.splice(minIndex, 1);
    return throws.reduce((sum, val) => sum + val, 0);
  }
}


module.exports = { abilityModifier, Character };
