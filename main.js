class Matematica {
  /* Métodos estáticos: para passar alguma informação para ele e/ou retornar, independente do restante da classe. Geralmente quando houver métodos estáticos, não vai haver constructors.*/
  static soma(a, b){
    return a + b;
  }
}

console.log(Matematica.soma(1, 2));