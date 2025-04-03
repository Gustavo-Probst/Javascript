function exercicio1() {
    let largura = prompt("Qual a largura do terreno?:");
    let altura = prompt("Qual a altura do terreno?:");

    let area = largura * altura;

    alert("A área do terreno é: " + area);
}

function exercicio2() {
    let numCavalos = prompt("Quantos cavalos serão comprados?:");
    let ferraduras = numCavalos * 4;

    alert("Será necessário comprar " + ferraduras + " ferraduras.")
}

function exercicio3() {
    const paoFrances = 0.12;
    const broa = 1.5;

    let paoFrancesVendido = prompt("Quantos pães franceses foram vendidos?:");
    let broaVendido = prompt("Quantas broas foram vendidas?:");

    let valorTotal = (paoFrancesVendido * paoFrances) + (broaVendido * broa);
    let poupanca = valorTotal * 0.1;

    alert(
        "Valor total arrecadado: " + formatarParaDinheiro(valorTotal) +
        "\nValor para ser armazenado na poupança: " + formatarParaDinheiro(poupanca)
    )
}

function exercicio4() {
    let nome = prompt("Qual o seu nome?:");
    let idade = prompt("Qual a sua idade?:");

    let dias = idade * 365;

    alert(nome + ", você já viveu " + dias + " dias!");
}

function exercicio5() {
    let valorGasolina = prompt("Qual o valor do litro da gasolina?:");
    let pagamento = prompt("Qual o valor do pagamento?:");

    let litrosTanque = pagamento / valorGasolina;

    alert("Serão abastecidos " + litrosTanque.toFixed(2) + " litros de gasolina no seu tanque.");
}

function exercicio6() {
    const valorKg = 12;
    let kgPrato = prompt("Peso (kg) do prato:");

    let valor = kgPrato * valorKg;

    alert("Valor a pagar: " + formatarParaDinheiro(valor));
}

function exercicio7() {
    const diasPorMes = 30;
    let dia = prompt("Informe o dia de hoje:");
    let mes = prompt("Informe o mês atual:");
    let diasPassadosNosMeses = (mes - 1) * diasPorMes;
    let diasTotais = Number(diasPassadosNosMeses) + Number(dia);

    alert("Se passaram " + diasTotais + " dias desde o inicio do ano.");
}
function exercicio8() {
    let nota1 = prompt("Informe a sua 1ª nota:");
    let nota2 = prompt("Informe a sua 2ª nota:");
    let nota3 = prompt("Informe a sua 3ª nota:");

    let mediaPonderada = (nota1 * 0.1) + (nota2 * 0.2) + (nota3 * 0.3);

    alert("A sua média ponderada é: " + mediaPonderada);
}

function exercicio9() {
    const p = 10;
    const m = 12;
    const g = 15;

    let pQuant = prompt("Informe a quantidade de camisetas tamanho P:");
    let mQuant = prompt("Informe a quantidade de camisetas tamanho M:");
    let gQuant = prompt("Informe a quantidade de camisetas tamanho G:");

    let valor = (pQuant * p) + (mQuant * m) + (gQuant * g);

    alert("Valor da compra: " + formatarParaDinheiro(valor));
}

function exercicio10() {
    alert("Informe os valores dos pares ordenados de A:");
    let xa = prompt("Informe o valor de X:");
    let ya = prompt("Informe o valor de Y:");

    alert("Informe os valores dos pares ordenados de B:");
    let xb = prompt("Informe o valor de X:");
    let yb = prompt("Informe o valor de Y:");

    let deltaA = xa - xb;
    let deltaB = ya - yb;

    let distancia = Math.sqrt(deltaA * deltaA + deltaB * deltaB);

    alert("A distância entre os pontos é: " + distancia.toFixed(2));
}

function exercicio11() {
    let diasSemAcidentes = prompt("Informe há quantos dias não acontece um acidente:");

    let anosSemAcidentes = diasSemAcidentes / 365;
    let mesesSemAcidentes = (diasSemAcidentes % 365) / 30;
    let dias = diasSemAcidentes % 30;

    alert("A fábrica está a " + anosSemAcidentes.toFixed(0) + " anos, " + mesesSemAcidentes.toFixed(0) + " meses e " + dias + " dias sem acidentes.");
}

function exercicio12() {
    let salarioInicial = prompt("Informe o seu salário:");

    let salarioIncrementado = salarioInicial * 1.15;
    let salárioFinal = salarioIncrementado - (salarioIncrementado * 0.08);

    alert("Salário Inicial: " + formatarParaDinheiro(salarioInicial) + "\nSalário com Aumento: " + formatarParaDinheiro(salarioIncrementado) + "\nSalário Final: " + formatarParaDinheiro(salárioFinal));
}

function exercicio13() {
    let numero = prompt("Informe o número (até 3 dígitos):");

    if (numero <= 999) {
        let centena = Math.floor(numero / 100);
        let dezena = Math.floor((numero % 100) / 10);
        let unidade = numero % 10;

        alert("Centena: " + centena + "\nDezena: " + dezena + "\nUnidade: " + unidade);
    } else {
        alert("Número inválido. Digite um número até 3 dígitos.");
    }
}

function exercicio14() {
    let pizza = prompt("Informe o raio da pizza:");

    let area = Math.pow(pizza, 2) * Math.PI;

    alert("A área da pizza é: " + area.toFixed(2));
}

function exercicio15() {
    let conta = prompt("Informe o valor total da conta:");

    let parteCarlos = Math.floor(conta / 3);
    let parteAndre = parteCarlos;
    let parteFelipe = conta - (parteCarlos + parteAndre);

    alert("Carlos deve pagar: " + formatarParaDinheiro(parteCarlos) + "\nAndré deve pagar: " + formatarParaDinheiro(parteAndre) + "\nFelipe deve pagar: " + formatarParaDinheiro(parteFelipe));
}

function exercicio16() {
    const queijo = 0.05;
    const presunto = queijo;
    const carne = 0.1;

    let quantHamburguer = prompt("Informe a quantidade de hambúrgueres a ser feita:");

    let quantQueijo = queijo * quantHamburguer;
    let quantPresunto = presunto * quantHamburguer;
    let quantCarne = carne * quantHamburguer;

    alert("Quantidade de queijo (em kg): " + quantQueijo.toFixed(2) + " kg\nQuantidade de presunto (em kg): " + quantPresunto.toFixed(2) + " kg\n Quantidade de carne (em kg): " + quantCarne.toFixed(2) + " kg");
}

function exercicio17() {
    let temperaturaC = prompt("Informe a temperatura em ºC (Celsius):");

    let temperaturaF = temperaturaC * 1.8 + 32;

    alert("A temperatura em ºF (Fahrenheit) é: " + temperaturaF.toFixed(2) + " ºF");
}

function exercicio18() {
    const horaTrabalhada = 10;
    const horaExtra = 15;

    let horaFuncionario = prompt("Informe o número de horas do seu expediente:");
    let horaExtraFuncionario = prompt("Informe o número de horas extras trabalhadas:");

    let salarioBruto = horaFuncionario * horaTrabalhada + horaExtraFuncionario * horaExtra;
    let salarioLiquido = salarioBruto - (salarioBruto * 0.1);

    alert("Salário Bruto: " + formatarParaDinheiro(salarioBruto) + "\nSalário Líquido: " + formatarParaDinheiro(salarioLiquido));
}

function exercicio19() {
    let frangos = prompt("Informe o número de frangos:");

    let custoFrangos = frangos * 11;

    alert("O custo total é: " + formatarParaDinheiro(custoFrangos));
}

function exercicio20() {
    let blusas = prompt("Informe o número de blusas feitas:");

    let noveloLa = blusas * 0.5;

    alert("O número de novelos utilizado é: " + Math.floor(noveloLa));
}

function exercicio21() {
    const latas = 0.35;
    const garrafa600 = 0.6;
    const garrafa2l = 2;

    let quantLatas = prompt("Informe a quantidade de latas de refrigerante compradas:");
    let quantGarrafa600 = prompt("Informe a quantidade de garrafas de refrigerante (600 ml) compradas:");
    let quantGarrafas2l = prompt("Informe a quantidade de garrafas de refrigerante (2 l) compradas:");

    let litrosRefri = (latas * quantLatas) + (garrafa600 * quantGarrafa600) + (garrafa2l * quantGarrafas2l);

    alert("Total de litros de refrigerante: " + litrosRefri.toFixed(2) + " l");
}

function exercicio22() {
    let moeda1c = prompt("Informe a quantidade de moedas de 1 centavo:");
    let moeda5c = prompt("Informe a quantidade de moedas de 5 centavos:");
    let moeda10c = prompt("Informe a quantidade de moedas de 10 centavos:");
    let moeda25c = prompt("Informe a quantidade de moedas de 25 centavos:");
    let moeda50c = prompt("Informe a quantidade de moedas de 50 centavos:");
    let moeda1r = prompt("Informe a quantidade de moedas de 1 real:");

    let total = Number(moeda1c * 0.01) + Number(moeda5c * 0.05) + Number(moeda10c * 0.1) + Number(moeda25c * 0.25) + Number(moeda50c * 0.5) + Number(moeda1r);

    alert("Total em dinheiro: " + formatarParaDinheiro(total));
}

function exercicio23() {
    let alturaPessoa = parseFloat(prompt("Digite sua altura (em metros):"));
    let sombraPessoa = parseFloat(prompt("Digite o comprimento da sua sombra (em metros):"));
    let sombraPredio = parseFloat(prompt("Digite o comprimento da sombra do prédio (em metros):"));

    let alturaPredio = (alturaPessoa * sombraPredio) / sombraPessoa;

    alert("A altura do prédio é: " + alturaPredio.toFixed(2) + " m");
}

function exercicio24() {
    const agua = 0.8;
    const suco = 0.2;

    let litrosRefresco = prompt("Informe a quantidade de litros de refresco desejada:");

    
}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function exercicio() {

}

function formatarParaDinheiro(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}