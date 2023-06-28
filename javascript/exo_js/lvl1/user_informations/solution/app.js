document.getElementById('loadUserData').addEventListener('click', loadUserData);

/*
function loadUserData() {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    
    xhr.onload = function() {
        if (this.status === 200) {
            const users = JSON.parse(this.responseText);
            displayUserData(users);
        } else {
            console.error('Erreur lors de la récupération des données.');
        }
    };
    
    xhr.onerror = function() {
        console.error('Erreur lors de la connexion au serveur.');
    };
    
    xhr.send();
}*/

// with fetch   
function loadUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => displayUserData(users))
        .catch(error => displayError(error));
}

function displayError(error) {
    document.getElementById('userData').innerHTML = "Erreur lors de la récupération des données.";
}

function displayUserData(users) {
    let output = '<ul>';
    users.forEach(user => {
        const {name, email, phone, website} = user;
        console.log(user);
        output += `
            <li>
                <h2>${name}</h2>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>Website: ${user.website}</p>
            </li>
        `;
    });
    
    output += '</ul>';
    document.getElementById('userData').innerHTML = output;
}