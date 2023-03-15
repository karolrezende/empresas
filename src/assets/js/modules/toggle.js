 /// FAZ REFERENCIA A ABERTUDA DE TODOS OS MODAIS POSSIVEIS, ABRINDO E FECHANDO
function showModal(id){
    const modal = document.querySelectorAll('.modal-bkg')
    for(let i =0; i<= modal.length;i++){
        
        if(parseInt(id) === i){
            modal[i].classList.toggle('off')
            break
        }
    }
}
//MODAL DE EDIT NA AREA DO USUARIO DESEMPREGADO 
async function viewModal(id){  
    
    const departName = document.querySelector('.depart-name')
    const departDesc = document.querySelector('.depart-desc') 
    const departComp = document.querySelector('.depart-comp')
    const companiesList = await fetch('http://localhost:6278/companies').then(res => res.json() ).catch(error => console.log(error))
    companiesList.forEach(element => {
        if(element.uuid == id){
            showModal(0)
            departName.textContent = element.name
            departDesc.textContent = element.description 
            departComp.textContent = element.sectors.description
        }
    });
} 
//renderiza as informacoes da companhia no modal
async function showDepartment(id,  list){
    const department = document.querySelector('#department-title-show')
    console.log(id, list)
    console.log(department)
    //department.innerHTML = list.name
    // companiesList.forEach(element => {
    //     console.log(element)
    //     console.log(element.uuid, id )
    //     if(element.uuid == id){

    //         //department.textContent = `Realmente deseja deletar o Departamento ${element.name} e demitir seus funcionários?`
    //         //const buttonDelete = document.querySelector('.remove-company')
    //         //sessionStorage.setItem('idCompany',id)
    //     }
    // });
}
//faz a remocao da companhia ao clicar no botao confirmar do modal
async function removeCompany(){
    const idCompany = sessionStorage.getItem('idCompany')
    const admId = sessionStorage.getItem('id')
    console.log(idCompany)

    const api={
        method: 'DELETE',
        headers:{
            'Content-Type': "application/json",
            "Authorization": `Bearer ${admId}`
        }
    }
    const apiRequest = await fetch(`http://localhost:6278/departments/${idCompany}`, api)

    console.log(apiRequest)
}

//POST DE EDIÇÃO DO MODAL DESEMPREGADO NO USERPAGEX

async function editUser(){
    const token = sessionStorage.getItem('id')
    
    const username = document.getElementById('name-edit').value
    const email = document.getElementById('email-edit').value
    const password = document.getElementById('password-edit').value

    const user={
        username: username,
        password: password,
        email: email
    }

    const api={
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    }
    const getApi = await fetch('http://localhost:6278/users', api)
    renderUserX()
}