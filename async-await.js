const Users = [
  {
    id: 1,
    age: 17,
    name: "Marcos",
    email: "Marcos126@gmail.com",
    hobbies: ["Jogar Bola", "Pular Cordar", "Comer"],
    Pedidos: ["Bolacha", "Água", "Tapete"],
  },
  {
    id: 2,
    age: 28,
    name: "Clara",
    email: "Clara203@gmail.com",
    hobbies: ["Desenhar", "Ver Filmes", "Estudar JS"],
    Pedidos: ["Teclado", "Pipoca", "Placa mãe"],
  },
  {
    id: 3,
    age: 18,
    name: "Lucas",
    email: "Lucashd@gmail.com",
    hobbies: ["Dormir", "Coxinhar", "Pular Corda"],
    Pedidos: ["Livro", "Toalha"],
  },
];

const Pedidos = [
  { userId: 1, produto: "Teclado", valor: 120 },
  { userId: 1, produto: "Mouse", valor: 80 },

  { userId: 2, produto: "Fone", valor: 150 },
  { userId: 2, produto: "Suporte Notebook", valor: 100 },

  // { userId: 3, produto: "Monitor", valor: 900 },
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
    if (!user.hobbies || user.hobbies.length === 0) {
      reject("Error usuário não possui hobbies");
    } else {
      resolve(user.hobbies);
    }
  });
}

function VerificaIdade(age) {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject("Error, MENOR DE IDADE ");
    } else {
      resolve("Acesso liberado");
    }
  });
}

function BuscarPedidos(user) {
  return new Promise((resolve, reject) => {
    if (!user.Pedidos || user.pedidos.length === 0) {
      reject("Error usuário não possui pedidos");
    } else {
      resolve(user.Pedidos);
    }
  });
}

function BuscarPedidos2(UserId) {
  return new Promise((resolve, reject) => {
    const PedidosUser = Pedidos.filter((p) => UserId === p.userId);

    if (!PedidosUser) {
      reject("Error usuário não possui pedidos");
    } else {
      resolve(PedidosUser);
    }
  });
}

async function CalcularPedidos(pedidos) {
  return new Promise((resolve, reject) => {
    if (!pedidos || pedidos.length === 0) {
      reject("Nenhum pedido encontrado");
      return;
    }

    const ValorPedidos = pedidos.reduce((acc, p) => acc + p.valor, 0);
    resolve(ValorPedidos);
  });
}

async function fluxo() {
  try {
    const user = await LoginUser(1);
    const hobbies = await GetHobbies(user);

    console.log("Hobbies: ");
    for (const h of hobbies) {
      console.log(h);
    }
  } catch (error) {
    console.log(error);
  }
}

fluxo();

async function fluxo2() {
  try {
    const user = await LoginUser(1);
    const age = await VerificaIdade(user.age);
    console.log(age);
  } catch (error) {
    console.log(error);
  }
}

fluxo2();

async function fluxo3() {
  try {
    const user = await LoginUser(3);
    const pedidos = await BuscarPedidos(user);

    console.log("PEDIDOS: ");
    console.log(pedidos);
  } catch (error) {
    console.log(error);
  }
}

fluxo3();

//FLUXO COMPLETO
async function fluxo4() {
  try {
    const user = await LoginUser(3);
    console.log(`LOGADO: ${user.name} - ${user.email}`);

    const hobbies = await GetHobbies(user);
    console.log("HOBBIES: ", hobbies.length);

    const Pedidos = await BuscarPedidos2(user.id);
    console.log("PEDIDOS: ", Pedidos.length);

    const CalcularValorPedidos = await CalcularPedidos(Pedidos);
    console.log("TOTAL GASTO: ", CalcularValorPedidos);

    console.log("Fluxo finalizado com sucesso");
  } catch (error) {
    console.log(error);
  }
}

fluxo4();
