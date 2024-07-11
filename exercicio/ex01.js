

function inserir(num){
    document.getElementById('resultado').innerHTML+=num;
}

function limpar(){ //para fazermos essa função basta não atribuir nada no InnerHTML
    document.getElementById('resultado').innerHTML='' 
}

function apagar(){
    let tela = document.getElementById('resultado').innerHTML; //Guarda o valor digitado na tela
    document.getElementById('resultado').innerHTML=tela.substring(0, tela.length -1); //A Substring faz com que os números sejam apagados, e o Length conta a quantidade de caracteres. Os dois juntos de o papel de contar quantos numeros foram digitados(Length) e apagar o numero da esquerda para direita, caso um deles for um maior que o outro(Substring) Ex:Substring(inicio, fim), se inicio for > que fim, apaga-se da direta para esquerda e vice versa.
}



function calculo(){
    
        let tela = document.getElementById('resultado').innerHTML;
        if(tela){
            document.getElementById('resultado').innerHTML = eval(tela)
        }
        else{
            document.getElementById('resultado').innerHTML = 'ERROR: Nenhum valor foi adicionado'
        }
        if(tela.includes('/0')){
            document.getElementById('resultado').innerHTML='ERROR: Não é possivel divisão por 0'
        }   
    
}
