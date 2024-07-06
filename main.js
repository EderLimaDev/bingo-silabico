const btn1 = document.getElementById('btn1');
const btnSave = document.querySelector('.btn-save');




const valuesChosed = []

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const vogals = ['A', 'E'] 

btn1.addEventListener("click", main)

function handleSweepstakes() {
    let newValue = ''
    newValue = randomLetter() + randomVogal()
    return newValue

}




function main() {

    let myValue = handleSweepstakes()

    let isDuplicated = valuesChosed.includes(myValue)

    if (isDuplicated) {  
          
        handleSweepstakes()
    } else {
        document.querySelector(".chosed-letters").innerHTML = myValue
        document.querySelector(".selected-values").innerHTML = valuesChosed  
        valuesChosed.push(myValue)
    }


    
    console.log(myValue, valuesChosed)

}




function randomLetter() {
    const randomNumber = Math.floor(Math.random() * alphabet.length)
    let firstLetter = ''
    alphabet.map((letter, index) => {
        if(index === randomNumber) {
            firstLetter = letter
        }
    })

    return firstLetter
}

function randomVogal() {
    const randomNumber = Math.floor(Math.random() * vogals.length)
    let secondLetter = ''
    vogals.map((letter, index) => {
        if(index === randomNumber) {
            secondLetter = letter
        }
    })

    return secondLetter

}



// function handleSweepstakes() {
//     let newValue = ''

//    newValue = randomLetter() + randomVogal()

//    document.querySelector(".chosed-letters").innerHTML = newValue

//     let isDuplicated = false

//     for(let value of valuesChosed) {
//         if(newValue === value) {
//             document.querySelector(".chosed-letters").innerHTML = 'Sortear Novamente'
//             document.querySelector(".chosed-letters").style.color = 'red'
//             isDuplicated = true;
//             break;
//         }
//     }

//     if (!isDuplicated) {  
//         document.querySelector(".chosed-letters").style.color = 'black'
//         document.querySelector(".chosed-letters").innerHTML = newValue
//         document.querySelector(".selected-values").innerHTML = valuesChosed    
//         valuesChosed.push(newValue)  
    
//     }


    

// }