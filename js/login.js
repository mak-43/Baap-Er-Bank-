document.getElementById('btn-submit').addEventListener('click',function(){
    //get the email address 
    const emailField=document.getElementById('user-email').value 
    const passField=document.getElementById('user-password').value
    
    if(emailField==='sontan@baap.com' && passField ==='secret'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }

    console.log(emailField,passField)
})