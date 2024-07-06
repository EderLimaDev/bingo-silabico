const btnPlay = document.getElementById('btn-play');
const newGameBtn = document.querySelector('.new-game-btn');

const alphabetSyllabic = [
    'AI', 'EI', 'OI', 'UI', 'OU',
    'BA', 'BE', 'BI', 'BO', 'BU',
    'CA', 'CE', 'CI', 'CO', 'CU',
    'DA', 'DE', 'DI', 'DO', 'DU',
    'FA', 'FE', 'FI', 'FO', 'FU',
    'GA', 'GE', 'GI', 'GO', 'GU',
    'HA', 'HE', 'HI', 'HO', 'HU',
    'JA', 'JE', 'JI', 'JO', 'JU',
    'KA', 'KE', 'KI', 'KO', 'KU',
    'LA', 'LE', 'LI', 'LO', 'LU',
    'MA', 'ME', 'MI', 'MO', 'MU',
    'NA', 'NE', 'NI', 'NO', 'NU',
    'PA', 'PE', 'PI', 'PO', 'PU',
    'QA', 'QE', 'QI', 'QO', 'QU',
    'RA', 'RE', 'RI', 'RO', 'RU',
    'SA', 'SE', 'SI', 'SO', 'SU',
    'TA', 'TE', 'TI', 'TO', 'TU',
    'VA', 'VE', 'VI', 'VO', 'VU',
    'WA', 'WE', 'WI', 'WO', 'WU',
    'XA', 'XE', 'XI', 'XO', 'XU',
    'YA', 'YE', 'YI', 'YO', 'YU',
    'ZA', 'ZE', 'ZI', 'ZO', 'ZU'
];

// Array para armazenar os itens já sorteados

const valuesChosed = []


btnPlay.addEventListener("click", main)

// Função principal, recebe o valor e coloca na tela, e cria uma lista de já sorteados, remove o item sorteado!

function main() {

    let myValue = randomSyllab()

    valuesChosed.push(myValue)
    document.querySelector(".chosed-letters").innerHTML = myValue
    document.querySelector(".selected-values").innerHTML = valuesChosed  

    if(alphabetSyllabic.length > 0) {
        alphabetSyllabic.map((value, index) => {
            if(value === myValue) {
                alphabetSyllabic.splice(index, 1);
            }
        })
    } else {
        document.querySelector(".chosed-letters").innerHTML = 'Todos os Itens Sorteados!'
    }


}


// Escolher uma sílaba randomicamente

function randomSyllab() {
    const randomNumber = Math.floor(Math.random() * alphabetSyllabic.length)
    let newSyllab = ''
    alphabetSyllabic.map((letter, index) => {
        if(index === randomNumber) {
            newSyllab = letter
        }
    })
    return newSyllab
}