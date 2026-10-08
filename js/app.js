let despesas = [
    {
        id: 1,
        descricao: "Almoço",
        valor: 25.50,
        categoria: "alimentacao",
        pagamento: "pix",
        status: "pago",
        data: "2026-10-05"
    },
    {
        id: 2,
        descricao: "Passagem de ônibus",
        valor: 5.00,
        categoria: "transporte",
        pagamento: "dinheiro",
        status: "pago",
        data: "2026-10-06"
    },
    {
        id: 3,
        descricao: "Cinema",
        valor: 30.00,
        categoria: "lazer",
        pagamento: "cartao",
        status: "pendente",
        data: "2026-10-07"
    },
    {
        id: 4,
        descricao: "Stardust Crusaders",
        valor: 7500000,
        categoria: "missao-secreta",
        pagamento: "boleto",
        status: "pago",
        data: "1987-11-28",
        dataFim: "1988-01-16"
    }
];

function mostrarDespesas(listaDespesas = despesas) {

    const lista = document.getElementById("lista-despesas");

    lista.innerHTML = "";

    listaDespesas.forEach(function(despesa) {

        const item = document.createElement("div");

        item.classList.add("item-despesa");

        const dataFormatada = new Date(
            despesa.data + "T00:00:00"
        ).toLocaleDateString("pt-BR");

        item.innerHTML = `
            <h3>${despesa.descricao}</h3>
            <p>Data: ${dataFormatada}</p>
        `;

        const botaoDetalhes = document.createElement("button");

        botaoDetalhes.textContent = "Ver detalhes";

        botaoDetalhes.addEventListener("click", function() {
            mostrarDetalhes(despesa);
        });

        item.appendChild(botaoDetalhes);

        lista.appendChild(item);
    });
}

function mostrarDetalhes(despesa) {

    const detalhes = document.getElementById("detalhes-despesa");

    const categorias = {
        alimentacao: "Alimentação",
        transporte: "Transporte",
        lazer: "Lazer",
        moradia: "Moradia",
        saude: "Saúde",
        "missao-secreta": "Missão Secreta"
    };

    const pagamentos = {
        pix: "Pix",
        dinheiro: "Dinheiro",
        cartao: "Cartão",
        boleto: "Boleto"
    };

    const statusTexto = {
        pago: "Pago",
        pendente: "Pendente"
    };

    const dataFormatada = new Date(
        despesa.data + "T00:00:00"
    ).toLocaleDateString("pt-BR");

    let periodo = "";

    if (despesa.dataFim) {

        const dataFimFormatada = new Date(
            despesa.dataFim + "T00:00:00"
        ).toLocaleDateString("pt-BR");

        periodo = `
            <p>
                <strong>Período:</strong>
                ${dataFormatada} até ${dataFimFormatada}
            </p>
        `;
    }

    detalhes.innerHTML = `
        <h2>Detalhes da despesa</h2>

        <p>
            <strong>Descrição:</strong>
            ${despesa.descricao}
        </p>

        <p>
            <strong>Categoria:</strong>
            ${categorias[despesa.categoria]}
        </p>

        <p>
            <strong>Valor:</strong>
            R$ ${despesa.valor.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}
        </p>

        <p>
            <strong>Pagamento:</strong>
            ${pagamentos[despesa.pagamento]}
        </p>

        <p>
            <strong>Status:</strong>
            ${statusTexto[despesa.status]}
        </p>

        <p>
            <strong>Data:</strong>
            ${dataFormatada}
        </p>

        ${periodo}

        <button id="botao-status-detalhes">
            ${despesa.status === "pago"
                ? "Marcar como pendente"
                : "Marcar como pago"}
        </button>
    `;

    const botaoStatus = document.getElementById(
        "botao-status-detalhes"
    );

    botaoStatus.addEventListener("click", function() {

        if (despesa.status === "pago") {
            despesa.status = "pendente";
        } else {
            despesa.status = "pago";
        }

        mostrarDetalhes(despesa);
        atualizarResumo();
    });
}

function carregarDespesas(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(despesas);
        }, 1000)
    })
}

async function iniciarAplicacao(){
    const lista = document.getElementById("lista-despesas");

    lista.innerHTML = "<p>Carregando despesas...</p>";

    const dados = await carregarDespesas();

    mostrarDespesas(dados);
    atualizarResumo();
}

iniciarAplicacao();

const formulario = document.getElementById("form-despesa");

const campoBusca = document.getElementById("busca");

const filtroStatus = document.getElementById("filtro-status")

function aplicarFiltros(){
    const textoBusca = campoBusca.value.toLowerCase();
    const statusSelecionado = filtroStatus.value;

    const despesasFiltradas = despesas.filter(function(despesa){
        const correspondeBusca = despesa.descricao
            .toLowerCase()
            .includes(textoBusca);

        const correspondeStatus =
            statusSelecionado === "" ||
            despesa.status === statusSelecionado;

        return correspondeBusca && correspondeStatus;
    });

    mostrarDespesas(despesasFiltradas);
}

filtroStatus.addEventListener("change", aplicarFiltros);

campoBusca.addEventListener("input", aplicarFiltros);

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const valor = document.getElementById("valor").value;
    const categoria = document.getElementById("categoria").value;
    const pagamento = document.getElementById("pagamento").value;
    const status = document.getElementById("status").value;
    const data = document.getElementById("data").value;

    if (descricao.trim() === "") {
    alert("A descrição é obrigatória.");
    return;
}

    if (descricao.trim().length < 3) {
        alert("A descrição deve ter pelo menos 3 caracteres.");
        return;
    }

    if (valor === "" || Number(valor) <= 0) {
        alert("Digite um valor maior do que zero.");
        return;
    }

    const categoriasValidas = [
        "alimentacao",
        "transporte",
        "lazer",
        "moradia",
        "saude",
        "missao-secreta"
    ];

    if (!categoriasValidas.includes(categoria)) {
        alert("Selecione uma categoria válida.");
        return;
    }

    const pagamentosValidos = [
        "pix",
        "dinheiro",
        "cartao",
        "boleto"
    ];

    if (!pagamentosValidos.includes(pagamento)) {
        alert("Selecione uma forma de pagamento válida.");
        return;
    }

    const statusValidos = [
        "pago",
        "pendente"
    ];

    if (!statusValidos.includes(status)) {
        alert("Selecione um status válido.");
        return;
    }

    if (data === "") {
        alert("Selecione uma data.");
        return;
    }

    const novaDespesa = {
        id: despesas.length + 1,
        descricao: descricao,
        valor: Number(valor),
        categoria: categoria,
        pagamento: pagamento,
        status: status,
        data: data
    };

    despesas.push(novaDespesa);

    aplicarFiltros();
    atualizarResumo();
});

function atualizarResumo(){
    const totalDespesas = despesas.length;

    let despesasPagas = 0;
    let despesasPendentes = 0;

    despesas.forEach(function(despesa){

        if (despesa.status === "pago"){
            despesasPagas++;
        }

        if (despesa.status === "pendente"){
            despesasPendentes++;
        }
    });

    document.getElementById("total-despesas").textContent = totalDespesas; 
    document.getElementById("despesas-pagas").textContent = despesasPagas; 
    document.getElementById("despesas-pendentes").textContent = despesasPendentes;
    document.getElementById("dashboard-total").textContent = totalDespesas;
    document.getElementById("dashboard-pagas").textContent = despesasPagas;
    document.getElementById("dashboard-pendentes").textContent = despesasPendentes;

    criarGraficoStatus();
    criarGraficoCategorias();
}

function criarGraficoStatus() {

    const canvas = document.getElementById("grafico-status");

    const contexto = canvas.getContext("2d");

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    let despesasPagas = 0;
    let despesasPendentes = 0;

    despesas.forEach(function(despesa) {

        if (despesa.status === "pago") {
            despesasPagas++;
        }

        if (despesa.status === "pendente") {
            despesasPendentes++;
        }

    });

    const total = despesasPagas + despesasPendentes;

    const anguloPago = (despesasPagas / total) * 2 * Math.PI;
    const anguloPendente = (despesasPendentes / total) * 2 * Math.PI;

    contexto.beginPath();

    contexto.moveTo(150, 150);

    contexto.arc(
        150,
        150,
        100,
        0,
        anguloPago
    );

    contexto.closePath();
    contexto.fillStyle = "#FFDE21";
    contexto.fill();

    contexto.beginPath();

    contexto.moveTo(150, 150);

    contexto.arc(
        150,
        150,
        100,
        anguloPago,
        anguloPago + anguloPendente
    );

    contexto.closePath();
    contexto.fillStyle = "#2d416d";
    contexto.fill();

    contexto.fillStyle = "#FFDE21";
    contexto.fillRect(20, 270, 15, 15);

    contexto.fillStyle = "white";
    contexto.font = "14px Georgia";
    contexto.fillText("Pagas", 45, 283);

    contexto.fillStyle = "#2d416d";
    contexto.fillRect(100, 270, 15, 15);

    contexto.fillStyle = "white";
    contexto.fillText("Pendentes", 125, 283);
}

function criarGraficoCategorias() {

    const categorias = {};

    despesas.forEach(function(despesa) {

        if (categorias[despesa.categoria]) {
            categorias[despesa.categoria]++;
        } else {
            categorias[despesa.categoria] = 1;
        }

    });

    const canvas = document.getElementById("grafico-categorias");
    const contexto = canvas.getContext("2d");

    const nomesCategorias = Object.keys(categorias);
    const valoresCategorias = Object.values(categorias);

    contexto.clearRect(0, 0, canvas.width, canvas.height);

    const larguraBarra = 50;
    const espaco = 30;
    const alturaMaxima = 200;

    const maiorValor = Math.max(...valoresCategorias);

    const nomesCategoriasFormatados = {
    alimentacao: "Alimentação",
    transporte: "Transporte",
    lazer: "Lazer",
    moradia: "Moradia",
    saude: "Saúde",
    "missao-secreta": "Missão Secreta"
    };

    nomesCategorias.forEach(function(categoria, indice) {

        const valor = valoresCategorias[indice];

        const altura = (valor / maiorValor) * alturaMaxima;

        const x = 30 + indice * (larguraBarra + espaco);
        const y = 250 - altura;

        contexto.fillStyle = "White";

        contexto.fillRect(
            x,
            y,
            larguraBarra,
            altura
        );

        contexto.fillStyle = "white";
        contexto.font = "12px Georgia";

        contexto.fillText(
            nomesCategoriasFormatados[categoria],
            x,
            270
        );

        contexto.font = "14px Georgia";

        contexto.fillText(
            valor,
            x + 20,
            y - 5
        );

    });
}