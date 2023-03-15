async function logUser(){
    const username = document.querySelector('#email-login').value
    const password = document.querySelector('#password-login').value
    
    const userLogin ={
        email: username,
        password: password
    }
    const postUserLogin = {
        method: "POST",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify(userLogin)
    }
    const requestLogin = await fetch('http://localhost:6278/auth/login', postUserLogin)
    const requestLoginJSON = await requestLogin.json()

    if(requestLogin.status!==200){
        const inputEmail = document.querySelector('.input-email')
        const inputPassword= document.querySelector('.input-password')
        const invalid = document.querySelector('.invalid')
        inputPassword.classList.add('input-invalid')
        inputEmail.classList.add('input-invalid')
        invalid.textContent = "Email ou senha incorretos!"
    }else{
        sessionStorage.setItem('id',requestLoginJSON.token)
        testPage(requestLoginJSON.token)
    }
}

async function testPage(id){
    const getUser={
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${id}`
        }
    }
    const getApi = await fetch('http://localhost:6278/users/profile', getUser).then(
        res=> res.json()
    )
    if(getApi.error){
        loginAdmApi()
    }else
    if(getApi.department_uuid === null){
        window.location = '../pages/userpageX.html'
    }
    else{
        window.location = '../pages/userpageY.html'
    }
}
async function loginAdmApi() {
    const data = {
        email: "admin@mail.com",
        password: "admin"
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    
    const responseJSON = await fetch('http://localhost:6278/auth/login', options) 
    const response = await responseJSON.json()
    window.location = '../pages/admPage.html'
}