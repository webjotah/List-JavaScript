const input = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('.list-container');


//add com a tecla enter
input.addEventListener('keyup', keyboardAdd);
function keyboardAdd(e){
    if(e.key === 'Enter'){
        if(div.childElementCount == 0){
            div.innerHTML = '<ul class="first"><li>' + input.value + '</li><button onclick="remove()">Remove</button></ul>'
            input.value = '';
        } else {
            div.innerHTML += '<ul><li>' + input.value + '</li><button onclick="remove()">Remove</button></ul>'
            input.value = '';
        }
    }
}

//add com o botao
function add(){
    if(div.childElementCount == 0){
        div.innerHTML = '<ul class="first"><li>' + input.value + '</li><button onclick="remove()">Remove</button></ul>'
        input.value = '';
    } else {
        div.innerHTML += '<ul><li>' + input.value + '</li><button onclick="remove()">Remove</button></ul>'
        input.value = '';
    }
}

//remover
function remove(){
    div.removeChild(div.lastElementChild);
}