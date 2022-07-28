class Conta {
  numero;
  #saldo;
  #senha;
  constructor(numero) {
    this.numero = numero;
    this.#saldo = 0;
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo = this.#saldo - valor;
    }
  }

  depositar(valor) {
    this.#saldo = this.#saldo + valor;
  }

  get saldo() {
    if (this.#saldo > 0) {
      return this.#saldo;
    } else {
      return "Conta sem saldo!";
    }
  }

  set senha(aSenha) {
    if (aSenha.length >= 3 || aSenha.length <= 8) {
      this.#senha = aSenha;
    } else {
      console.log("A senha precisa ter entre 3 e 8 caracteres");
    }
  }

  get senha() {
    return this.#senha.split("").reverse().join("");
  }
}

const contaKarla = new Conta("0001");
const contaJhonatan = new Conta("0005");

contaKarla.senha = "1234";
console.log(contaKarla.senha);
contaKarla.depositar(500);

//
