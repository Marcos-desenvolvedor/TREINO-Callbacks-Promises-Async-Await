function saudacao(nome, callback) {
  setTimeout(() => {
    console.log("Acontecendo a function saudacao");

    if (nome === "") {
      callback("Error", null);
    } else {
      callback(null, nome);
    }
  }, 1000);
}

saudacao("Marcos", (error, Realizou) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Sucesso: ", Realizou);
  }
});

function dobraNumero(num, callback) {
  setTimeout(() => {
    if (num < 0) {
      callback("Error!");
    } else {
      callback(num * 2);
    }
  }, 1500);
}

dobraNumero(-23, (error, resultado) => {
  console.log("Acontecendo a function DobraNumero");

  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Resultado:", resultado);
  }
});

function EhParouImpar(num, callback) {
  setTimeout(() => {
    console.log("Acontecendo a function EhParouImpar");
    if (num % 2 != 0) {
      callback("Error", null);
    } else {
      callback(null, "Sucesso!");
    }
  }, 1000);
}

EhParouImpar(2, (reject, result) => {
  if (reject) {
    console.log("Error", reject);
  } else {
    console.log("Resultado", result);
  }
});

function verificaIdade(idade, callback) {
  setTimeout(() => {
    console.log("Acontecendo a function verificaIdade");
    if (idade < 18) {
      callback("Error", null);
    } else {
      callback(null, "Acesso liberado");
    }
  }, 2000);
}

verificaIdade(18, (error, Resulatdo) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Sucesso: ", Resulatdo);
  }
});

function Divisao(dividendo, divisor, callback) {
  setTimeout(() => {
    if (divisor === 0) {
      callback("Divisor nulo", null);
    } else {
      callback(null, divisor / dividendo);
    }
  }, 1000);
}

Divisao(2, 6, (error, resultado) => {
  if (error) {
    console.log("Error: ", error);
  } else {
    console.log("Sucesso: ", resultado);
  }
});

function BuscarUsuario(callback) {
  setTimeout(() => {
    console.log("Usuário encontrado");
    callback(1); // id usuário
  }, 2000);
}

function BuscarPedidos(idUser, callback) {
  setTimeout(() => {
    console.log("Pedidos do usuário");
    callback(["Pedido1", "Pedido2"]);
  }, 2500);
}

function FinalizarPedido(Pedidos, callback) {
  setTimeout(() => {
    console.log("Pedido Finalizado", Pedidos);
    callback("Finalizado com sucesso");
  }, 3000);
}

BuscarUsuario((idUsuario) => {
  BuscarPedidos(idUsuario, (pedidos) => {
    FinalizarPedido(pedidos, (mensagem) => {
      console.log(mensagem);
    });
  });
});

function BuscarUsuario2(callback) {
  setTimeout(() => {
    console.log("Usuário encontrado");

    callback(1, null);
  }, 4000);
}

function EncontrarPerfil(id, callback) {
  setTimeout(() => {
    console.log("Perfil encontrado", id);
    callback({ nome: "Marcos", idade: 18 }, null);
  }, 4500);
}

function MostarPerfil(Perfil, callback) {
  setTimeout(() => {
    console.log("Perfil:", Perfil);
    callback("Perfil exibido", null);
  }, 5000);
}

BuscarUsuario2((idUser) => {
  EncontrarPerfil(idUser, (Perfil) => {
    MostarPerfil(Perfil, (mensagem) => {
      console.log(mensagem);
    });
  });
});

function PegarNumero(callback) {
  setTimeout(() => {
    callback(null, 10);
  }, 1000);
}

function DobrarNumero(num, callback) {
  setTimeout(() => {
    console.log("Número dobrado");
    callback(null, num * 2);
  }, 1000);
}

function Mostrar(valor, callback) {
  setTimeout(() => {
    console.log("Valor:", valor);
    callback(null, "Processo finalizado");
  }, 1000);
}

PegarNumero((error, num) => {
  DobrarNumero(num, (error, valor) => {
    Mostrar(valor, (error, mensagem) => {
      console.log(mensagem);
    });
  });
});
