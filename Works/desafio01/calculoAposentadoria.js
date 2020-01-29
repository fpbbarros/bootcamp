const nome = 'Railda';
const sexo = 'F';
const idade = 58;
const contribuição = 22

aposentadoria(nome, sexo, idade, contribuição);


function aposentadoria(nome, sexo, idade, contribuição) {


  if (idade < contribuição) {
    return console.log('A idade precisa ser maior que o tempo de contribuição');
  }


  if (sexo == 'M') {
    if (contribuição >= 35 && (idade + contribuição) >= 95) {
      return console.log(`${nome}, você pode se aposentar!`)
    }

    else {
      return console.log(`${nome}, você ainda não pode se aposentar!`)
    }
  }

  else {

    if (contribuição >= 30 && (idade + contribuição) >= 85) {
      return console.log(`${nome}, você pode se aposentar!`)
    }

    else {
      return console.log(`${nome}, você ainda não pode se aposentar!`)
    }
  }


}



