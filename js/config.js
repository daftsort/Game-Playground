// -----Character template functions.

//  Generates a random die rolls based on XdY.
function diceRoll(dice_count, dice_sides){
    this.dice_count = count;
    this.dice_sides = sides;
    var one_die;
    var total;
    for (var i = 0; i < count; i++){
        one_die = Math.floor(Math.random()*sides +1);
        total += one_die;
    }
    return total;
}

//  Returns the attribute modifier for an ability.
function attributeBonus(attribute) {
    return (Math.floor((attribute-10)/2));
}

