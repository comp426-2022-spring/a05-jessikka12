// Focus div based on nav button click
const home = document.getElementById('homenav')
home.addEventListener('click', hideDivs)

async function hideDivs() {
    document.getElementById('single').setAttribute('class', 'hidden')
    document.getElementById('multi').setAttribute('class', 'hidden')
    document.getElementById('guess').setAttribute('class', 'hidden')
}

// Flip one coin and show coin image to match result when button clicked
const single = document.getElementById('singlenav')
single.addEventListener('click', flipCoin)

async function flipCoin() {
    const url = 'http://localhost:5000/app/flip/'
    fetch(url, {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(result) {
        console.log(result)
        document.getElementById('result').innerHTML = result.flip
        document.getElementById('coin').setAttribute('src', 'assets/img/' + result.flip + '.png')
        document.getElementById('single').setAttribute('class', 'active')
    })
}

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series
const multi = document.getElementById('multinav')
multi.addEventListener('click', unhide)

async function unhide() {
    document.getElementById('multi').setAttribute('class', 'active')
}

// Guess a flip by clicking either heads or tails button
