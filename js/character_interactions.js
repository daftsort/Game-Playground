//  Sample attack spells
offensive_spell_object = {
    /*  Beginner fireball spell. Upgradeable. Designed for frequent, low-cost use.
        Players recoup mana in combat at a rate of 1%/s unbuffed, so this is often castable.
        Attack strength based on int. No AoE damage. */
    incendio: {
        nameplayer: "Incendio Incandarus",
        namefunction: "incendio",
        nameid: "#incendio",
        damage: spell_power + diceRoll(1,6),
        manacost: Math.floor(Player.Mana * 0.05),
        healthcost: 0,
        manarestore: 0,
        healthrestore: 0,
        stamrestore: 0
    },

    /*  Intermediate ice-type spell. Has a more prohibitive mana cost.
        Attack strength based on int. No AoE effect. */
    glacies: {
        nameplayer: "Glacies Tempestas",
        namefunction: "glacies",
        nameid: "#glacies",
        damage: spell_power + diceRoll(3,6),
        manacost: Math.floor(Player.Mana * 0.40),
        healthcost: 0,
        manarestore: 0,
        healthrestore: 0,
        stamrestore: 0
    },
}

//  Sample restoration spells
recovery_spell_object = {
    //  Basic healing spell, designed for frequent usage.
    sana: {
        nameplayer: "Sana Purificense",
        namefunction: "sana",
        nameid: "#sana",
        damage: 0,
        manacost: Math.floor(Player.Mana * 0.10),
        healthcost: 0,
        manarestore: 0,
        healthrestore: spell_power + diceRoll(1,4) + restoration_bonus,
        stamrestore: 0
    },

    //  Stam restoration spell
    persto: {
        nameplayer: "Persto Perfero",
        namefunction: "persto",
        nameid: "#persto",
        damage: 0,
        manacost: Math.floor(Player.Mana * 0.25),
        healthcost: 0,
        healthrestore: 0,
        manarestore: 0,
        stamrestore: spell_power + diceRoll(1,8) + restoration_bonus
    }
}
