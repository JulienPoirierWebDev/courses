/*
On va créer des variables pour initialiser les données d'un jeu vidéo.

-> Créer une variable "name" qui contient le nom du héro. 
-> Créer une variable "hp" qui contient les points de vie du héro.
-> Créer une variable "maxHp" qui contient les points de vie maximum du héro.
-> Créer une variable "attack" qui contient la force d'attaque du héro.
-> Créer une variable "defense" qui contient la défense du héro.
-> Créer une variable "speed" qui contient la vitesse du héro.
-> Créer une variable "weapon" qui contient le nom de l'arme du héro.
-> Créer une variable "weaponAttack" qui contient la force d'attaque de l'arme du héro.
-> Créer une variable "shield" qui contient le nom du bouclier du héro.
-> Créer une variable "shieldDefense" qui contient la défense du bouclier du héro.

Tips : 
- pour chaque variable, il faut trouver le type de donnée qui correspond le mieux.
- pour chaque variable, il faut trouver le type de variable qui correspond le mieux, entre "const" et "let".
*/

const name = "Link";
let hp = 100;
const maxHp = 100;
const attack = 10;
const defense = 5;
const speed = 10;
let weapon = "Master Sword";
let weaponAttack = 20;
let shield = "Hylian Shield";
let shieldDefense = 10;

/*

Nous avons les données de notre héro, mais il nous manque les données de l'ennemi.

-> Créer une variable "enemyName" qui contient le nom de l'ennemi.
-> Créer une variable "enemyHp" qui contient les points de vie de l'ennemi.
-> Créer une variable "enemyMaxHp" qui contient les points de vie maximum de l'ennemi.
-> Créer une variable "enemyAttack" qui contient la force d'attaque de l'ennemi.
-> Créer une variable "enemyDefense" qui contient la défense de l'ennemi.
-> Créer une variable "enemySpeed" qui contient la vitesse de l'ennemi.
-> Créer une variable "enemyWeapon" qui contient le nom de l'arme de l'ennemi.
-> Créer une variable "enemyWeaponAttack" qui contient la force d'attaque de l'arme de l'ennemi.
-> Créer une variable "enemyShield" qui contient le nom du bouclier de l'ennemi.
-> Créer une variable "enemyShieldDefense" qui contient la défense du bouclier de l'ennemi.

*/

const enemyName = "Ganon";
let enemyHp = 500;
const enemyMaxHp = 500;
const enemyAttack = 15;
const enemyDefense = 5;
const enemySpeed = 10;
let enemyWeapon = "Giant Sword";
let enemyWeaponAttack = 40;
let enemyShield = null;
let enemyShieldDefense = null;

/*
Nous avons vu l'existence des objets en JavaScript, nous allons maintenant créer un objet pour notre héro et un pour notre ennemi.

Le code n'en sera que plus lisible et plus facile à maintenir.

-> Créer un objet "hero" qui contient toutes les données de notre héro.
-> Créer un objet "enemy" qui contient toutes les données de notre ennemi.
*/

const hero = {
  name: "Link",
  hp: 100,
  maxHp: 100,
  attack: 10,
  defense: 5,
  speed: 10,
  weapon: "Master Sword",
  weaponAttack: 20,
  shield: "Hylian Shield",
  shieldDefense: 10,
};

const enemy = {
  name: "Ganon",
  hp: 500,
  maxHp: 500,
  attack: 15,
  defense: 5,
  speed: 10,
  weapon: "Giant Sword",
  weaponAttack: 40,
  shield: null,
  shieldDefense: null,
};

/*

Nous avons vu l'existence des tableaux (ou array) en JavaScript, nous allons maintenant créer un tableau pour les armes de notre héro et un pour les armes de notre ennemi.
Ils pourront ainsi changer d'arme au cours du jeu.


-> Créer un tableau "heroWeapons" qui contient toutes les armes de notre héro.
-> Créer un tableau "enemyWeapons" qui contient toutes les armes de notre ennemi.

Les armes peuvent être tenues a deux mains ou a une main, il faut donc indiquer ce détail dans le tableau.

-> Créer une arme "heroWeapon1" qui contient les données de l'arme "Master Sword".
-> Créer une arme "heroWeapon2" qui contient les données de l'arme "Giant Sword".
-> Créer une arme "heroWeapon3" qui contient les données de l'arme "Biggoron Sword".
-> Créer une arme "enemyWeapon1" qui contient les données de l'arme "Kokiri Sword".
-> Créer une arme "enemyWeapon2" qui contient les données de l'arme "Dark Master Sword".

*/

const heroWeapon1 = {
  name: "Master Sword",
  attack: 20,
  twoHands: false,
};

const heroWeapon2 = {
  name: "Giant Sword",
  attack: 40,
  twoHands: true,
};

const heroWeapon3 = {
  name: "Biggoron Sword",
  attack: 30,
  twoHands: true,
};

const heroWeapon4 = {
  name: "Kokiri Sword",
  attack: 10,
  twoHands: false,
};

const enemyWeapon1 = {
  name: "Giant Sword",
  attack: 40,
  twoHands: false,
};

const enemyWeapon2 = {
  name: "Dark Master Sword",
  attack: 70,
  twoHands: false,
};

const heroWeapons = [heroWeapon1, heroWeapon2, heroWeapon3];
const enemyWeapons = [enemyWeapon1, enemyWeapon2];
