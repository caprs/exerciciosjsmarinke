var nota1 = 8;
var nota2 = 7;
var nota3 = 9;

var tipoDeMedia = 'a'; 
var resultadoDaMedia;
var mensagemParaUsuario = "Olá, usuário!"; 

console.log(`Notas do aluno: ${nota1}, ${nota2}, ${nota3}`);
console.log(`Tipo de média escolhido: ${tipoDeMedia.toUpperCase()}`);

  if (tipoDeMedia.toUpperCase() === 'A') {
    resultadoDaMedia = (nota1 + nota2 + nota3) / 3;
    mensagemParaUsuario = "Média Aritmética";

} 

  else if (tipoDeMedia.toUpperCase() === 'P') {
    var somaNotas = 5 + 3 + 2;
      resultadoDaMedia = (nota1 * 5 + nota2 * 3 + nota3 * 2) / somaNotas;
      mensagemParaUsuario = "Média Ponderada";

    } else if (tipoDeMedia.toUpperCase() === 'H') {
      if (nota1 === 0 || nota2 === 0 || nota3 === 0) {
        resultadoDaMedia = 3 / (1 / nota1 + 1 / nota2 + 1 / nota3);
        mensagemParaUsuario = "Média Harmônica";
      }

    } 

    

