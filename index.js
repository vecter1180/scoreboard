// Follow the design 
// make all six buttons work
// Add a new game button
// highlight the leader
// Add more counter peroid, fouls, timer 
// change the design
let scoreHome = document.getElementById("score-home")
// let score = 0


let scoreGuest = document.getElementById("score-guest")
scoreHomeTeam = 0
scoreGuestTeam = 0


function homePlusOne() {
   scoreHomeTeam += 1
   scoreHome.textContent = scoreHomeTeam

}

function homePlusTwo() {
   scoreHomeTeam += 2
   scoreHome.textContent = scoreHomeTeam
}

function homePlusThree() {
   scoreHomeTeam  += 3
   scoreHome.textContent = scoreHomeTeam 
   
}



function guestPlusOne() {
   scoreGuestTeam += 1
   scoreGuest.textContent = scoreGuestTeam

}

function guestPlusTwo() {
   scoreGuestTeam += 2
   scoreGuest.textContent = scoreGuestTeam
}

function guestPlusThree() {
   scoreGuestTeam += 3
   scoreGuest.textContent = scoreGuestTeam 
   
}

function reset() {
    scoreHome.textContent = 0
    scoreGuestTeam.textContent = 0
    scoreHome = 0
    scoreGuest = 0

}

console.log(reset())

// homePlusThree()
// homePlusTwo()