console.log('Welcome to Spotify');
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let master=document.getElementById('master');
let ProgressBar=document.getElementById('ProgressBar');
let masterplay=document.getElementById('masterplay');
let songs=[{songName:"srivalli",filePath:"songs/1.mp3",coverPath:"covers/cover1.jpg"},
{songName:"chakachak",filePath:"songs/2.mp3",coverPath:"covers/cover2.jpg"},
{songName:"ranjha",filePath:"songs/3.mp3",coverPath:"covers/cover3.jpg"},
{songName:"raataanlambiya",filePath:"songs/4.mp3",coverPath:"covers/cover4.jpg"},
{songName:"bekhayali",filePath:"songs/5.mp3",coverPath:"covers/cover5.jpg"},
{songName:"meresohneya",filePath:"songs/6.mp3",coverPath:"covers/cover6.jpg"},
{songName:"terimitti",filePath:"songs/7.mp3",coverPath:"covers/cover7.jpg"},
]

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    ProgressBar.value=progress;
})
ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=ProgressBar.value*audioElement.duration/100;
})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        master.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        master.style.opacity=0;
    }
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
        songIndex+=1
    }
    audioElement.src= audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersong.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    master.classList.add('fa-pause-circle');
    masterplay.classList.remove('fa-play-circle')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1
    }
    audioElement.src= audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersong.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    master.classList.add('fa-pause-circle');
    masterplay.classList.remove('fa-play-circle')
})

