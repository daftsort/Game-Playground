// -----Character Creation Functions

function attributeBonus(attribute) {
    return Math.floor((attribute - 10) / 2);
}

//  Generates a random die rolls based on XdY.
function diceRoll(dice_count, dice_sides) {
    this.dice_count = count;
    this.dice_sides = sides;
    var one_die;
    var total;
    for (var i = 0; i < count; i++) {
        one_die = Math.floor(Math.random() * sides + 1);
        total += one_die;
    }
    return total;
}

//  Sets archtype values based on class selection menu.
function setArchetypes(initial_cunning, initial_confidence, initial_combat, initial_concealment) {
    this.initial_cunning = cunning;
    this.initial_confidence = confidence;
    this.initial_combat = combat;
    this.initial_concealment = concealment;
    return cunning, confidence, combat, concealment;
}

//  Sets resource values based on race.
function setResources(health, stamina, mana) {
    this.health = health;
    this.stamina = stamina;
    this.mana = mana;
    return health, stamina, mana;
}

//  Sets attribute values based on subrace.
function setAttributes(strength, dexterity, intelligence) {
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
    return strength, dexterity, intelligence;
}

//  Possible races, subraces, and archetypes (think: classes)
playerRaces = {
    elf: setResources(8, 8, 14),
    dwarf: setResources(10, 14, 6),
    lupe: setResources(14, 10, 6),
    human: setResources(10, 12, 8)
};

playerSubRaces = {
    night: setAttributes(10, 12, 12),
    sea: setAttributes(8, 14, 12),
    high: setAttributes(8, 10, 16),
    wood: setAttributes(8, 16, 10),
    hill: setAttributes(14, 10, 10),
    mountain: setAttributes(16, 10, 8),
    voyager: setAttributes(12, 10, 12),
    trader: setAttributes(10, 10, 14),
    warrior: setAttributes(14, 14, 6)
};

playerArchetypes = {
    cunning: setArchetypes(4, 1, 2, 3),
    confidence: setArchetypes(1, 4, 3, 2),
    combat: setArchetypes(2, 3, 4, 1),
    concealment: setArchetypes(3, 2, 1, 4)
};

function archetypePrompt(arch, rateOne, rateTwo, rateThree) {
    this.arch = archetype;
    this.rateOne = rateOne;
    this.rateTwo = rateTwo;
    switch (archetype) {
        case "Confidence":
            player_character.confidence_level = player_character.confidence_level + rateOne;
            player_character.combat_level = player_character.combat_level + rateTwo;
            player_character.concealment_level = player_character.concealment_level + rateThree;
            break;
        case "Combat":
            player_character.combat_level = player_character.combat_level + rateOne;
            player_character.confidence_level = player_character.concealment_level + rateTwo;
            player_character.cunning_level = player_character.cunning_level + rateThree;
            break;
        case "Concealment":
            player_character.concealment_level = player_character.concealment_level + rateOne;
            player_character.cunning_level = player_character.cunning_level + rateTwo;
            player_character.confidence_level = player_character.concealment_level + rateThree;
            break;
        case "Confidence":
            player_character.confidence_level = player_character.confidence_level + rateOne;
            player_character.combat_level = player_character.combat_level + rateTwo;
            player_character.concealment_level = player_character.concealment_level + rateThree;
            break;
        default:
            prompt("That's not the lesson you were meant to learn!");
    }
}

function archetypeLevelUp() {
    var focus;
    if (player_character.level < 5) {
        focus = prompt("What have you learned, young adventurer? Which path do you seek?", "(Cunning/Combat/Concealment/Confidence)");
        archetypePrompt(focus, 1, 0.5, 0.25);
    }
    else if (5 <= player_character.level < 10) {
        focus = prompt("Hmm, you seem to be grasping things a little more readily now.", "(Cunning/Combat/Concealment/Confidence)");
        archetypePrompt(focus, 1.5, 1, .5);
    }
    else if (player_character.level >= 10) {
        focus = prompt("You've mastered many challenges in your path, but to stop growing is to stop living.", "(Cunning/Combat/Concealment/Confidence)");
        archetypePrompt(focus, 2, 1.5, 1);
    }
    else {
        player_character.level = 1;
    }
}

function versatilityLevelUp() {
    if (player_character.concealment_level - player_character.combat_level < Math.floor(player_character.level / 3)) {
        if (player_character.confidence_level - player_character.cunning_level < Math.floor(player_character.level / 3)) {
            player_character.versatility++;
        }
        else {
            player_character.expertise++;
        }
    }
    else {
        player_character.expertise++;
    }
}
