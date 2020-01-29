const users = [

  {
    name: 'Carlos',
    techs: ['HTML', 'CSS']
  },

  {
    name: 'Jasmine',
    techs: ['JavaScript', 'CSS']
  },

  {
    name: 'Tuane',
    techs: ['HTML', 'Node.js']
  }

]

imprime(users);

function imprime(users) {

  function getTechs(user) {

    for (let i = 0; i < user.techs.length; i++) {
      return user.techs;
    }
  }

  for (let i = 0; i < users.length; i++) {

    console.log(`${users[i].name} trabalha com ${getTechs(users[i])}`);
  }

}
