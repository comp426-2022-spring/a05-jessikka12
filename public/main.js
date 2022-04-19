// Focus div based on nav button click
const home = document.getElementById('homenav')
home.addEventListener('click', hideDivs)
function hideDivs() {
    document.getElementById('single').setAttribute('class', 'hidden')
    document.getElementById('multi').setAttribute('class', 'hidden')
    document.getElementById('guess').setAttribute('class', 'hidden')
}

// Flip one coin and show coin image to match result when button clicked
const single = document.getElementById('singlenav')
single.addEventListener('click', flipCoin)
async function flipCoin(event) {
    event.preventDefault()

    const url = document.baseURI + 'app/flip/'
    const flip = await fetch(url).then(function(response) {
        return response.json()
    })

    console.log(flip)
    document.getElementById('result').innerHTML = flip.flip
    document.getElementById('coin').setAttribute('src', 'assets/img/' + flip.flip + '.png')
    document.getElementById('single').setAttribute('class', 'active')
}

// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series
const multi = document.getElementById('multinav')
multi.addEventListener('click', getNumber)
function getNumber() {
    document.getElementById('multi').setAttribute('class', 'active')
}

const coinsForm = document.getElementById('coins')
coinsForm.addEventListener('submit', flipCoins)

async function flipCoins(event) {
    event.preventDefault()
    const endpoint = 'app/flip/coins/'
    const url = document.baseURI + endpoint

    try {
        const formData = new FormData(event.currentTarget)
        const dormDataJson = JSON.stringify(Object.fromEntries(formData))
        const options = {
            method: "POST",
            headers: {"Content-Type": 'application/json', Accpet: 'application/json'},
            body: formDataJson
        }

        const flips = await fetch(url, options).json()
        
        console.log(flips)
        document.getElementById()
    } catch (error) {
        console.log(error)
    }
}

// Guess a flip by clicking either heads or tails button
