const heroDiv = document.getElementById("heroVariables");
const enemyDiv = document.getElementById("enemyVariables");
const heroObjectDiv = document.getElementById("heroObject");
const enemyObjectDiv = document.getElementById("enemyObject");
const heroWeaponsDiv = document.getElementById("heroWeapons");
const enemyWeaponsDiv = document.getElementById("enemyWeapons");

const variableToDisplayForHero = {};
const variableToDisplayForEnemy = {};

injectVariablesInHeroContainer();
injectVariablesInEnemyContainer();
createHtmlForVariables();
hideEmptyDiv();
createHtmlForObjects();
createHtmlForWeapons();

function injectVariablesInHeroContainer() {
  if (typeof name !== "undefined" && name !== "") {
    variableToDisplayForHero.name = name;
  }

  if (typeof hp !== "undefined") {
    variableToDisplayForHero.hp = hp;
  }
  if (typeof maxHp !== "undefined") {
    variableToDisplayForHero.maxHp = maxHp;
  }
  if (typeof attack !== "undefined") {
    variableToDisplayForHero.attack = attack;
  }
  if (typeof defense !== "undefined") {
    variableToDisplayForHero.defense = defense;
  }
  if (typeof speed !== "undefined") {
    variableToDisplayForHero.speed = speed;
  }
  if (typeof weapon !== "undefined") {
    variableToDisplayForHero.weapon = weapon;
  }
  if (typeof weaponAttack !== "undefined") {
    variableToDisplayForHero.weaponAttack = weaponAttack;
  }
  if (typeof shield !== "undefined") {
    variableToDisplayForHero.shield = shield;
  }
  if (typeof shieldDefense !== "undefined") {
    variableToDisplayForHero.shieldDefense = shieldDefense;
  }
}

function injectVariablesInEnemyContainer() {
  if (typeof enemyName !== "undefined") {
    variableToDisplayForEnemy.enemyName = enemyName;
  }
  if (typeof enemyHp !== "undefined") {
    variableToDisplayForEnemy.enemyHp = enemyHp;
  }
  if (typeof enemyMaxHp !== "undefined") {
    variableToDisplayForEnemy.enemyMaxHp = enemyMaxHp;
  }
  if (typeof enemyAttack !== "undefined") {
    variableToDisplayForEnemy.enemyAttack = enemyAttack;
  }
  if (typeof enemyDefense !== "undefined") {
    variableToDisplayForEnemy.enemyDefense = enemyDefense;
  }
  if (typeof enemySpeed !== "undefined") {
    variableToDisplayForEnemy.enemySpeed = enemySpeed;
  }
  if (typeof enemyWeapon !== "undefined") {
    variableToDisplayForEnemy.enemyWeapon = enemyWeapon;
  }
  if (typeof enemyWeaponAttack !== "undefined") {
    variableToDisplayForEnemy.enemyWeaponAttack = enemyWeaponAttack;
  }
  if (typeof enemyShield !== "undefined") {
    variableToDisplayForEnemy.enemyShield = enemyShield;
  }
  if (typeof enemyShieldDefense !== "undefined") {
    variableToDisplayForEnemy.enemyShieldDefense = enemyShieldDefense;
  }
}

function insertObject(object, parent) {
  if (Object.keys(object).length === 0) {
    return;
  }
  const ul = document.createElement("ul");

  for (const [key, value] of Object.entries(object)) {
    const li = document.createElement("li");
    li.textContent = `${key} : ${value}`;
    ul.appendChild(li);
  }

  parent.appendChild(ul);
}

function createHtmlForVariables() {
  if (variableToDisplayForHero) {
    insertObject(variableToDisplayForHero, heroDiv);
  }

  if (variableToDisplayForEnemy) {
    insertObject(variableToDisplayForEnemy, enemyDiv);
  }
}

function hideEmptyDiv() {
  if (heroDiv.children.length === 0) {
    heroDiv.parentElement.classList.toggle("hidden");
  }

  if (enemyDiv.children.length === 0) {
    enemyDiv.parentElement.classList.toggle("hidden");
  }
}

function createHtmlForObjects() {
  if (typeof hero !== "undefined") {
    insertObject(hero, heroObjectDiv);
  } else {
    heroObjectDiv.classList.toggle("hidden");
  }

  if (typeof enemy !== "undefined") {
    insertObject(enemy, enemyObjectDiv);
  } else {
    enemyObjectDiv.classList.toggle("hidden");
  }
}

function createHtmlForWeapons() {
  if (typeof heroWeapons !== "undefined" && heroWeapons.length > 0) {
    heroWeapons.forEach((weapon) => {
      insertObject(weapon, heroWeaponsDiv);
    });
  }

  if (typeof enemyWeapons !== "undefined" && enemyWeapons.length > 0) {
    enemyWeapons.forEach((weapon) => {
      insertObject(weapon, enemyWeaponsDiv);
    });
  } else {
    enemyWeaponsDiv.parentElement.classList.toggle("hidden");
  }
}
