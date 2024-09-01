

const playBtn=document.querySelector('#play-btn');
const progress=document.querySelector('#progress');
const songList=document.querySelector('#song-list');
const fwdbtn=document.querySelector('#fwd-btn');
const bwdbtn=document.querySelector('#bwd-btn');


let songs=[
    {
        name:'song1',
        id:1
    },
    {
        name:'song2',
        id:2
    },
    {
        name:'song3',
        id:3
    },
    {
        name:'song4',
        id:4
    }
]


//constructor
const audio=new Audio('./assets/song1.mp3');


//show songs in ul
for(let song of songs){
    const li=document.createElement('li');
    li.innerText=song.name;
    li.setAttribute('id',song.id);
    li.classList.add('song-item');
    songList.append(li);
}


//play btn click
playBtn.addEventListener('click',function(){
    audio.paused ? audio.play() :audio.pause();
    if(playBtn.children[0].classList.contains('fa-circle-play')){
        playBtn.children[0].classList.remove('fa-circle-play');
        playBtn.children[0].classList.add('fa-circle-pause');
    }   
    else{
        playBtn.children[0].classList.remove('fa-circle-pause');
        playBtn.children[0].classList.add('fa-circle-play');
    }
})


//current time ko dekho
audio.addEventListener('timeupdate',function(){
    const currentProgress=audio.currentTime*100 /audio.duration;
    progress.value=currentProgress;
})


//input ko apne hisaab se aage peeche krna
progress.addEventListener('change' , function(){
    const updatedTime=audio.duration *progress.value /100;
    audio.currentTime=updatedTime;
})


let currSongId=0;
//gaana khud se karo select;
songList.addEventListener('click',function(e){
    let songId=e.target.getAttribute('id');
    audio.src=`./assets/song${songId}.mp3`;
    currSongId=songId;
    audio.currentTime=0;
    audio.play();
    playBtn.children[0].classList.remove('fa-circle-play');
    playBtn.children[0].classList.add('fa-circle-pause');
    // console.log(e);
})

//forward button se peeche wala gaana chl jaye
fwdbtn.addEventListener('click',function(){
    // console.log(currSongId);
    if(currSongId<4){
        currSongId++;
    }
    else{
        currSongId=1;
    }
    songId=currSongId;
    audio.src=`./assets/song${songId}.mp3`;
    audio.currentTime=0;
    audio.play();
    playBtn.children[0].classList.remove('fa-circle-play');
    playBtn.children[0].classList.add('fa-circle-pause');
})


//backward button se peeche wala gaana chl jaye
bwdbtn.addEventListener('click',function(){
    // console.log(currSongId);
    if(currSongId>=2){
        currSongId--;
    }
    else{
        currSongId=songs.length;
    }
    songId=currSongId;
    audio.src=`./assets/song${songId}.mp3`;
    audio.currentTime=0;
    audio.play();
    playBtn.children[0].classList.remove('fa-circle-play');
    playBtn.children[0].classList.add('fa-circle-pause');
})
