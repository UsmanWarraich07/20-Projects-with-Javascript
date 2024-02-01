const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let curentMonsterHealth = chosenMaxLife;
let curentPlayerHealth = chosenMaxLife;

function reset() {
  let curentMonsterHealth = chosenMaxLife;
  let curentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}
adjustHealthBars(chosenMaxLife);
function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  curentPlayerHealth -= playerDamage;
  if (curentMonsterHealth <= 0 && curentPlayerHealth > 0) {
    alert('You won!');
  } else if(curentPlayerHealth <= 0 && curentMonsterHealth > 0) {
    alert('You lost!');
  }
  else if (curentPlayerHealth <=  0 && curentMonsterHealth <= 0 ) {
    alert('You have a draw!');
  }

  if (curentMonsterHealth <= 0 || curentPlayerHealth <=0 ) {
    reset();
  }
}
function attackMonster(mode) {
  let maxDamage ;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  curentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK');
}
function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}
function healAttackHandler() {
  let healValue;
  if (curentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("you can't heal to more then your initial health!");
    healValue = chosenMaxLife - curentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  curentPlayerHealth += healValue;
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healAttackHandler);