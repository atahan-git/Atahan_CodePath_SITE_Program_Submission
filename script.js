// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const buttonCount = 5;

//Global Variables
var pattern = [];
var patternLength = 8;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var speedMultiplier = 1.0;
var speedIncreaseAmount = 0.5;
var mistakeCount = 0;


function changeDiff (count){
  patternLength += count;
  
  // Minimum length
  if(patternLength < 2){
    patternLength = 2;
  }
  
  document.getElementById("difficulty").innerHTML = patternLength;
  
  // Make sure the player does not change difficulty mid game!
  stopGame();
}

function generatePattern(){
  pattern = [];
  for (var i = 0; i < patternLength; i++){
    pattern.push(Math.floor(Math.random() * buttonCount) + 1);
  }
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakeCount = 0;
  document.getElementById("mistakes").innerHTML = mistakeCount;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  
  generatePattern();
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime/speedMultiplier);
    setTimeout(clearButton,clueHoldTime/speedMultiplier,btn);
  }
}

function playClueSequence(){
  document.getElementById("progress").innerHTML = progress+1;
  
  speedMultiplier = 1 + progress*speedIncreaseAmount;
  gamePlaying = false; // Lock the game state so the player cannot register presses
  guessCounter = 0;
  let delay = nextClueWaitTime/speedMultiplier; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime/speedMultiplier;
    delay += cluePauseTime/speedMultiplier;
  }
  gamePlaying = true; // Unlock  
}



function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if (btn == pattern[guessCounter]){ // If we guessed correctly
    guessCounter += 1;
    
    // If we guessed until the current progress, get to the next stage
    if(guessCounter-1 == progress){
      progress += 1;
      
      if(progress == pattern.length){ // If we reached the end, win the game
        winGame();
        
      }else{ // If we have not reached the end yet, display the next set of clues
        playClueSequence();
        
      }
    }
  } else{ // If we haven't guessed correctly
    
    mistakeCount += 1;
    document.getElementById("mistakes").innerHTML = mistakeCount;
    
    if( mistakeCount >= 3){
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 300,
  2: 400,
  3: 500,
  4: 600,
  5: 700
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)