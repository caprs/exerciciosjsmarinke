function converterSegundos(totalSegundos){
  var horas = Math.floor(totalSegundos / 3600);

  var segundos = totalSegundos % 3600;
  
  var minutos = Math.floor(segundos / 60);
  var segundosRestantes = segundos % 60; 

  console.log("Convertor de tempo da fábrica");
  console.log("Os segundos informados foram: " + totalSegundos);
  console.log("A conversão é: " + horas + " horas, " + minutos + " minutos e " + segundosRestantes + " segundos.");
}