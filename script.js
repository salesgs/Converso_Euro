function Converter() {
    var inputValue = document.getElementById("valor"); //pegamamos todo o valor input
    var inputId = inputValue.value;  // pegamos o valor do input
    var inputNumber = parseFloat(inputId);  // passamos o tipo do dado
  
    //_________________________________
    var valorBr = inputNumber * 5.11;    //código
    //__________________________________
  
    var h2ValorConvertido = document.getElementById("valorConvertido"); //lugar aonde será colocado a mensagem
    var real = "R$: " + valorBr; //mensagem 
    h2ValorConvertido.innerHTML = real;  //inserindo o
  }
  