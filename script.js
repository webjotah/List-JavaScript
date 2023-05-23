const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('.list-container');


//add com a tecla enter
input.addEventListener('keyup', keyboardAdd);
function keyboardAdd(e){
    if(e.key === 'Enter' && input.value != ''){
        let tarefa = {
            nome: input.value,
            id: gerarID(),
        }

        if(div.childElementCount == 0){
            div.innerHTML = `<ul class="first" id="${tarefa.id}"><li>${tarefa.nome}</li><button onclick="remove(${tarefa.id})">Remove</button></ul>`
            input.value = '';
        } else {
            div.innerHTML += `<ul id="${tarefa.id}"><li>${tarefa.nome}</li><button onclick="remove(${tarefa.id})">Remove</button></ul>`
            input.value = '';
        }
    }
}

//add com o botao
function add(){
    if(input.value != ''){

        let tarefa = {
            nome: input.value,
            id: gerarID(),
        }
        if(div.childElementCount == 0){
            div.innerHTML = `<ul class="first" id="${tarefa.id}"><li>${tarefa.nome}</li><button onclick="remove(${tarefa.id})">Remove</button></ul>`
            
            input.value = '';
        } else {
            div.innerHTML += `<ul id="${tarefa.id}"><li>${tarefa.nome}</li><button onclick="remove(${tarefa.id})">Remove</button></ul>`
            input.value = '';
        }
    }
}


//gerar o ID
function gerarID(){
    return Math.floor(Math.random() * 3000)
}


//remover
function remove(id) {
    const ul = document.getElementById('' + id + '');
    if(ul.className == 'first'){
        let nextUl = ul.nextElementSibling;
        if(nextUl != null){
            nextUl.setAttribute('class', 'first');
        }
    }
    console.log(ul);
    div.removeChild(ul);

}
