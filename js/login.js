document.getElementById('btn-submit').addEventListener('click',function(){
    //get the email address 
    const emailField=document.getElementById('user-email').value 
    const passField=document.getElementById('user-password').value
    
    if(emailField==='sontan@baap.com' && passField ==='secret'){
        window.location.href='bank.html'
    }
    else{
        alert('Password vull dichos ')
    }

    console.log(emailField,passField)
})