//recibiendo datos por teclado
let horasTrabajadas=Number(prompt("cuantas horas trabajo"));
let numeroDomicilios=Number(prompt("cuantos domicilios hizo"));
let pagoDomicilios=(numeroDomicilios*2500);
let pagoHoras=(horasTrabajadas*6000);
alert("su pago por domicilio es de:$"+pagoDomicilios);
alert("pago por horas trabajadas:$"+pagoHoras);
alert("su pago total es de:$"+(pagoDomicilios+pagoHoras));