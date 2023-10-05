function equacao1grau(){
    var a= vara.value;
    var b= varb.value;
    var x= varx.value;
    var resposta= -b/a;
    if (a == 0){
        alert("a deve ser diferente de 0");

    }
    else{
        if(x == resposta){
            alert("errou");
        }

    }
    if (x == resposta){
        alert("acertou");

    }
    else{
        alert("errou");

    }

}