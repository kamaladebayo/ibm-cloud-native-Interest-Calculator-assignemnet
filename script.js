// SET rate range value
document.getElementById("rate").addEventListener('change', (e) => {
    document.getElementById("interestValue").textContent = document.getElementById("rate").value
})



document.getElementById('interest-form').addEventListener('submit', (e) => {
    // declare variables
    let result = document.getElementById("result")
    let principal = document.getElementById("principal").value
    let rate = document.getElementById("rate").value
    let years = parseInt(document.getElementById("years").value)
    let amount = principal * (1 + ((rate/100) * years)).toFixed(2)

    e.preventDefault()
    if(!principal){
        return;
    }else if(principal < 0){
        result.innerHTML = `Input can't be negative`
    }else{
        // set result
        result.innerHTML = `If you deposit <mark>${principal}</mark>, <br /> at an interest rate of <mark>${rate}</mark>.<br /> You will receive an amount of <mark>${(amount - principal).toFixed(2)}</mark> <br /> in the year <mark>${2022 + years}</mark>`
    }

    
})