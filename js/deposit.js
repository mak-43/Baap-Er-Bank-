document.getElementById('btn-deposit').addEventListener('click', function () {
    const deposit = document.getElementById('deposit-input').value
    const deposittotal = document.getElementById('deposit').innerText
    if (deposit > 0) {
        const sum = parseFloat(deposit) + parseFloat(deposittotal)
        document.getElementById('deposit').innerText = sum
        document.getElementById('deposit-input').value = ' '
    }
    else{
        alert('Cant be 0 or negative')
    }

    console.log(deposit, deposittotal)
})