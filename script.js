const audio = document.getElementById('song');
const playBtn = document.querySelector('.play');
const prevBtn = document.getElementById('backward');
const nextBtn = document.getElementById('forward');
const artist = document.querySelector('.artist');
const songTitle = document.querySelector('.song-title');
const picture = document.getElementById('thumbnail');
const background = document.getElementById('background');
const player = document.getElementById('player');
const durationTime = document.querySelector('.durationTime');
const currentTime = document.querySelector('.currentTime');
let isPlay = false;
let playNum = 0;
const playList = [
    {      
      src: '../assets/audio/beyonce.mp3'
    },  
    {      
      src: '../assets/audio/dontstartnow.mp3',
    }
      
    ]
const artistList = [
    {
        src: '../assets/img/lemonade.png',
        name: "Beyonce",
        song: "Don't Hurt Yourself"
    },
    {
        src: '../assets/img/dontstartnow.png',
        name: "Dua Lipa",
        song: "Don't Start Now"
    }
]

  



function playAudio() {
    audio.currentTime = 0;
    if(!isPlay) {
      audio.play();
      isPlay = true;
      toggleBtn()

    } else {
      audio.pause();
      isPlay = false;
      toggleBtn()
    }
  }
  playBtn.addEventListener('click', playAudio);

  function toggleBtn() {
    playBtn.classList.toggle('pause')
  }
 

  function playNext() {
    if (playNum < 1) {
     playNum++;
    } else {
    playNum = 0;
    }
    isPlay = false;
    audio.src = playList[playNum].src;
    playAudio()
    changeArtistName()
  }
  function playPrev() {
    if(playNum > 0) {
        playNum--;
    } else {
        playNum = 1
        playNum = playList.length - 1;
    }
    isPlay = false;
    audio.src = playList[playNum].src;
    playAudio()
    changeArtistName()
  }
  prevBtn.addEventListener('click', playNext);
  nextBtn.addEventListener('click', playPrev);
 
  function changeArtistName() {
    background.src = artistList[playNum].src;
    picture.src = artistList[playNum].src;
    artist.textContent = artistList[playNum].name;
    songTitle.textContent = artistList[playNum].song;
  }
  player.addEventListener('input', function() {
    const timePersentage = player.value / 100;
    const newTime = timePersentage * audio.duration;
    audio.currentTime = newTime;
  })
  audio.addEventListener('timeupdate', function() {
    const currentTimePers = (audio.currentTime / audio.duration) * 100;
    player.value = currentTimePers;
  });
  


