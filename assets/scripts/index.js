// Esta classe define uma tarefa.
// A tarefa não existe no programa até que eu
// crie uma instância utilizando 'new Tarefa()'!
class Tarefa {
  titulo;
  estaFeita;
  dataCriacao;
  descricao;

  // O método constructor é um método especial das classes
  // que é executado sempre que uma instância da classe é criada
  // (ou seja, toda vez que você fizer new Tarefa()!)
  constructor(tituloObjeto, descrObjeto = "Sem descrição") {
    // o método constructor recebe como argumento os valores
    // passados no parênteses na instanciação da classe
    // Ex.: new Tarefa("Meu título", "Minha descrição")
    console.log("Tarefa criada! Valores:", tituloObjeto, descrObjeto);
    this.titulo = tituloObjeto;
    this.descricao = descrObjeto;
    this.dataCriacao = new Date();
    this.estaFeita = false;
  }
}

// ainda é possível criar instâncias de objetos da forma antiga,
// como os povos Incas faziam ...
const tarefaOldSchool = new Tarefa();
tarefaOldSchool.titulo = "Ser um DEV mais feliz";
tarefaOldSchool.descricao = "Parar de criar objetos assim";
tarefaOldSchool.dataCriacao = new Date(); // data do momento que o script executar
tarefaOldSchool.estaFeita = true;
// eu nem vou adicionar essa tarefa na listaTarefas...

// ********************************************************** //
// ***************** PROJETO LISTA DE TAREFAS! ************** //
// ********************************************************** //

// Banco de dados de tarefas
const listaTarefas = [];

// Funções de construção HTML
const ulTarefas = document.getElementById("lista");

// criei a função de renderizar para poder
// executar o algoritmo de criação de listas
// sempre que eu precisar atualziar minha tela!
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

// Este renderizar() está aqui para executar
// a primeira vez que o HTML carregar, mas
// poderia ter colocado ele lááááá no final do arquivo... tanto faz!
renderizar();

// Funções de controle do formulário

// Vamos capturar os campos do form e o botão
const tituloEl = document.getElementById("titulo");
const descricaoEl = document.getElementById("descricao");
const botaoEl = document.querySelector("input[type='button']");

// agora vamos 'ouvir' o click no botão para
// executar a adição da tarefa com base nos
// dados do form
botaoEl.addEventListener("click", () => {
  // Cria uma instância de tarefa
  // Os dados do form são passados no construtor dessa tarefa
  const tarefa = new Tarefa(tituloEl.value, descricaoEl.value);
  // adiciona a nova tarefa ao banco de dados
  listaTarefas.push(tarefa);
  // renderiza de novo a tela, já que o banco
  // de dados foi atualizado
  renderizar();
  // FIM!
});
