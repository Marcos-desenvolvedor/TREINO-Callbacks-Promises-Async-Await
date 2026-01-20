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



  