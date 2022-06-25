console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

const rnd = Math.floor(Math.random() * 100)

const printNumber = function(str){
    const list = document.getElementById("guess_list")
    const value = document.createElement("p")
    value.innerHTML = str

    list.appendChild(value)
}
const guess = function(e) {
    
    const guessed = parseInt(document.getElementById("guess").value)

    if (guessed === rnd) {
        printNumber(`${guessed} was the number`)
    } else if ( guessed <= rnd) {
        alert("too low")
        printNumber(guessed)
    } else if (guessed >= rnd) {
        printNumber(guessed)
        alert ("too high")
    }




    // console.log(rnd)
    // console.log(typeof guessed)
}