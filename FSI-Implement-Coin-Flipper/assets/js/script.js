// TODO: Declare any global variables we need
let count = {
    heads:  0,
    tails:  0
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#flip').addEventListener('click' , function(e) {
   
    function handleFlip(result) {
    console.log(result)
    count[result]++
/////////////////////////////
//dom stuff//
//access the image/set atttibutes//
let img = document.querySelector('img')
img.src = `assets/images/penny-${result}.jpeg`
img.alt = `${result} face of a penny`

let message = document.querySelector(`.message-container h3`)
message.textContent = 'You flipped ${result}!'
//update scorecard//
     let total = count.heads + count.tails
    //update the numbers//
    document.querySelector(`#${result}`).textContent = count[result]
    document.querySelector('#heads-percent').textContent = Math.round(count.heads/total * 100) + "%"
    document.querySelector('#tails-percent').textContent = Math.round(count.tails/total * 100) + "%"
    }
    if (Math.random() < .5 ) {

        handleFlip('heads')
    } else  {
        handleFlip('tails')
    }
})

document.querySelector('#clear').addEventListener('click' , function(e) {
    console.log('cleared the scoreboard')
    count.heads = 0 
    count.tails = 0
        
document.querySelector(`#heads`).textContent = "You Flipped Heads" 
document.querySelector(`#heads-percent`).textContent = `0%`
document.querySelector(`#tails`).textContent = "You Flipped Tails"
document.querySelector(`#tails-percent`).textContent = `0%`

document.querySelector('.message-container h3').textContent= "Let's Get Rolling"
    })
        
})