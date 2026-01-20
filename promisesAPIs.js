setTimeout(() => {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error na requisição");
      }

      return response.json();
    })
    .then((user) => {
      console.log("usuarios:", user);
    })
    .catch((error) => {
      console.log("Error:", error.mesagem);
    });
}, 1500);

// Busca o usuário pelo ID

function BuscarPorID(id) {
  const urlid = `https://jsonplaceholder.typicode.com/users/${id}`;

  return fetch(urlid).then((response) => {
    if (!response.ok) {
      throw new Error("Error ao encontrar usuário");
    }
    return response.json();
  });
}

setTimeout(() => {
  BuscarPorID(2)
    .then((user) => {
      console.log("NOME: ", user);
    })
    .catch((error) => {
      console.log("ERROR: ", error.mesagem);
    });
}, 2000);

// Mostra o Email
setTimeout(() => {
  BuscarPorID(2)
    .then((user) => {
      console.log("USUÁRIO: ", user);
      return user;
    })
    .then((user) => {
      console.log("EMAIL: ", user.email);
    })
    .catch((error) => {
      console.log("ERROR: ", error.message);
    });
}, 2500);

// Busca POST do usuário
function GetPost(id) {
  const urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

  return fetch(urlPost).then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao buscar posts do user");
    }
    return response.json();
  });
}

setTimeout(() => {
  BuscarPorID(4)
    .then((user) => {
      return user.id;
    })
    .then(GetPost)
    .then((post) => {
      console.log(post);
    })
    .catch((error) => {
      console.log(error);
    });
}, 3000);
