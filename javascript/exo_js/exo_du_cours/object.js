let hero = {
    point_de_vie : 10,
    point_armure : 20,
    niveau : 5,
    inventaire: {
        casque_id : 2,
        armure: 4,
        gantelets : 2,
        jambiere:1
    },
    quetes : [
        {
            id:2,
            
        }
    ]
}


let personnages = [
    {
      nom: "Guerrier",
      niveau: 1,
      pointsDeVie: 100,
      pointsDAttaque: 10,
      pointsDeDefense: 5,
      pointsDeMagie: 0
    },
    {
      nom: "Mage",
      niveau: 1,
      pointsDeVie: 50,
      pointsDAttaque: 5,
      pointsDeDefense: 3,
      pointsDeMagie: 10
    },
    {
      nom: "Rôdeur",
      niveau: 1,
      pointsDeVie: 75,
      pointsDAttaque: 7,
      pointsDeDefense: 4,
      pointsDeMagie: 5
    }
  ];

  let key = 1;
  let perso = personnages[key];

  console.log(perso.pointsDAttaque)

  perso.pointsDeVie--;

  personnages[key] = perso;
  
// let fruits = ["banane", "cerise"]

// let fruits = [{0:"banane"}, {1:"cerise"}]

let element = 'point_de_vie';
console.log(hero.point_de_vie)

hero.point_de_vie-- // hero.point_de_vie = hero.point_de_vie - 1 
hero.niveau++

console.log(typeof hero) 
hero.proprietaire = "moi"
console.log(hero)

//keys

let array_of_keys = Object.keys(hero);


console.log(array_of_keys);



for(let i = 0; i<array_of_keys.length; i++) {
    console.log(array_of_keys[i], hero[array_of_keys[i]]);
}
