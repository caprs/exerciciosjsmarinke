var idade = 8;

function categoriaNadador(idade) {
  if (idade >= 5 && idade <= 7) {
    return "Infantil A";
  } else if (idade >= 8 && idade <= 10) {
    return "Infantil B";
  } else if (idade >= 11 && idade <= 13) {
    return "Juvenil A";
  } else if (idade >= 14 && idade <= 17) {
    return "Juvenil B";
  } else if (idade >= 18) {
    return "Adulto";
  } else {
    return "Idade fora da faixa";
  }
}

console.log(categoriaNadador(idade));
