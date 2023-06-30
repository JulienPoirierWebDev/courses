import musicScript from "./music.js";

musicScript();

console.log("script.js chargé");

window.onload = function () {
  const cube = document.querySelector(".cube");
  let rotateX = 0;
  let rotateY = 0;

  const upButton = document.querySelector(".button-up");
  const downButton = document.querySelector(".button-down");
  const leftButton = document.querySelector(".button-left");
  const rightButton = document.querySelector(".button-right");

  const rotateButton = document.querySelector(".button-rotate");

  upButton.addEventListener("click", function () {
    rotateX -= 90;
    console.log(rotateX, rotateY);

    handleReversePosition();
    disableLeftRightButtons();

    cube.setAttribute(
      "style",
      `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`
    );

    rotateX = setBetween0And360(rotateX);
    rotateY = setBetween0And360(rotateY);
  });

  downButton.addEventListener("click", function () {
    rotateX += 90;
    console.log(rotateX, rotateY);

    handleReversePosition();
    disableLeftRightButtons();

    cube.setAttribute(
      "style",
      `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`
    );

    rotateX = setBetween0And360(rotateX);
    rotateY = setBetween0And360(rotateY);
  });

  leftButton.addEventListener("click", function () {
    rotateY -= 90;
    console.log(rotateX, rotateY);

    handleReversePosition();
    disableLeftRightButtons();

    cube.setAttribute(
      "style",
      `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`
    );

    rotateX = setBetween0And360(rotateX);
    rotateY = setBetween0And360(rotateY);
  });

  rightButton.addEventListener("click", function () {
    rotateY += 90;
    console.log(rotateX, rotateY);

    handleReversePosition();
    disableLeftRightButtons();

    cube.setAttribute(
      "style",
      `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`
    );

    rotateX = setBetween0And360(rotateX);
    rotateY = setBetween0And360(rotateY);
  });

  function disableLeftRightButtons() {
    if (
      rotateX === 90 ||
      rotateX === 270 ||
      rotateX === 450 ||
      rotateX === 630 ||
      rotateX === -90 ||
      rotateX === -270
    ) {
      leftButton.classList.add("disabled");
      rightButton.classList.add("disabled");
    } else {
      leftButton.classList.remove("disabled");
      rightButton.classList.remove("disabled");
    }
  }
  function setBetween0And360(value) {
    if (value < 0) {
      value += 360;
    }

    if (value > 360) {
      value -= 360;
    }

    return value;
  }

  function handleReversePosition() {
    console.log("handleReversePosition");

    // page 1
    if (rotateX % 360 === 180 && rotateY % 360 === 180) {
      rotateX = 0;
      rotateY = 0;
    }

    // Page 2
    if (rotateX % 360 === 180 && rotateY % 360 === 0) {
      rotateX = 0;
      rotateY = -180;
    }

    // Page 3
    if (rotateX % 360 === 180 && rotateY % 360 === 90) {
      rotateX = 0;
      rotateY = -90;
    }

    // Page 4
    if (rotateX % 360 === 180 && rotateY % 360 === 270) {
      rotateX = 0;
      rotateY = 90;
    }

    // Page 5
    if (
      (rotateX === -90 || rotateX === 270 || rotateX === 630) &&
      (rotateY === 90 ||
        rotateY === 180 ||
        rotateY === 270 ||
        rotateY === 360 ||
        rotateY === -90 ||
        rotateY === -180)
    ) {
      rotateX = 270;
      rotateY = 0;
    }

    // Page 6
    if (
      (rotateX === -270 || rotateX === 90 || rotateX === 450) &&
      (rotateY === 90 ||
        rotateY === 180 ||
        rotateY === 270 ||
        rotateY === 360 ||
        rotateY === -90)
    ) {
      rotateX = 90;
      rotateY = 0;
    }

    console.log(rotateX, rotateY);
    console.log("ENDED handleReversePosition");
  }

  function handleMouse() {
    let isDragging = false;

    let previousMousePosition = {
      x: 0,
      y: 0,
    };

    cube.addEventListener("mousedown", function (e) {
      console.log("mousedown");
      isDragging = true;
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY,
      };
    });

    cube.addEventListener("mouseup", function (e) {
      console.log("mouseup");
      isDragging = false;
    });

    cube.addEventListener("mousemove", function (e) {
      console.log(isDragging);
      if (!isDragging) return;

      let deltaMousePosition = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      console.log(deltaMousePosition);

      const oldCubeStyle = cube.getAttribute("style") || "";
      const oldRotateXMatch = oldCubeStyle.match(/rotateX\(([-\d]+)deg\)/);
      const oldRotateYMatch = oldCubeStyle.match(/rotateY\(([-\d]+)deg\)/);

      if (oldRotateXMatch && oldRotateXMatch.length > 0) {
        let oldRotateX = oldRotateXMatch[1];
        oldRotateX = parseInt(oldRotateX);
        rotateX = oldRotateX;
      }

      if (oldRotateYMatch && oldRotateYMatch.length > 0) {
        let oldRotateY = oldRotateYMatch[1];
        oldRotateY = parseInt(oldRotateY);
        rotateY = oldRotateY;
      }

      rotateX -= deltaMousePosition.y * 0.5;
      rotateY += deltaMousePosition.x * 0.5;

      cube.setAttribute(
        "style",
        `transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg);`
      );

      previousMousePosition = {
        x: e.clientX,
        y: e.clientY,
      };
    });
  }
  //handleMouse();
};
/*
function handleMouse() {
  let isDragging = false;

  let previousMousePosition = {
    x: 0,
    y: 0,
  };

  cube.addEventListener("mousedown", function (e) {
    console.log("mousedown");
    isDragging = true;
  });

  cube.addEventListener("mouseup", function (e) {
    console.log("mouseup");
    isDragging = false;
  });

  cube.addEventListener("mousemove", function (e) {
    console.log(isDragging);
    if (!isDragging) return;

    let deltaMousePosition = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y,
    };

    console.log(deltaMousePosition);

    let oldRotateX = 0;
    let oldRotateY = 0;

    const oldCubeStyle = cube.getAttribute("style") || "";
    const oldRotateXMatch = oldCubeStyle.match(/rotateX\((\d+)deg\)/);
    const oldRotateYMatch = oldCubeStyle.match(/rotateY\((\d+)deg\)/);

    if (oldRotateXMatch && oldRotateXMatch.length > 0) {
      let oldRotateX = oldRotateXMatch[0];
      oldRotateX = oldRotateX.replace("rotateX(", "");
      oldRotateX = oldRotateX.replace("deg)", "");
      oldRotateX = parseInt(oldRotateX);
    }

    if (oldRotateYMatch && oldRotateYMatch.length > 0) {
      let oldRotateY = oldRotateYMatch[0];
      oldRotateY = oldRotateY.replace("rotateY(", "");
      oldRotateY = oldRotateY.replace("deg)", "");
      oldRotateY = parseInt(oldRotateY);
    }

    const newrotateX = deltaMousePosition.y + oldRotateX;
    const newrotateY = deltaMousePosition.x + oldRotateY;

    cube.setAttribute(
      "style",
      `transform: rotateX(${newrotateX}deg) rotateY(${newrotateY}deg);`
    );

    previousMousePosition = {
      x: e.clientX,
      y: e.clientY,
    };
  });
}
*/
