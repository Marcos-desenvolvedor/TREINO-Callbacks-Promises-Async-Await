//BUSCA O USER PELO ID
async function GetUsers(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error na busca de users");
  }

  const data = await response.json();
  return data;
}

async function GetPostUser(id) {
  const urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;

  const response = await fetch(urlPost);

  if (!response.ok) {
    throw new Error("Error na requisição");
  }

  const data = await response.json();

  if (!data || data.length === 0) {
    throw new Error("Error usuário não possui Post");
  }

  return data;
}

async function fluxo() {
  const user = await GetUsers(1);
  console.log(`LOGADO:  ${user.name} - ${user.email}`);

  const PostUser = await GetPostUser(user.id);
  console.log("POST: ", PostUser);
}

fluxo();

// TESTA O CATH/ERROR DE QUANDO NÃO TEM POST O USER
async function fluxo2() {
  try {
    const Post = await GetPostUser(99);
    console.log(Post);
  } catch (error) {
    console.log(error);
  }
}

// fluxo2();
