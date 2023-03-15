async function renderUserX(){

    const id = (sessionStorage.getItem('id'))
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
    
    const user = document.getElementById('name')
    const email = document.querySelector('.email-renderx')
    const nivel = document.querySelector('.nivel-renderx')
    const modalidade = document.querySelector('.modalidade-renderx')

    user.textContent = getApi.username
    email.textContent = getApi.email
    nivel.textContent = getApi.professional_level
    
    if(getApi.kind_of_work === undefined){
        modalidade.textContent = ''
    }else{
        modalidade.textContent = getApi.kind_of_work
    }

}renderUserX()

function renderUserY(){
    console.log('full')
}
