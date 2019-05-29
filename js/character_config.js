// -----Character Creation Functions

//  Sets archtype values based on class selection menu.
function setArchetypes(initial_cunning, initial_confidence, initial_combat, initial_concealment){
    this.initial_cunning = cunning;
    this.initial_confidence = confidence;
    this.initial_combat = combat;
    this.initial_concealment = concealment;
    return cunning, confidence, combat, concealment;
}

//  Sets resource values based on race.
function setResources(health, stamina, mana){
    this.health = health;
    this.stamina = stamina;
    this.mana = mana;
    return health, stamina, mana;
}

//  Sets attribute values based on subrace.
function setAttributes(strength, dexterity, intelligence){
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
    return strength, dexterity, intelligence;
}

//  Possible races, subraces, and archetypes (think: classes)
playerRaces = {
    elf: setResources(8,8,14),
    dwarf: setResources(10,14,6),
    lupe: setResources(14,10,6),
    human: setResources(10,12,8)
};

playerSubRaces = {
    night: setAttributes(10,12,12),
    sea: setAttributes(8,14,12),
    high: setAttributes(8,10,16),
    wood: setAttributes(8,16,10),
    hill: setAttributes(14,10,10),
    mountain: setAttributes(16,10,8),
    voyager: setAttributes(12,10,12),
    trader: setAttributes(10,10,14),
    warrior: setAttributes(14,14,6)
};

playerArchetypes = {
    cunning: setArchetypes(4,1,2,3),
    confidence: setArchetypes(1,4,3,2),
    combat: setArchetypes(2,3,4,1),
    concealment: setArchetypes(3,2,1,4)
};
