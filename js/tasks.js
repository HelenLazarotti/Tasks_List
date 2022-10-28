//pego os valores ds itens de entraa, no meu input, botão...:
let input = document.querySelector(".input");
let btn = document.querySelector(".btn-add");
let main = document.querySelector(".my-tasks");

//preciso criar um contator, pra dar ID as minhas tarefas (um índice), conforme elas forem sendo criadas, pra na hora de excluir, não dar erro:
let counter = 0;


//crio função do meu botão, pra quando eu clicar, ele add item na lista:
function addTask() {

    //pego valor digitado do input:
    let task = input.value;

    //validar se não for: NULO, INDEFINIDO. VAZIO:
    if ((task !== "") && (task !== null) && (task !== undefined)) {
        //chamo o contador aqui, pra ele add mais 1 ID, pra próxima tarefa:
        ++counter;

        //crio uma var pra colocar o meu html que eu quero:

        //${taks}, pra ele pegar o valor do input e escrever ali

        //${counter} pra ele inserir IDs

        //onclick= "delete(${counter})" pra saber QUAL tarefa escluir

        //onclick="markTask(${counter})" tbm dou ID, pra saber QUAL tarefa riscar, coloquei no ícone e nome, seja qual for que ela clicar RISCA

        //<i> id="icon_${counter}" pra dar caracteristica ao icone e por ID

        let newItem = `<div id="${counter}" class="item">
        <div onclick="markTask(${counter})" class="item-icon">
            <i id="icon_${counter}" class="fa-regular fa-circle"></i>
        </div>
        <div onclick="markTask(${counter})" class="item-name">${task}</div>
        <div class="item-button">
            <button class="delete" onclick="deleteItem(${counter})">
                <i class="fa-solid fa-delete-left"></i>
            </button>
        </div>

    </div>`;

        //agora injeto o item na div "my-tasks", pra aparecer oq o usuário escreveu...:
        main.innerHTML += newItem

        //quando add um item, limpar campo input:
        input.value = "";

        //método focus deixa o input sempre ativo (piscando pra digitar)...
        input.focus()
    }
}
//função pra marcar tarefa como concluída:
function markTask(id) {
    var item = document.getElementById(id);

    //crio var pra pegar o atributo da minha classe:
    var classes = item.getAttribute('class');

    //SE minha classe for igual a item, add classe clicado > para acionar meu css e fazer o risco na tarefa:
    if (classes == "item") {

        //add a classe clicked pra estilizar oq fiz no CSS
        item.classList.add('clicked')

        //pego o id do meu icone para alterar quando eu clicar:
        var icon = document.getElementById("icon_" + id);
        icon.classList.remove("fa-circle")
        icon.classList.add("fa-circle-check")

        //coloco um filho pra ele JOGAR o que marquei como concluido pro FIM da lista:
        item.parentNode.appendChild(item);

        //agora inverto, pra que quando a pessoa clicar sobre o riscado volte ao normal:
    } else {
        item.classList.remove('clicked')

        //pego o id do meu icone para alterar quando eu clicar:
        var icon = document.getElementById("icon_" + id);
        icon.classList.remove("fa-circle-check")
        icon.classList.add("fa-circle")

    }
}

//função DELETAR(o id é o que vem do meu contador)
function deleteItem(id) {

    //crio var e peço pra pegar meu ID que vem do CONTADOR:
    var task = document.getElementById(id);
    task.remove();
}

//ao invés de clicar com mouse no botão, pressionar tecla "Enter":

/*pego o input e digo para adicionar um evento ("quando usuário clica em algum botão do teclado", ativo uma função(passo um evento){*/
input.addEventListener("keyup", function (event) {

    /*SE (evento.tiver o código de teclado 13 > indica "Enter"*/
    if (event.keyCode === 13) {

        //coloco pra não dar problem:
        event.preventDefault;

        /*pego o meu botão, e digo que quando clicar aciona o evento criado.*/
        btn.click();
    }
})
