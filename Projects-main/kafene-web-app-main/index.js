$(document).ready(function(){
    let form = document.getElementById('login-form');
    form.onsubmit = function(e){
        e.preventDefault();
    }
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let loginBtn = document.getElementById('login-btn');
    loginBtn.onclick = function(){
        if(username.value == password.value){
            alert('Login Successfully');
            localStorage.setItem('isLogedIn',true);
            let obj = {
                username : username.value,
                password : password.value
            }
            localStorage.setItem('userInfo',JSON.stringify(obj));
            location.assign('/orders-page.html');
        }
        else{
            alert('Please enter valid credential!');
        }
    }
})