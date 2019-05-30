// ---- Uses character_config functions

var player_character = {

    /*  These are the player's primary characteristics/resources. They are static values that change upon levelling up.
        They do not influence character interactions in the same way as the attributes do.
        There are some abilities that are accessible if a player has enough of the resource. */
    name: "blank",
    level: 1,
    gold: 0,
    experience: 0,
    race: "human",
    subrace: "default",
    health: 0,
    stamina: 0,
    mana: 0,
    versatility: 0,
    expertise: 0,

    head: {},
    chest: {},
    legs: {},
    boots: {},
    ring_one: {},
    ring_two: {},
    trinket: {},
    necklace: {},
    main_weapon: {},
    off_weapon: {},
    ranged_weapon: {},
    wrists: {},
    shoulders: {},
    gloves: {},

    // These are the attributes of a character that skills are built on.
    strength: 0,
    str_bonus: attributeBonus(strength),
    dexterity: 0,
    dex_bonus: attributeBonus(dexterity),
    intelligence: 0,
    int_bonus: attributeBonus(intelligence),

    /*  These are the core values that apply to most interactions with the game.
        They are "hidden" values, only in that players may intuit them but won't see them. */

    //  Combat Section
    spell_power: int_bonus,
    melee_power: str_bonus,
    ranged_power: dex_bonus,
    dodge_chance: dex_bonus + level * diceRoll(1, 4), // Low chance, avoids a lot of damage.
    dodge_effect: (int_bonus + diceRoll(1, 100) + 10 * level), // Should be a high percent avoided.
    block_chance: dex_bonus + level * diceRoll(1, 20), // Higher chance, damage mitigation - not avoidance.
    block_effect: (str_bonus * level * diceRoll(1, 20)) / 100, // Percent of damage mitigated.

    //  Other Values Section
    carry_weight: 300 + (stamina * 5), // Similar to Skyrim, base value for everyone + some additional for each stam point.
    attack_speed: dex_bonus * diceRoll(1, 20), // Determines turn order in combat.
    potion_rating: int_bonus * diceRoll(1, 6),

    //  These are the player's archetypes that are improved at player's discretion.
    cunning_level: 0,
    confidence_level: 0,
    combat_level: 0,
    concealment_level: 0,

    /*  These are modifiers for specific types of actions, that are more granular than core skills.
        Many abilities check one or more modified values, rather than using the base skill level. */

    // Cunning
    poison_proficiency: 0,
    potion_proficiency: 0,
    illusion_proficiency: 0,
    nature_proficiency: 0,
    restoration_proficiency: 0,

    // Confidence
    intimidation_proficiency: 0,
    persuasion_proficiency: 0,
    deception_proficiency: 0,

    // Combat
    ambush_proficiency: 0,
    trap_proficiency: 0,
    acrobatics_proficiency: 0,
    athletics_proficiency: 0,

    //Concealment
    perception_proficiency: 0,
    legerdemain_proficiency: 0,
    pickpocket_proficiency: 0,
    lockpick_proficiency: 0,
    sneak_proficiency: 0,

    /*  These are the final values that will be applied in-game, once the core skill
        and the modifier have both been taken into account. They are visible
        to the player in their Skill book. */
    poison: cunning_level + poison_proficiency,
    potion: cunning_level + potion_proficiency,
    illusion: cunning_level + illusion_proficiency,
    nature: cunning_level + nature_proficiency,
    restoration: cunning_level + restoration_proficiency,
    intimidation: confidence_level + intimidation_proficiency,
    persuasion: confidence_level + persuasion_proficiency,
    deception: confidence_level + deception_proficiency,
    ambush: combat_level + ambush_proficiency,
    trap: combat_level + trap_proficiency,
    acrobatics: combat_level + acrobatics_proficiency,
    athletics: combat_level + athletics_proficiency,
    perception: concealment_level + perception_proficiency,
    legerdemain: concealment_level + legerdemain_proficiency,
    pickpocket: concealment_level + pickpocket_proficiency,
    lockpick: cunning_level + lockpick_proficiency,
    sneak: concealment_level + sneak_proficiency,
}
