function main() {
  console.log("chargement de music.js");

  const buttonPrev = document.querySelector(".music_prev");
  const buttonNext = document.querySelector(".music_next");
  const buttonPlay = document.querySelector(".music_play");
  const buttonStop = document.querySelector(".music_stop");

  const musicTimeRange = document.querySelector(".music_range");
  const musicNameElement = document.querySelector(".music_name");
  const musicTimeInfoElement = document.querySelector(".music_time");

  const audio1 = new Audio("./assets/musics/modern_havier.mp3");
  const audio2 = new Audio("./assets/musics/lyric_space_theme_1.wav");
  const audio3 = new Audio("./assets/musics/lyric_space_theme_2.wav");
  const audio4 = new Audio("./assets/musics/lyric_space_theme_3.wav");

  const musics = [audio1, audio2, audio3, audio4];

  musics.forEach((music) => {
    music.addEventListener("ended", () => {
      handleChangeMusic(nextMusic);
      changeMusicName();
      musics[currentMusic].play();
    });
  });

  let interval = null;

  let currentMusic = 0;

  buttonPlay.addEventListener("click", () => {
    musics[currentMusic].play();
    changePauseOrPlayButtonDisplay();
    interval = setInterval(() => {
      changeMusicTimeInfo();
      console.log("coucou");
    }, 100);
    audioVizualiser(musics);
  });

  buttonStop.addEventListener("click", () => {
    clearInterval(interval);
    musics[currentMusic].pause();
    changePauseOrPlayButtonDisplay();
  });

  const handleChangeMusic = (changeMusic) => {
    musics[currentMusic].pause();
    changeMusic();
    changeMusicName();
    musics[currentMusic].play();

    if (buttonStop.classList.contains("hidden")) {
      changePauseOrPlayButtonDisplay();
    }
  };

  const nextMusic = () => {
    currentMusic++;
    if (currentMusic >= musics.length) {
      currentMusic = 0;
    }
  };

  const prevMusic = () => {
    currentMusic--;
    if (currentMusic < 0) {
      currentMusic = musics.length - 1;
    }
  };

  const changePauseOrPlayButtonDisplay = () => {
    if (musics[currentMusic].paused) {
      buttonPlay.classList.remove("hidden");
      buttonStop.classList.add("hidden");
    } else {
      buttonPlay.classList.add("hidden");
      buttonStop.classList.remove("hidden");
    }
  };

  buttonNext.addEventListener("click", (e) => {
    handleChangeMusic(nextMusic);
  });

  buttonPrev.addEventListener("click", (e) => {
    handleChangeMusic(prevMusic);
  });

  const changeMusicName = () => {
    const musicName = getMusicName();
    musicNameElement.textContent = musicName;
  };

  const getMusicName = () => {
    const musicFilePath = musics[currentMusic].src.split("/");
    const musicFileName = musicFilePath[musicFilePath.length - 1].split(".")[0];
    console.log(musicFileName);
    const musicName = musicFileName
      .split("_")
      .map((element, index) => element[0].toUpperCase() + element.slice(1))
      .join(" ");
    return musicName;
  };

  const getMusicDuration = () => {
    const musicDuration = musics[currentMusic].duration;
    return musicDuration;
  };

  const getMusicActualTime = () => {
    const musicActualTime = musics[currentMusic].currentTime;
    return musicActualTime;
  };

  const changeMusicTimeInfo = () => {
    const musicDuration = getMusicDuration();
    const musicActualTime = getMusicActualTime();

    const newRangeValue = (musicActualTime / musicDuration) * 100;
    musicTimeRange.value = newRangeValue;

    const musicActualTimeMinutes = Math.floor(musicActualTime / 60);
    const musicActualTimeSeconds = Math.floor(musicActualTime % 60);

    const musicDurationMinutes = Math.floor(musicDuration / 60);
    const musicDurationSeconds = Math.floor(musicDuration % 60);

    musicTimeInfoElement.textContent = `${musicActualTimeMinutes}:${musicActualTimeSeconds} / ${musicDurationMinutes}:${musicDurationSeconds}`;
  };

  const handleChangeInputRange = (e) => {
    console.log("change input range", e.target.value);
    if (musics[currentMusic].paused) {
      musics[currentMusic].play();
      interval = setInterval(() => {
        changeMusicTimeInfo();
      }, 1000);
    }

    const musicDuration = getMusicDuration();
    const newMusicActualTime = (e.target.value * musicDuration) / 100;
    musics[currentMusic].currentTime = newMusicActualTime;
    changeMusicTimeInfo();
    changePauseOrPlayButtonDisplay();
  };

  musicTimeRange.addEventListener("input", handleChangeInputRange);

  audio1.addEventListener("loadeddata", () => {
    changeMusicName();
    changeMusicTimeInfo();
  });
}

function audioVizualiser(musics) {
  const audioContext = new AudioContext() || new webkitAudioContext();
  const analyser = audioContext.createAnalyser();

  musics.forEach((music) => {
    const source = audioContext.createMediaElementSource(music);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
  });

  const bufferLength = analyser.frequencyBinCount;
  let array = new Uint8Array(bufferLength);

  const canvasParent = document.querySelector(".music_canvas");

  const canvas = document.querySelector(".music_visualizer");
  const ctx = canvas.getContext("2d");

  canvas.width = canvasParent.offsetWidth;
  canvas.height = canvasParent.offsetHeight;

  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  draw();

  function draw() {
    const frequency = analyser.getByteFrequencyData(array);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    let x = 0;
    let xEnd = WIDTH / 2;
    const xGap = WIDTH / bufferLength;
    let y = 0;
    const yGap = HEIGHT / bufferLength;

    const barWidth = 1;
    const barHeight = 1;

    array.forEach((element, index) => {
      let r = 255;
      let g = 60;
      let b = HEIGHT / 2 - 2 * yGap * element;
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      x += 2 * xGap;
      xEnd += xGap;
      ctx.fillRect(x, HEIGHT / 2 - 2 * yGap * element, 1, 4 * yGap * element);
    });

    requestAnimationFrame(draw);
  }
}

export default main;
