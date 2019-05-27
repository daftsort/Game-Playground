src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
$.getScript('rolls.js'), function () {
    $.getScript('character_template.js'), function () {
        offensive_spell_object = {
            /*  Beginner fireball spell. Upgradeable. Designed for frequent, low-cost use.
                Players recoup mana in combat at a rate of 1%/s unbuffed, so this is often castable.
                Attack strength based on int. No AoE damage. */
            incendio: {
                nameplayer: "Incendio Incandarus",
                namefunction: "incendio",
                nameid: "#incendio",
                damage: Math.floor(spell_power + d_six_roll),
                manacost: Math.floor(Player.Mana * 0.05),
                healthcost: 0,
                manarestore: 0,
                healthrestore: Math.floor(Siphon / 4),
                repeat: 0,
                delay: 0,
                buffname: 0,
                buffamount: 0,
                cooldown: 2000,
            },
            /*  Intermediate ice-type spell. Has a more prohibitive mana cost.
                Attack strength based on int. No AoE effect. */
            glacies: {
                nameplayer: "Glacies Tempestas",
                namefunction: "glacies",
                nameid: "#glacies",
                damage: Math.floor(spell_power + 3 * d_six_roll),
                manacost: Math.floor(Player.Mana * 0.40),
                healthcost: 0,
                manarestore: 0,
                healthrestore: 0,
                repeat: 0,
                delay: 0,
                buffname: 0,
                buffamount: 0,
                cooldown: 5000,
            },
        }
        recovery_spell_object = {
            //  Basic healing spell, designed for frequent usage.
            sana: {
                nameplayer: "Sana Purificense",
                namefunction: "sana",
                nameid: "#sana",
                damage: 0,
                manacost: boss.level * 4,
                healthcost: 0,
                manarestore: 0,
                healthrestore: spell_power + d_four_roll + restoration_bonus,
                stamrestore: 0,
                repeat: 0,
                delay: 0,
                buffname: 0,
                buffamount: 0,
                cooldown: 10000,
            },
            persto: {
                nameplayer: "Persto Perfero",
                namefunction: "persto",
                nameid: "#persto",
                damage: 0,
                manacost: boss.level * 4,
                healthcost: 0,
                healthrestore: 0,
                manarestore: 0,
                stamrestore: spell_power + d_eight_roll + restoration_bonus,
                repeat: 0,
                delay: 0,
                buffname: 0,
                buffamount: 0,
                cooldown: 15000,
            }
        }
    }
}
