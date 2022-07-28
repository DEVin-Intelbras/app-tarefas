import { Tarefa } from "./Tarefa";

const tarefaOldSchool = new Tarefa();
tarefaOldSchool.definirTitulo("Ser um DEV mais feliz");
tarefaOldSchool.#descricao = "Parar de criar objetos assim";
tarefaOldSchool.dataCriacao = new Date(); // data do momento que o script executar
tarefaOldSchool.estaFeita = true;

// ********************************************************** //
// ***************** PROJETO LISTA DE TAREFAS! ************** //
// ********************************************************** //

const listaTarefas = [];

const ulTarefas = document.getElementById("lista");

function renderizar() {
  ulTarefas.innerHTML = null; // limpa a lista anterior
  listaTarefas.forEach((tarefa) => {
    const itemLista = document.createElement("li"); // cria o elemento
    itemLista.innerHTML = /*html*/ `
      <h2>${tarefa.titulo}</h2>
      <span>${tarefa.descricao}</span> - <span>${tarefa.dataCriacao}</span>
    `;
    ulTarefas.appendChild(itemLista); // adiciona o elemento na lista
  });
}

renderizar();

const tituloEl = document.getElementById("titulo");
const descricaoEl = document.getElementById("descricao");
const botaoEl = document.querySelector("input[type='button']");

botaoEl.addEventListener("click", () => {
  const tarefa = new Tarefa(tituloEl.value, descricaoEl.value);
  listaTarefas.push(tarefa);
  renderizar();
});
