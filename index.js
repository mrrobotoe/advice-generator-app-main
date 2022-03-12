const dice = document.querySelector("#circle");
const adviceID = document.querySelector("#adviceID")
const adviceText = document.querySelector("#adviceText");
const data = './data.json'


dice.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            adviceID.innerHTML = `Advice #${data.slip.id}`
            adviceText.innerHTML = `"${data.slip.advice}"`
        })
    .catch(err => {
        adviceID.innerHTML = "000"
        adviceText.innerHTML = "Hmm...something went wrong. Try again"
    })
})