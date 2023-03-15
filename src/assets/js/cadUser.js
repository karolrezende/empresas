async function cadUser(){
    const username = document.querySelector('#name')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const job = document.querySelector('#job')
    try{
        const userObj = {
            username: username.value,
            password: password.value,
            email: email.value,
            professional_level: job.value
        }
        const bodyApi = {
            method: "POST", 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        }
        const apiPost = await fetch('http://localhost:6278/auth/register', bodyApi)
        console.log(apiPost)

        if(apiPost.status === 400){
            toggleX()
        }else{
            toggle()
        }
    }
    catch{
        console.log('error')
    }

    
}

function toggle(){
    const modal = document.querySelector('.modal-bkg')
    modal.classList.remove('off')
}
function toggleX(){
    const modal = document.querySelector('.modal-bkg-x')
    modal.classList.add('animation')
}