console.log("hello 4 may -day 70 russo-ukraine war 2237 IST ")
let songIndex=1;
let audioElement= new Audio('songs/song1.mp3');
let masterPLay=document.getElementById('masterPLay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"TO THE MOON",filePath:"songs/song1.mp3",coverPath:"covers/1.jpg"},
    {songName:"LOVELY",filePath:"songs/song2.mp3",coverPath:"covers/2.jpg"},
    {songName:"HARLEYS IN HAWAII",filePath:"songs/song3.mp3",coverPath:"covers/3.jpg"},
    {songName:"PASOORI",filePath:"songs/song4.mp3",coverPath:"covers/4.jpg"},
    {songName:"RAIT ZARA SI",filePath:"songs/song5.mp3",coverPath:"covers/5.jpg"},
    {songName:"TU AAKE DEKHLE",filePath:"songs/song6.mp3",coverPath:"covers/6.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
masterPLay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPLay.classList.remove('fa-circle-play');
        masterPLay.classList.add('fa-circle-pause')
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPLay.classList.add('fa-circle-play');
        masterPLay.classList.remove('fa-circle-pause')
        gif.style.opacity=0
    }
})
// audioElement.play();
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/song${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1
        masterPLay.classList.remove('fa-circle-play');
        masterPLay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/song${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex-1].songName;
    masterPLay.classList.remove('fa-circle-play');
    masterPLay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=6;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/song${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPLay.classList.remove('fa-circle-play');
    masterPLay.classList.add('fa-circle-pause');
})
