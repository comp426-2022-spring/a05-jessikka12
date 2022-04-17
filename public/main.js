// Focus div based on nav button click

// Flip one coin and show coin image to match result when button clicked
const single = document.getElementById('singlenav')

single.addEventListener('click', flipCoin)

async function flipCoin(event) {
    const url = 'http://localhost:5000/app/flip/'
    fetch(url, {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(result) {
        console.log(result)
        document.getElementById('result').innerHTML = result.flip
        document.getElementById('single').setAttribute('class', 'active')
    })
}

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
