src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
$.getScript('character_template.js'), function () {
    var PlayerOne = new player_character;
    PlayerOne.name = prompt("Please enter your name: ");
    PlayerOne.race = prompt("What is your race? (human, elf, dwarf, lupe)")
    switch (PlayerOne.race) {
        case elf:
            PlayerOne.subrace = prompt("What type of elf are you? (night, sea, high, wood)")
            break;
        case dwarf:
            PlayerOne.subrace = prompt("From which clan do you hail? (mountain or hill)")
            break;
        case lupe:
            PlayerOne.subrace = prompt("What caste do you claim? (voyager, trader, warrior)")
            break;
        case human:
            alert("Welcome to the game, human.")
            break;
        default:
            text("Please select a valid race.");
    }
    PlayerOne.archetype = prompt("What is your class? (cunning, confidence, combat, concealment)")
    switch (PlayerOne.race) {
        case elf:
            PlayerOne.health = 8;
            PlayerOne.stamina = 8;
            PlayerOne.mana = 14;
            break;
        case dwarf:
            PlayerOne.health = 10;
            PlayerOne.stamina = 14;
            PlayerOne.mana = 6;
            break;
        case lupe:
            PlayerOne.health = 14;
            PlayerOne.stamina = 10;
            PlayerOne.mana = 6;
            break;
        case human:
            PlayerOne.health = 10;
            PlayerOne.stamina = 12;
            PlayerOne.mana = 8;
            break;
        default:
            PlayerOne.health = 8;
            PlayerOne.stamina = 8;
            PlayerOne.mana = 8;
    }

    switch (PlayerOne.subrace) {
        case night:
            PlayerOne.strength = 10;
            PlayerOne.dexterity = 12;
            PlayerOne.intelligence = 12;
            break;
        case sea:
            PlayerOne.strength = 8;
            PlayerOne.dexterity = 14
            PlayerOne.intelligence = 12;
            break;
        case high:
            PlayerOne.strength = 8;
            PlayerOne.dexterity = 10;
            PlayerOne.intelligence = 16;
            break;
        case wood:
            PlayerOne.strength = 8;
            PlayerOne.dexterity = 16;
            PlayerOne.intelligence = 10;
            break;
        case hill:
            PlayerOne.strength = 14;
            PlayerOne.dexterity = 10;
            PlayerOne.intelligence = 10;
            break;
        case mountain:
            PlayerOne.strength = 16;
            PlayerOne.dexterity = 10;
            PlayerOne.intelligence = 8;
            break;
        case voyager:
            PlayerOne.strength = 12;
            PlayerOne.dexterity = 10;
            PlayerOne.intelligence = 12;
            break;
        case trader:
            PlayerOne.strength = 10;
            PlayerOne.dexterity = 10;
            PlayerOne.intelligence = 14;
            break;
        case warrior:
            PlayerOne.strength = 14;
            PlayerOne.dexterity = 14;
            PlayerOne.intelligence = 6;
            break;
        default:
            PlayerOne.strength = 10;
            PlayerOne.dexterity = 10;
            PlayerOne.intelligence = 10;    
    }

    switch (PlayerOne.archetype){
        case cunning:
            PlayerOne.cunning_level = 4;
            PlayerOne.confidence_level = 1;
            PlayerOne.combat_level = 2;
            PlayerOne.concealment_level = 3;
            break;
        case confidence: 
            PlayerOne.cunning_level = 1;
            PlayerOne.confidence_level = 4;
            PlayerOne.combat_level = 3;
            PlayerOne.concealment_level = 2;
            break;
        case combat:
            PlayerOne.cunning_level = 2;
            PlayerOne.confidence = 3;
            PlayerOne.combat_level = 4;
            PlayerOne.concealment_level = 1;
            break;
        case concealment:
            PlayerOne.cunning_level = 3;
            PlayerOne.confidence_level = 2;
            PlayerOne.combat_level = 1
            PlayerOne.concealment_level = 4;
            break;
        default:
            PlayerOne.cunning_level = 1;
            PlayerOne.confidence_level = 1;
            PlayerOne.combat_level = 1;
            PlayerOne.concealment_level = 1;
    }
}
