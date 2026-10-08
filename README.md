# Fundação SpeedWagon

## 1. Apresentação do Aluno

**Nome:** Nelson de Souza Araújo Neto

**Curso:** Ciências da Computação

**Período:** 6º período

**Instituição:** Centro Universitário Tiradentes (UNIT)

**Disciplina:** Desenvolvimento Web

**Projeto:** Unidade 1 – Front-end Interativo

---

## 2. Descrição do Projeto

O projeto consiste em uma aplicação web para o controle de despesas pessoais, desenvolvida com HTML, CSS e JavaScript.

A aplicação foi criada com o tema fictício **Fundação SpeedWagon**, inspirado no universo de JoJo's Bizarre Adventure. A proposta é permitir que o usuário cadastre, visualize, pesquise e acompanhe suas despesas de forma simples e organizada.

O sistema possui um dashboard que apresenta um resumo das despesas cadastradas, além de gráficos que facilitam a visualização dos dados.

O projeto foi desenvolvido como uma aplicação exclusivamente front-end, sem utilização de banco de dados ou servidor.

---

## 3. Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Cadastro de despesas.
- Validação dos dados preenchidos no formulário.
- Listagem das despesas cadastradas.
- Visualização dos detalhes de uma despesa.
- Alteração do status da despesa entre paga e pendente.
- Pesquisa de despesas por descrição.
- Filtro de despesas por status.
- Atualização automática da listagem após o cadastro.
- Atualização automática dos indicadores do dashboard.
- Contagem do total de despesas.
- Contagem de despesas pagas.
- Contagem de despesas pendentes.
- Gráfico de status das despesas.
- Gráfico de quantidade de despesas por categoria.
- Carregamento inicial simulado utilizando Promise, `setTimeout` e `async/await`.
- Interface responsiva para diferentes tamanhos de tela.

---

## 4. Tecnologias Utilizadas

### HTML5

Utilizado para estruturar semanticamente os elementos da aplicação, como:

- Cabeçalho;
- Seções;
- Formulário;
- Campos de entrada;
- Botões;
- Listagem;
- Rodapé.

### CSS3

Utilizado para a estilização da aplicação, incluindo:

- Cores;
- Tipografia;
- Espaçamentos;
- Organização dos elementos;
- Layout em Grid;
- Responsividade;
- Estados de foco e interação dos elementos.

### JavaScript

Utilizado para implementar a lógica e a interatividade da aplicação, incluindo:

- Arrays e objetos;
- Funções;
- Condições;
- Laços de repetição;
- Manipulação do DOM;
- Eventos;
- Validação do formulário;
- Pesquisa e filtros;
- Atualização dos dados;
- Gráficos;
- Programação assíncrona.

### Canvas API

Utilizada para desenhar os gráficos do dashboard diretamente no navegador, sem a necessidade de bibliotecas externas.

---

## 5. Estrutura do Projeto

```text
UNIDADE 1/
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── index.html
│
└── README.md
```

### `index.html`

Responsável pela estrutura principal da aplicação e pelos elementos exibidos na interface.

### `css/style.css`

Responsável pela aparência visual, organização do layout e responsividade da aplicação.

### `js/app.js`

Contém a lógica da aplicação, incluindo cadastro, validação, pesquisa, filtros, atualização do dashboard, detalhes das despesas e gráficos.

### `README.md`

Contém a documentação do projeto, incluindo sua descrição, funcionalidades, tecnologias utilizadas, decisões técnicas, histórico de desenvolvimento, funcionalidade assíncrona, limitações e uso de Inteligência Artificial.

---

## 6. Como Executar o Projeto

Para executar o projeto:

1. Baixe ou clone o repositório.
2. Abra a pasta `UNIDADE 1`.
3. Abra o arquivo `index.html` em um navegador.
4. A aplicação será carregada diretamente no navegador.

Não é necessário instalar dependências ou configurar um servidor para executar o projeto.

---

## 7. Histórico do Desenvolvimento

O desenvolvimento do projeto foi realizado de forma incremental.

Inicialmente foi criada a estrutura básica da aplicação, contendo o arquivo HTML, a pasta de estilos e a pasta de JavaScript.

Em seguida, foi desenvolvido o formulário de cadastro de despesas e a estrutura responsável pela listagem dos registros.

Após isso, foram implementadas as validações do formulário, verificando os dados preenchidos antes de uma nova despesa ser adicionada.

Posteriormente foram adicionadas as funcionalidades de pesquisa e filtro por status, permitindo localizar despesas específicas na listagem.

Também foi implementada a área de detalhes, possibilitando visualizar as informações de uma despesa e alterar seu status entre paga e pendente.

Na etapa seguinte foi desenvolvido o dashboard, responsável por apresentar a quantidade total de despesas, despesas pagas e despesas pendentes.

Também foram adicionados os gráficos utilizando a Canvas API, permitindo visualizar a distribuição das despesas por status e por categoria.

Por fim, foi implementado o carregamento assíncrono inicial dos dados utilizando Promise, `setTimeout` e `async/await`.

### Versionamento com Git

O projeto foi versionado utilizando Git.

Foi criada uma branch de desenvolvimento chamada `desenvolvimento`, utilizada para realizar alterações e implementar funcionalidades antes da integração com a branch principal.

Principais commits realizados:

- `feat: cria uma estrutura inicial da página`
- `feat: implementa funcionalidades do controle de despesas`
- `docs: adiciona documentação do projeto`

Após o desenvolvimento, a branch de desenvolvimento foi integrada à branch `main` e o projeto foi publicado no GitHub.

---

## 8. Decisões Técnicas

### 8.1 Armazenamento dos dados

As despesas são armazenadas em um array de objetos no JavaScript.

Essa abordagem foi escolhida porque o projeto possui como objetivo demonstrar funcionalidades de front-end, não sendo necessário utilizar um banco de dados.

Cada objeto representa uma despesa e possui informações como:

- Descrição;
- Valor;
- Categoria;
- Forma de pagamento;
- Status;
- Data.

### 8.2 Manipulação do DOM

A aplicação utiliza JavaScript para modificar os elementos da página conforme as ações realizadas pelo usuário.

Dessa forma, quando uma despesa é cadastrada ou tem seu status alterado, a interface é atualizada sem a necessidade de recarregar a página.

### 8.3 Validação dos dados

As informações do formulário são verificadas antes que uma nova despesa seja adicionada.

São verificados campos como:

- Descrição;
- Valor;
- Categoria;
- Forma de pagamento;
- Status;
- Data.

Também são verificadas as opções válidas para os campos de seleção.

### 8.4 Gráficos

Os gráficos foram desenvolvidos utilizando a Canvas API disponível no próprio navegador.

Essa escolha permitiu criar os gráficos sem adicionar bibliotecas externas ao projeto.

### 8.5 Responsividade

O CSS utiliza Grid, Flexbox e Media Queries para adaptar a interface a diferentes tamanhos de tela.

Dessa forma, a aplicação pode ser utilizada em telas maiores e menores.

---

## 9. Funcionalidade Assíncrona

### 9.1 Qual parte da aplicação é assíncrona?

O carregamento inicial das despesas é realizado de forma assíncrona.

A função `carregarDespesas()` retorna uma Promise e utiliza `setTimeout()` para simular um carregamento de dados.

```javascript
function carregarDespesas() {

    return new Promise(function(resolve) {

        setTimeout(function() {
            resolve(despesas);
        }, 1000);

    });

}
```

### 9.2 Onde a Promise é criada?

A Promise é criada dentro da função `carregarDespesas()`:

```javascript
return new Promise(function(resolve) {
```

Ela representa o processo de carregamento dos dados antes que eles sejam utilizados pela aplicação.

### 9.3 Onde é utilizado async/await?

O `async/await` é utilizado na função responsável por iniciar a aplicação:

```javascript
async function iniciarAplicacao() {

    const dados = await carregarDespesas();

    mostrarDespesas(dados);
    atualizarResumo();

}
```

O `await` faz com que o código aguarde a conclusão da Promise antes de continuar a execução.

### 9.4 Por que essa abordagem foi utilizada?

A funcionalidade foi implementada para demonstrar o funcionamento da programação assíncrona em JavaScript.

Mesmo sendo uma aplicação que não utiliza uma API ou banco de dados, o carregamento simulado representa uma situação semelhante à que poderia ocorrer em uma aplicação real ao buscar informações de um servidor.

---

## 10. Limitações e Possíveis Melhorias

O projeto possui algumas limitações por ser uma aplicação exclusivamente front-end.

Atualmente, as despesas são armazenadas em um array de objetos durante a execução da aplicação. Dessa forma, os dados não possuem persistência após o encerramento ou recarregamento da aplicação.

Também não existe integração com banco de dados ou servidor.

Como possíveis melhorias futuras, poderiam ser implementados:

- Armazenamento utilizando `localStorage`;
- Banco de dados;
- Backend;
- Sistema de autenticação;
- Edição completa das despesas;
- Mais opções de filtros;
- Relatórios financeiros;
- Gráficos mais avançados;
- Integração com uma API.

---

## 11. Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

Seu uso teve como objetivo auxiliar na compreensão de conceitos, identificação de possíveis soluções, implementação de funcionalidades e revisão de partes do código e da documentação.

Todo conteúdo sugerido pela IA foi analisado, testado e adaptado de acordo com as necessidades do projeto. O código utilizado foi revisado, testado e adaptado durante o desenvolvimento antes de ser incorporado à aplicação.

| Data | Descrição do modelo | Prompt utilizado | Onde foi usado |
|---|---|---|---|
| 06/10/2026 | GPT-5.6 Luna | "Auxilie na criação da estrutura inicial de um projeto front-end para controle de despesas pessoais utilizando HTML, CSS e JavaScript." | Estrutura inicial do projeto |
| 06/10/2026 | GPT-5.6 Luna | "Auxilie na implementação do cadastro, validação, listagem, pesquisa, filtros e detalhes das despesas em JavaScript." | `js/app.js` |
| 07/10/2026 | GPT-5.6 Luna | "Auxilie na criação de um dashboard com contagem de despesas e gráficos utilizando JavaScript e Canvas API." | Dashboard e gráficos |
| 07/10/2026 | GPT-5.6 Luna | "Auxilie na implementação de uma funcionalidade assíncrona utilizando Promise, setTimeout e async/await." | Carregamento inicial das despesas |
| 08/10/2026 | GPT-5.6 Luna | "Revise a documentação do projeto e verifique se o README atende aos requisitos solicitados para o trabalho." | `README.md` |

As sugestões fornecidas pela Inteligência Artificial não foram utilizadas de forma automática. O código e os textos foram revisados, testados e adaptados durante o desenvolvimento, de modo que o funcionamento final da aplicação fosse compreendido e validado.

---

## 12. Considerações Finais

O projeto teve como objetivo aplicar, de forma prática, os principais conceitos estudados na Unidade 1 de Desenvolvimento Web.

Durante o desenvolvimento foram utilizados conceitos de HTML, CSS e JavaScript, além de manipulação do DOM, eventos, validação de formulários, arrays, objetos, funções, filtros, gráficos e programação assíncrona.

A aplicação foi desenvolvida buscando manter uma estrutura simples, funcional e compatível com os requisitos propostos para o projeto.