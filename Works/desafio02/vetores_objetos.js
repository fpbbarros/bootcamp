const programador = {
  nome: 'Carlos',
  idade: 32,
  especialidade: 'Desktop',
  techs: [
    {
      nome: ['C++', 'JAVA']

    }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.techs[0].nome[0]} com especialidade em ${programador.especialidade}`)