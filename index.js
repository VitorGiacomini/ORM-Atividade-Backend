class ORM {
    criar() {
      throw new Error("Método 'criar' deve ser implementado.");
    }
  
    editar() {
      throw new Error("Método 'editar' deve ser implementado.");
    }
  
    excluir() {
      throw new Error("Método 'excluir' deve ser implementado.");
    }
  
    listar() {
      throw new Error("Método 'listar' deve ser implementado.");
    }
  
    atualizar() {
      throw new Error("Método 'atualizar' deve ser implementado.");
    }
  }
  
  class Pessoa extends ORM {
    static pessoas = [];
    static idCounter = 1;
  
    static criar(nome, idade, cidade) {
      const novaPessoa = { id: this.idCounter++, nome, idade, cidade };
      this.pessoas.push(novaPessoa);
    }
  
    static editar(id, novoObjeto) {
      const pessoa = this.pessoas.find(pessoa => pessoa.id === id);
      if (pessoa) {
        pessoa.nome = novoObjeto.nome;
        pessoa.idade = novoObjeto.idade;
        pessoa.cidade = novoObjeto.cidade;
      } else {
        throw new Error(`Pessoa com id ${id} não encontrada.`);
      }
    }
  
    static excluir(id) {
      const index = this.pessoas.findIndex(pessoa => pessoa.id === id);
      if (index !== -1) {
        this.pessoas.splice(index, 1);
      } else {
        throw new Error(`Pessoa com id ${id} não encontrada.`);
      }
    }
  
    static listar() {
      return this.pessoas;
    }
  
    static atualizar(id, novoNome, novaIdade, novaCidade) {
      const pessoa = this.pessoas.find(pessoa => pessoa.id === id);
      if (pessoa) {
        pessoa.nome = novoNome;
        pessoa.idade = novaIdade;
        pessoa.cidade = novaCidade;
      } else {
        throw new Error(`Pessoa com id ${id} não encontrada.`);
      }
    }
  }
  
  class Animal extends ORM {
    static animais = [];
    static idCounter = 1;
  
    static criar(nome, som, tipo) {
      const novoAnimal = { id: this.idCounter++, nome, som, tipo };
      this.animais.push(novoAnimal);
    }
  
    static editar(id, novoObjeto) {
      const animal = this.animais.find(animal => animal.id === id);
      if (animal) {
        animal.nome = novoObjeto.nome;
        animal.som = novoObjeto.som;
        animal.tipo = novoObjeto.tipo;
      } else {
        throw new Error(`O animal com o id ${id} não encontrado.`);
      }
    }
  
    static excluir(id) {
      const index = this.animais.findIndex(animal => animal.id === id);
      if (index !== -1) {
        this.animais.splice(index, 1);
      } else {
        throw new Error(`O animal com o id ${id} não encontrado.`);
      }
    }
  
    static listar() {
      return this.animais;
    }
  
    static atualizar(id, novoNome, novoSom, novoTipo) {
      const animal = this.animais.find(animal => animal.id === id);
      if (animal) {
        animal.nome = novoNome;
        animal.som = novoSom;
        animal.tipo = novoTipo
      } else {
        throw new Error(`O animal com o id ${id} não encontrado.`);
      }
    }
  }
  
  // Adicionar 
  Animal.criar("Rex", "Au Au", "Cachorro");
  Animal.criar("Max", "Au", "Cachorro");
  Animal.criar("Princesa", "Miau", "Gato")
  
  Pessoa.criar("Vitor Giacomini", 23, "Primavera");
  Pessoa.criar("Gabriel Inácio", 18, "Primavera");
  Pessoa.criar("Caio Augusto", 20, "Nova Andradina")
  // Listar 
  const pessoas = Pessoa.listar();
  console.table(pessoas);
  const animais = Animal.listar();
  console.table(animais);
  
  /// Editar
  //Pessoa.editar(1, { nome: "Vitor", idade: 24, cidade: "Outra Cidade" });
  //Animal.editar(2, { nome: "Maximus", som: "Grrr" });
  
  // Excluir
  //Pessoa.excluir(2);
  //Animal.excluir(1);
  
  // Listar após edição e exclusão
  //const pessoasAtualizadas = Pessoa.listar();
  //console.log(pessoasAtualizadas);
  //const animaisAtualizados = Animal.listar();
  //console.table(animaisAtualizados);
  
  // Atualizar
  //Pessoa.atualizar(1, "Vitor", 25, "Outra Cidade");
  //Animal.atualizar(2, "Maximus", "Woof");
  
  // Listar após atualização
  //const pessoasAtualizadasNovamente = Pessoa.listar();
 // console.log(pessoasAtualizadasNovamente);
  //const animaisAtualizadosNovamente = Animal.listar();
  //console.table(animaisAtualizadosNovamente);
  