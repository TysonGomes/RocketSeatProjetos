let numberOne= Number(prompt("Digite o primeiro numero"))
let numberTwo =Number(prompt("Digite o segundo numero"))

let plus  , sub, div ,mult , mod , chk

plus= numberOne + numberTwo;
sub= numberOne - numberTwo;
div= numberOne / numberTwo;
mult= numberOne * numberTwo;
mod = numberOne % numberTwo;

if (numberOne===numberTwo){
    chk="os numero são iguais "
} else {
    chk="os numero são diferentes "
} 

 
alert(` A soma do numero é : ${plus}`)
alert(` A subtração do numero é : ${sub}`)
alert(` A divisão do numero é : ${div}`)
alert(` A multiplicação do numero é : ${mult}`)
alert(` O resto da divisão é : ${mod}`)
alert(chk);
if (plus % 2 ==0){
    alert(`a soma dos numeros ${plus} são pares`)
}else {
    alert(`a soma dos numeros ${plus} são impares`)
}



