src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
$.getScript('character_template.js'), function () {
    function setArchetypes(cunning, confidence, combat, concealment){
        this.cunning = cunning;
        this.confidence = confidence;
        this.combat = combat;
        this.concealment = concealment;
        return cunning, confidence, combat, concealment;
    }
    function setResources(health, stamina, mana){
        this.health = health;
        this.stamina = stamina;
        this.mana = mana;
    }
    function setAttributes(strength, dexterity, intelligence){
        this.strength = strength;
        this.dexterity = dexterity;
        this.intelligence = intelligence; 
    }
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
            PlayerOne.setResources(8, 8, 14);
            break;
        case dwarf:
            PlayerOne.setResources(10, 14, 6);
            break;
        case lupe:
            PlayerOne.setResources(14, 10, 6);
            break;
        case human:
            PlayerOne.setResources(10, 12, 8);
            break;
        default:
            PlayerOne.setResources(8, 8, 8);
    }

    switch (PlayerOne.subrace) {
        case night:
            PlayerOne.setAttributes(10, 12, 12);
            break;
        case sea:
            PlayerOne.setAttributes(8, 14, 12);
            break;
        case high:
            PlayerOne.setAttributes(8, 10, 16);
            break;
        case wood:
            PlayerOne.setAttributes(8, 16, 10);
            break;
        case hill:
            PlayerOne.setAttributes(14, 10, 10);
            break;
        case mountain:
            PlayerOne.setAttributes(16, 10, 8);
            break;
        case voyager:
            PlayerOne.setAttributes(12, 10, 12);
            break;
        case trader:
            PlayerOne.setAttributes(10, 10, 14);
            break;
        case warrior:
            PlayerOne.setAttributes(14, 14, 6);
            break;
        default:
            PlayerOne.setAttributes(10, 10, 10);
    }

    switch (PlayerOne.archetype) {
        case cunning:
            PlayerOne.setArchetypes(4, 1, 2, 3);
            break;
        case confidence:
            PlayerOne.setArchetypes(1, 4, 3, 2);
            break;
        case combat:
            PlayerOne.setArchetypes(2, 3, 4, 1);
            break;
        case concealment:
            PlayerOne.setArchetypes(3, 2, 1, 4);
            break;
        default:
            PlayerOne.setArchetypes(1, 1, 1, 1);
    }
}
