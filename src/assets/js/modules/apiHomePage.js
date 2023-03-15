const companiesList = await fetch('http://localhost:6278/companies').then(res => res.json() ).catch(error => console.log(error))
const section = document.querySelector('.section-list')
function createComponentsApi(){
    companiesList.forEach(element => {
        section.innerHTML += `
        <div class="card flex flex-col justify-between">
            <div class="m-4">
                <h1 class="text-xl font-medium">${element.name}</h1>
            </div>
            <div class="m-4">
                <p class="mb-4">${element.opening_hours}</p>
                <button class="button-purple">${element.sectors.description}</button>
            </div>
        </div>`
    });
}
createComponentsApi()

