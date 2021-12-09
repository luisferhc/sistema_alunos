// usando let off

let nomeDeAluno = ["Marcel", "Franklin", "Rita", "Afrânio"]

for (let nome of nomeDeAluno) {
    console.log(`Esta pessoa se chama ${nome}`)
}

// usando while

let numeroDeAlunos = 10;

let contador = 0;

while(contador <= numeroDeAlunos){
    
    if(contador == 0){
        console.log("O número atual é zero")
    }else if(contador % 2 != 0){
        console.log("O Número " + contador + " é ímpar")
    }else{
        console.log(`O número ${contador} é par`)
    }
    contador++;
}

// usando if else

let numeroDeAlunos = 10;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    
    if(contador == 0){
        console.log("O número atual é zero")
    }else if(contador % 2 == 0){
        console.log("O Número " + contador + " é par")
    }else{
        console.log(`O número ${contador} é ímpar`)
    }
}