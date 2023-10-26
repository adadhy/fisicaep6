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
function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

