// SET rate range value
document.getElementById("rate").addEventListener('change', (e) => {
    document.getElementById("interestValue").textContent = document.getElementById("rate").value
})



document.getElementById('submitBtn').addEventListener('click', (e) => {
    // declare variables
    let result = document.getElementById("result")
    let principal = document.getElementById("principal").value
    let rate = document.getElementById("rate").value
    let years = parseInt(document.getElementById("years").value)
    let amount = principal * (1 + ((rate/100) * years))

    e.preventDefault()

    // set result
    result.innerHTML = `If you deposit ${principal}, <br /> at an interest rate of ${rate}.<br /> You will receive an amount of ${amount - principal} <br /> in the year ${2022 + years}`
    
})