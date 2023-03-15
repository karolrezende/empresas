async function resquestAdmUser(){
    const token = sessionStorage.getItem('id')
    const options = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}` 
        } 
    }
    const response = await fetch('http://localhost:6278/users', options)
    const responseJSON = await response.json()
   apiRender(responseJSON)  
}resquestAdmUser()
//NA PAGINA DO ADM RENDERIZA O MENU DE DEPARTAMENTOS 
const companiesList = await fetch('http://localhost:6278/companies').then(res => res.json() ).catch(error => console.log(error))
const box = document.querySelector('.box')

async function createComponentsAdm(){
    companiesList.forEach(element =>{
            box.innerHTML += `
                <div class="box-solo bg-[#FFFFFF] w-full mt-5 rounded">
                    <div class="m-5">
                        <h1 class="font-bold">${element.sectors.description}</h1>
                        <p>${element.description}</p>
                        <p>${element.name}</p>
                        <div class="flex justify-center gap-5">
                            <img src="../assets/img/eye.svg" class='depart-view cursor-pointer' onclick='viewModal("${element.uuid}")' alt="Visualizar">
                            <img src="../assets/img/black-pen.svg" class='depart-edit cursor-pointer'onclick='showModal("${1}")' alt="Editar">
                            <img src="../assets/img/trash.svg" class='depart-remove cursor-pointer' onclick='showModal("${2}"), showDepartment("${element.uuid}", ${JSON.stringify(element)})' alt="Excluir">
                        </div>
                    </div>
                </div>
                ` 
    })
}createComponentsAdm()



//NA PAGINA DO ADM RENDERIZA O MENU COM OS USUARIOS CADASTRADOS
function apiRender(list){
    const box = document.querySelector('.box-user')
    list.forEach(element=>{
        box.innerHTML += `
        <div class="box-solo bg-[#FFFFFF] mt-5 rounded">
            <div class="m-5">
                <h1 class="font-bold">${element.username}</h1>
                <p>${element.kind_of_work}</p>
                <p>${element.professional_level}</p>
                <div class="flex justify-center gap-5">
                    <img src="../assets/img/black-pen.svg"  onclick='showModal(${3}, editUser("${element.username}", ${JSON.stringify(element)}))' class='user-edit cursor-pointer' alt="Editar">
                    <img src="../assets/img/trash.svg" onclick='showModal(${4}), deleteAdmUser("${element.username}", ${JSON.stringify(element)})' class='user-remove cursor-pointer' alt="Excluir">
                </div>
            </div>
        </div>
        `
        
    })
}