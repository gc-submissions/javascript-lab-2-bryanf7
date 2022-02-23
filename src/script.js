
let randomDamage = () => {
        Math.floor(Math.random(1) * 10);
} 


const chooseoption = (opt1, opt2) => {
    const randNum = Math.floor(math.random() * 2);
    randNum === 0 ? opt1 : opt2;
} 

const attackplayer = function(health){
    return health - randomDamage;
}

const loghealth = (player, health) {
    console.log( ${player1} health: ${health})
}
const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
} 
const isDead = (health) => {
    return health <= 0;
}