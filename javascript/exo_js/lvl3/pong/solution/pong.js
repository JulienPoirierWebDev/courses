let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

let paddles = {
    left: {
        x: 30,
        y: 100,
        width: 10,
        height: 100,
        color: "white",
        score: 0,
        },
    right: {
        x: 760,
        y: 100,
        width: 10,
        height: 100,
        color: "white",
        score: 0,
        },
    }; 

let ball = {
    x: 400,
    y: 300,
    radius: 10,
    color: "white",
    velocityX: 3,
    velocityY: 3,
    hitCount: 0,
};

const KEYSTATE = {
    W: false,
    S: false,
    Up: false,
    Down: false
  };

  function playSoundWhenBallHits() {
    // Jouer un son lorsque la balle touche une raquette
    let sound = new Audio("pong.wav");
    sound.play();
  }
    

  function updateBallPosition() {
    // Mettre à jour la position de la balle, détecter les collisions et gérer les rebonds

    ball.x += ball.velocityX;
    ball.y += ball.velocityY;


    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
        playSoundWhenBallHits();
    } else if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.velocityX = -ball.velocityX;
        playSoundWhenBallHits();

        if (ball.x + ball.radius > canvas.width) {
            paddles.left.score++;
        } else {
            paddles.right.score++;
        }

        resetBallPosition();

    }

    if (ball.x - ball.radius < paddles.left.x + paddles.left.width && ball.y - ball.radius < paddles.left.y + paddles.left.height && ball.y + ball.radius > paddles.left.y) {
        ball.velocityX = -ball.velocityX;
        playSoundWhenBallHits();

    }
    if (ball.x + ball.radius > paddles.right.x && ball.y - ball.radius < paddles.right.y + paddles.right.height && ball.y + ball.radius > paddles.right.y) {
        ball.velocityX = -ball.velocityX;
        playSoundWhenBallHits();

    }

    // check if ball is out of bounds
    if (ball.x + ball.radius > canvas.width) {
        resetBallPosition();
    } else if (ball.x - ball.radius < 0) {
        resetBallPosition();
    }
  }

function updateBallVelocity() {
    // Ajouter 1 a hitCount si la balle touche une raquette
    if (ball.x - ball.radius < paddles.left.x + paddles.left.width && ball.y - ball.radius < paddles.left.y + paddles.left.height && ball.y + ball.radius > paddles.left.y) {
        ball.hitCount++;
    }
    if (ball.x + ball.radius > paddles.right.x && ball.y - ball.radius < paddles.right.y + paddles.right.height && ball.y + ball.radius > paddles.right.y) {    
        ball.hitCount++;
    }

    // Mettre à jour la vitesse de la balle en fonction du nombre de rebonds
    if (ball.hitCount > 1) {
        ball.velocityX += 0.5;
        ball.velocityY += 0.5;
        ball.hitCount = 0;
    }
}
  
function updatePaddlePositions() {
    // Mettre à jour la position des raquettes en fonction des entrées de l'utilisateur (touches du clavier)
    
    if (KEYSTATE.W && paddles.left.y > 0) {
        paddles.left.y -= 10;
        }
    if (KEYSTATE.S && paddles.left.y < canvas.height - paddles.left.height) {
        paddles.left.y += 10;
        }
    if (KEYSTATE.Up && paddles.right.y > 0) {
        paddles.right.y -= 10;
        }
    if (KEYSTATE.Down && paddles.right.y < canvas.height - paddles.right.height) {
        paddles.right.y += 10;
        }
}
  
function drawBall() {
    // Dessiner la balle sur le canvas en utilisant les méthodes de dessin du contexte 2D
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = ball.color;
    context.fill();
    context.closePath();

  }
  
function drawPaddles() {
    // Dessiner les raquettes sur le canvas en utilisant les méthodes de dessin du contexte 2D
    context.fillStyle = paddles.left.color;
    context.fillRect(paddles.left.x, paddles.left.y, paddles.left.width, paddles.left.height);
    context.fillStyle = paddles.right.color;
    context.fillRect(paddles.right.x, paddles.right.y, paddles.right.width, paddles.right.height);

}

function drawScore() {
    context.font = "30px Arial";
    context.fillText(paddles.left.score, 10, 50);
    context.fillText(paddles.right.score, 780, 50);
}

function drawSeparation() {
    context.beginPath();
    context.setLineDash([10, 10]);
    context.moveTo(400, 0);
    context.lineTo(400, 600);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
}

function resetBallPosition() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.hitCount = 0;
    ball.velocityX = 3 * (Math.random() * 2 - 1);
    ball.velocityY = 3 * (Math.random() * 2 - 1);
}
  
function gameLoop() {
    // Effacer le canvas pour le préparer au nouveau rendu
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    // Mettre à jour la position de la balle et des raquettes
    updateBallPosition();
    updatePaddlePositions();
    updateBallVelocity();
  
    // Dessiner la balle et les raquettes et le score sur le canvas
    drawBall();
    drawPaddles();
    drawSeparation();
    drawScore();
  
    // Demander à `requestAnimationFrame()` de rappeler `gameLoop()` à la prochaine image
    requestAnimationFrame(gameLoop);
}

function onKeyDown(event) {
    // Gérer l'appui sur les touches (par exemple, mettre à jour une variable indiquant que la touche est enfoncée)
    if (event.code === 'KeyW') {
        KEYSTATE.W = true;
      } else if (event.code === 'KeyS') {
        KEYSTATE.S = true;
      } else if (event.code === 'ArrowUp') {
        KEYSTATE.Up = true;
      } else if (event.code === 'ArrowDown') {
        KEYSTATE.Down = true;
      }
}
  
function onKeyUp(event) {
    // Gérer le relâchement des touches (par exemple, mettre à jour une variable indiquant que la touche est relâchée)
    if (event.code === 'KeyW') {
        KEYSTATE.W = false;
      } else if (event.code === 'KeyS') {
        KEYSTATE.S = false;
      } else if (event.code === 'ArrowUp') {
        KEYSTATE.Up = false;
      } else if (event.code === 'ArrowDown') {
        KEYSTATE.Down = false;
      }
}
  
// Ajouter les écouteurs d'événements pour les événements "keydown" et "keyup"
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);
  
// Démarrer la boucle de jeu
gameLoop();
  