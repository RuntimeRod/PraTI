function DataValida(dia,mes,ano) {
    let diaValido = false //ok
    let mesValido = false //ok
    let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //Verifica se o ano é bissexto e muda o array no dia de fevereiro
    //O ano é bissexto se for divisivel por 4 e não por 100 (ao mesmo tempo) OU for divisivel por 400.
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        diasPorMes[1] = 29
    }

    if (dia >= 1 && dia <= diasPorMes[mes - 1]) {
        diaValido = true
    }

    if(mes >= 1 && mes <= 12) {
        mesValido = true
    }

    if (diaValido && mesValido) {
        console.log("True")
    } else {
        console.log("False")
    }
}

DataValida(29,2,2024)
DataValida(28,2,2025)
DataValida(31,1,2024)