import axios from "axios";

export function RequisicaoUsuario(nomeUsuario){
    axios.post('https://listadesejo.azurewebsites.net/api/usuario', {
        nome: nomeUsuario,
        email: emailUsuario
    }).then(response => {
        console.log(response.data)
    }).catch(error => {
        console.error('Houve um erro: ', error)
    })
}