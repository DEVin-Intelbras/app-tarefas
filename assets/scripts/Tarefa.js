export class Tarefa {
  id;
  #titulo;
  estaFeita;
  dataCriacao;
  #descricao;
  listaResponsaveis;

  constructor(tituloObjeto, descrObjeto = "Sem descrição") {
    this.listaResponsaveis = [];
    this.#titulo = this.#validaTexto(tituloObjeto);
    this.#descricao = descrObjeto;
    this.dataCriacao = new Date();
    this.estaFeita = false;
    this.id = this.#geraId();
  }

  definirTitulo(titulo) {
    this.#titulo = titulo;
  }

  #geraId() {
    return Math.floor(Math.random() * 10000);
  }

  #validaTexto(texto) {
    this.listaResponsaveis.push();
    if (texto) {
      return texto;
    } else {
      return "Valor não informado";
    }
  }

  get titulo() {
    if (this.#titulo) {
      return this.#titulo;
    } else {
      return "Você não definiu um título";
    }
  }

  set titulo(valor) {
    if (valor.length < 3) {
      this.#titulo = "Um título insignificante";
    } else {
      this.#titulo = valor;
    }
  }

  get descricao() {
    return this.#descricao;
  }
}
