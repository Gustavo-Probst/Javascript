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

    let litrosTanque = pagamento/valorGasolina;

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

function formatarParaDinheiro(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}