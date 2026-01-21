function MaiorIdade(idade) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (idade < 18) {
        reject("Menor de Idade");
      } else {
        resolve("Maior de Idade");
      }
    }, 1000);
  });
}

MaiorIdade(16)
  .then((resultado) => {
    console.log("Resultado", resultado);
  })
  .catch((error) => {
    console.log("Error", error);
  });

const Users = [
  {
    id: 1,
    name: "Marcos",
    email: "Marcos126@gmail.com",
    hobbies: ["Jogar Bola", "Pular Cordar", "Comer"],
  },
  {
    id: 2,
    name: "Clara",
    email: "Clara203@gmail.com",
    hobbies: ["Desenhar", "Ver Filmes", "Estudar JS"],
  },
  {
    id: 3,
    name: "Lucas",
    email: "Lucashd@gmail.com",
    hobbies: ["Dormir", "Coxinhar", "Pular Corda"],
  },
];

function LoginUser(id) {
  return new Promise((resolve, reject) => {
    const GetUser = Users.find((u) => id === u.id);

    if (!GetUser) {
      reject("ERROR!");
    } else {
      resolve(GetUser);
    }
  });
}

function GetHobbies(user) {
  return new Promise((resolve, reject) => {
    if (!user.hobbies) {
      reject("ERROR ao acessae hobbies do user");
    } else {
      resolve(user.hobbies);
    }
  });
}

LoginUser(2)
  .then((resultado) => {
    console.log("Logado");
    return resultado;
  })
  .then(GetHobbies)
  .then((hobbies) => {
    console.log("Hobbies: ");
    console.log(hobbies);
  })
  .catch((error) => {
    console.log(error);
  });
