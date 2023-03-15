function deleteAdmUser(name, element){
    const user = document.querySelector('.remove-user')
    if(name ===element.username){
        user.textContent = `Realmente deseja deletar o usuário ${element.username}?`
    }
}
