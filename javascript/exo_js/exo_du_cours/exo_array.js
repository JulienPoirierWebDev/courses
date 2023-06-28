

let notes_de_bob = [];

// Ajouter les notes de l'élève : 
// 10,8,6,14,19,20,0,5

let addNote = true;

while(addNote) {

    let note = Number(prompt("Ajouter une note :"))
    console.log(note);

    // Faire quelque chose
    if(typeof note === "number" && !isNaN(note) && note <=20) {

        if(note === 0) {
            test = prompt("Etes vous sur de vouloir mettre 0 a l'élève ?")

            if(test ==="oui") {
                alert(`La nouvelle note est ${note}/20 `);
                notes_de_bob.push(note);
            }
        } else {
            alert(`La nouvelle note est ${note}/20 `);
            notes_de_bob.push(note);
        }
        
    } else {
        alert("La note n'est pas acceptable")
    }


    let question = prompt("Souhaitez-vous arreter d'ajouter des notes ? Tapez 'oui' en minuscule ")

    if(question === "oui") {
        addNote=false;
    } 
}

alert(notes_de_bob) // [10,8,6,14,19,20,0,5]