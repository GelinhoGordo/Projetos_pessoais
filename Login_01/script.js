// escreva uma funcao que receba dois numero e retorno caso o primeira seja multiplo do segundo

function multiplo(a, b) {
    if (a % b == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(multiplo(10, 5));