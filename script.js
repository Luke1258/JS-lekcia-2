// Random number
const number = Math.random()

document.body.innerHTML += number + '<br>'

// Prevod meny
const wageInEur = 20
const rate = 24.55
let wageInCzk = Math.round(wageInEur * rate)

document.body.innerHTML += '<h1>' + wageInCzk + '</h1>' + '<br>'

// Ultramaraton
start = 15
length = 10
end = (start + length) % 24

document.body.innerHTML += end