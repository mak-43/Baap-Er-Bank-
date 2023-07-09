document.getElementById('btn-deposit').addEventListener('click', function () {
    const deposit = document.getElementById('deposit-input').value
    const deposittotal = document.getElementById('deposit').innerText
    if (deposit > 0) {
        const sum = parseFloat(deposit) + parseFloat(deposittotal)
        document.getElementById('deposit').innerText = sum
        document.getElementById('balance').innerText= parseFloat(deposit)+parseFloat(document.getElementById('balance').innerText)
        document.getElementById('deposit-input').value = ' '
    }
    else{
        alert('Cant be 0 or negative')
    }
    console.log(deposit, deposittotal)
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdraw=document.getElementById('withdraw-input').value 
    const withdrawt=document.getElementById('withdraw').innerText
    if (withdraw > 0) {
        const sum = parseFloat(withdraw) + parseFloat(withdrawt)
        document.getElementById('withdraw').innerText = sum
        document.getElementById('balance').innerText= parseFloat(document.getElementById('balance').innerText)-parseFloat(withdraw)
        document.getElementById('withdraw-input').value = ' '
    }
    else{
        alert('Cant be 0 or negative')
    }
    console.log(withdraw, withdrawt)
})