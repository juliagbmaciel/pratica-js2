import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

function geradorDeCpf(){
    const gera = new GeraCPF()
    const cpfgerado = document.querySelector('.cpf-gerado')
    cpfgerado.innerHTML = gera.geraNovoCpf();
}

const button = document.querySelector('.botao')

button.addEventListener('click', ()=>{
    const div = document.querySelector('.cpf-gerado')
    div.style.display = 'block'
    geradorDeCpf()
})
