//Criando uma promise comum, sem async await
const minhaPromise = () => new Promise((resolve, reject) =>{
  setTimeout(() => { resolve('OK')}, 2000);
})

minhaPromise()
  .then(response => {
    console.log(response);
  })
  .catch(err => {

  });


/* Com async await */
async function executaPromise() {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

/* em arrow function */
const execcutaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();
execcutaPromise();
