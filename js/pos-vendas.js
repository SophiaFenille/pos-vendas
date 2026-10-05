const RESPONSAVEIS = [
  "Todos",
  "Giovanna",
  "Rafinha",
  "Letícia",
  "Dmitri",
  "José Everton"
];

/*
  Os nomes dos responsáveis abaixo seguem a planilha fornecida.
  Quando o documento não informa nominalmente o responsável, o
  procedimento fica associado apenas quando há suporte da planilha.
*/

const RESPONSAVEIS_ATIVIDADES = [
  ["Garantia / Pós-vendas", "Giovanna", "—"],
  ["Cadastro", "Rafinha", "Letícia"],
  ["Fotografia", "Dmitri", "—"],
  ["Atividades de Pós-vendas", "José Everton", "—"]
];

const MAPEAMENTO_SANKHYA = [
  ["Relatório_Levantamento_Produtos", "Verificar dashboard de itens fotografados e cubados e relação de fotos com a curva ABC", "Dmitri", "Fotografia"],
  ["Portal de Compras", "Verificar código de compra de alguns produtos para buscar a foto no site original", "Dmitri", "Fotografia"],
  ["Gerência de Produtos", "Verificar código de compra de alguns produtos para buscar a foto no site original", "Dmitri", "Fotografia"],
  ["Catálogo de produto", "Sem utilização no momento para cadastro personalizado", "Rafinha", "Cadastro"],
  ["Gerência de produtos", "Para ver as saídas, entradas e devoluções dos produtos", "Rafinha", "Cadastro"],
  ["Recebimento produtos s/cód de barras", "Identificar produtos que não possuem código de barras cadastrados e corrigi-los, olhando na nota fiscal", "Rafinha", "Cadastro"],
  ["Estoque / endereçamento WMS", "Ver a quantidade de peças que realmente temos na locação", "Rafinha", "Cadastro"],
  ["Consulta de produto", "Ver preços dos produtos", "Rafinha", "Cadastro"],
  ["Marcas", "Cadastrar marcas específicas no sistema", "Rafinha", "Cadastro"],
  ["Linhas de referência cruzada", "Cadastrar linhas específicas no sistema", "Rafinha", "Cadastro"],
  ["Busca por referência cruzada", "Ver a quantidade de produtos no vínculo e suas marcas", "Rafinha", "Cadastro"],
  ["Manutenção de referência cruzada", "Movimentação de vínculo, adicionar referência cruzada etc.", "Rafinha", "Cadastro"],
  ["Produtos", "Cadastrar todos os tipos de produtos como peças, material de consumo, ferramentas e etc.", "Rafinha", "Cadastro"],
  ["Produtos", "Cadastro de peças e alteração de cadastro", "Letícia", "Cadastro"],
  ["Manutenção de referência cruzada", "Movimentação de vínculo e adicionar referência cruzada", "Letícia", "Cadastro"],
  ["Busca por referência cruzada", "Consulta de referência cruzada", "Letícia", "Cadastro"],
  ["Linhas de referência cruzada", "Consulta de linhas de referência cruzada", "Letícia", "Cadastro"],
  ["Marcas", "Consulta de marcas", "Letícia", "Cadastro"],
  ["Consulta de produto", "Consulta de produtos", "Letícia", "Cadastro"],
  ["Estoque / Endereçamento WMS", "Consulta de estoque e endereçamento", "Letícia", "Cadastro"],
  ["Recebimento produtos s/cód. de barras", "Consulta/recebimento de produtos sem código de barras", "Letícia", "Cadastro"],
  ["Gerência de Produtos", "Consultas e manutenção de produtos", "Letícia", "Cadastro"],
  ["Catálogo de produto", "Consulta de catálogo de produto", "Letícia", "Cadastro"],
  ["Portal de Vendas", "Verificar a Nota Fiscal", "José Everton", "Garantia"],
  ["Gerência de Produtos", "Verificar o histórico da peça", "José Everton", "Garantia"],
  ["Produto", "Verificar a referência da peça", "José Everton", "Garantia"],
  ["Busca por referência cruzada", "Verificar os itens compatíveis", "José Everton", "Garantia"],
  ["Gerência WMS", "Verificar os horários da separação", "José Everton", "Garantia"],
  ["Log de conferência", "Verificar o horário em que o item foi conferido", "José Everton", "Garantia"],
  ["Relatório de Curva ABC", "Verificar as referências mais vendidas", "José Everton", "Garantia"],
  ["Histórico de movimentação de um produto", "Verificar as movimentações", "José Everton", "Garantia"],
  ["Registro de Garantia", "Verificar solicitações dos clientes através do link", "Giovanna", "Garantia"],
  ["Gerência WMS", "Selecionar o separador", "Giovanna", "Garantia"],
  ["Portal de Importação de XML", "Lançar frete", "Giovanna", "Garantia"],
  ["Gerência de Produtos", "Verificar o fornecedor e histórico/quantidade de devoluções da peça", "Giovanna", "Garantia"],
  ["Portal de Compras", "Verificar notas de garantia do cliente", "Giovanna", "Garantia"],
  ["Central de Vendas", "Reposição de peça em garantia, retorno de NF e pedido para fornecedor", "Giovanna", "Garantia"],
  ["Portal de Vendas", "Verificar a nota de compra do cliente e a nota de devolução", "Giovanna", "Garantia"],
  ["Produtos", "Pesquisar peças", "Giovanna", "Garantia"]
];

const PROCEDIMENTOS = [
  {
    id: "p4001",
    code: "PAVBRSP.4001.26",
    title: "Pedido de Retorno de Cliente – Portal de Vendas",
    sigla: "4001",
    roles: ["Giovanna"],
    systems: ["Portal de Vendas", "Gerência de Produtos", "WMS", "Gerência do WMS"],
    summary: "Abertura e processamento de pedidos de retorno de clientes no Portal de Vendas, com encaminhamento ao WMS.",
    steps: [
      "Acessar o Portal de Vendas.",
      "Selecionar Tipo de Movimentação > Pedido de Venda e clicar em + Novo.",
      "Selecionar a TOP correspondente à operação.",
      "Informar CPF/CNPJ do cliente e o Tipo de Negociação 28 – Em Garantia.",
      "Preencher a observação com a referência da NF.",
      "Conferir transporte, itens, quantidade, valor, tributação e CFOP.",
      "Salvar e confirmar o pedido.",
      "Enviar o pedido ao WMS (Expedição), selecionar a Doca de Garantia e finalizar.",
      "Encaminhar o comprovante conforme a TOP utilizada."
    ]
  },
  {
    id: "p4002",
    code: "PAVBRSP.4002.26",
    title: "Pedido de Retorno de Cliente – Portal de Compras",
    sigla: "4002",
    roles: ["Giovanna"],
    systems: ["Portal de Compras", "Portal de Vendas", "WMS", "Gerência do WMS", "Gerência de Produtos"],
    summary: "Emissão de pedidos de retorno de clientes por meio do Portal de Compras, abrangendo a localização da NF e o envio ao WMS.",
    steps: [
      "Acessar o Portal de Compras e selecionar Tipo de Movimentação > Nota de Compra.",
      "Verificar a data do movimento e informar o número da NF de entrada.",
      "Aplicar o filtro e selecionar DEV. EST.",
      "Selecionar a TOP de retorno conforme o CFOP da NF.",
      "Confirmar o parceiro e selecionar Tipo de Negociação 28 – Em Garantia.",
      "Conferir transporte, itens, quantidade, tributação e CFOP.",
      "Confirmar o pedido, excluir a Ordem de Carga e confirmar novamente.",
      "Acessar o Portal de Vendas, pesquisar o número único e enviar ao WMS.",
      "Selecionar a Doca de Garantia e encaminhar o comprovante ao responsável pela separação."
    ]
  },
  {
    id: "p4003",
    code: "PAVBRSP.4003.26",
    title: "Pedido de Remessa para Conserto ou Garantia – Fornecedor",
    sigla: "4003",
    roles: ["Giovanna"],
    systems: ["Portal de Compras", "Portal de Vendas", "Gerência de Produtos", "Gerência do WMS"],
    summary: "Emissão de pedidos de remessa para conserto ou garantia destinados aos fornecedores.",
    steps: [
      "Acessar o Portal de Compras > Nota de Compra e localizar a NF.",
      "Selecionar DEV. EST. e a TOP correspondente: 2021 – Pedido Remessa Conserto ou 2024 – Pedido Remessa Garantia.",
      "Acessar Gerência de Produtos > Produtos e identificar o fornecedor.",
      "Retornar à Central de Vendas, confirmar o parceiro e selecionar Tipo de Negociação 28 – Em Garantia.",
      "Preencher transporte, itens, quantidade, valor, tributação e CFOP.",
      "Salvar e confirmar o pedido.",
      "Excluir a Ordem de Carga e confirmar novamente.",
      "Enviar o pedido ao WMS e selecionar a Doca de Garantia.",
      "Na Gerência do WMS, localizar o pedido, definir o executante conforme o procedimento e prioridade -9999."
    ]
  },
  {
    id: "p4004",
    code: "PAVBRSP.4004.26",
    title: "Emissão de Nota Fiscal de Retorno – Portal de Vendas",
    sigla: "4004",
    roles: ["Giovanna"],
    systems: ["Portal de Vendas", "Sankhya ERP", "Central de Vendas"],
    summary: "Emissão de Nota Fiscal de retorno no Portal de Vendas para remessa em garantia.",
    steps: [
      "Acessar o Portal de Vendas > Nota de Venda > + Novo.",
      "Selecionar a TOP 2048 – Saída Remessa Garantia (Sem Estoque).",
      "Informar CPF/CNPJ do cliente.",
      "Selecionar Tipo de Negociação 28 – Em Garantia.",
      "Informar a observação e a chave NF-e referenciada.",
      "Selecionar o próprio cliente como transportadora.",
      "Preencher produto, quantidade e valor conforme a NF de entrada.",
      "Validar tributação e CFOP.",
      "Salvar e confirmar a Nota Fiscal."
    ]
  },
  {
    id: "p4005",
    code: "PAVBRSP.4005.26",
    title: "Devolução de NF Própria",
    sigla: "4005",
    roles: ["Giovanna"],
    systems: ["Portal de Vendas", "Sankhya ERP", "Central de Vendas"],
    summary: "Devolução de Nota Fiscal própria por meio do Portal de Vendas.",
    steps: [
      "Estar com a Nota Fiscal da Pavoni em mãos.",
      "Acessar o Portal de Vendas > Nota de Venda e localizar a NF.",
      "Selecionar Dev./Est. e a TOP 1201 – Devolução de Venda (NF Própria).",
      "Clicar em Concluir para abrir a Central de Vendas.",
      "Utilizar o Tipo de Negociação 24.",
      "Preencher a observação com a referência da NF e o motivo, quando disponível.",
      "Salvar o cabeçalho com F7.",
      "Alterar o CFOP quando aplicável e conferir as informações.",
      "Confirmar a nota."
    ]
  },
  {
    id: "p4006",
    code: "PAVBRSP.4006.26",
    title: "Lançamento de Frete",
    sigla: "4006",
    roles: ["Giovanna"],
    systems: ["Portal de Importação", "ERP Sankhya"],
    summary: "Lançamento de fretes no sistema a partir das informações do CT-e.",
    steps: [
      "Acessar o Portal de Importação.",
      "Aplicar o filtro disponível e informar o número do CT-e.",
      "Aplicar novamente o filtro para localizar o documento.",
      "Informar o Código Tipo de Operação 1607.",
      "Preencher a data de vencimento.",
      "Acessar o Modo Grade pressionando F6.",
      "Conferir as informações inseridas.",
      "Clicar em Validar Importação para concluir o lançamento."
    ]
  },
  {
    id: "p4007",
    code: "PAVBRSP.4007.26",
    title: "Emissão de Etiquetas de Logística Reversa – Correios",
    sigla: "4007",
    roles: ["Giovanna"],
    systems: ["Portal dos Correios", "ERP Sankhya"],
    summary: "Emissão de etiquetas de logística reversa para clientes.",
    steps: [
      "Acessar o portal dos Correios.",
      "Selecionar Logística Reversa e Logística Reversa em Agência.",
      "Selecionar PAC Reverso e informar o CEP do remetente.",
      "Selecionar o cartão de postagem e preencher os dados do cliente.",
      "Conferir todas as informações.",
      "Enviar a solicitação para gerar a etiqueta.",
      "Enviar ao cliente o código gerado."
    ]
  },
  {
    id: "p4008",
    code: "PAVBRSP.4008.26",
    title: "Atendimento ao Cliente – Triagem de Garantia",
    sigla: "4008",
    roles: ["Giovanna"],
    systems: ["Sankhya ERP", "Formulário eletrônico de Garantia", "WhatsApp Corporativo", "E-mail"],
    summary: "Atendimento inicial das solicitações de garantia, conferência da documentação e encaminhamento para análise técnica.",
    steps: [
      "Orientar o cliente a abrir a solicitação pelo formulário oficial.",
      "Receber as informações enviadas pelo cliente.",
      "Conferir os dados obrigatórios.",
      "Validar Nota Fiscal, código da peça, descrição do problema e identificação do equipamento.",
      "Conferir fotografias e vídeos.",
      "Solicitar complementação quando houver informações ausentes.",
      "Registrar a ocorrência no controle interno do Pós-Vendas.",
      "Encaminhar a solicitação para análise técnica."
    ]
  },
  {
    id: "p4009",
    code: "PAVBRSP.4009.26",
    title: "Entrada de Garantia — NF de Terceiros",
    sigla: "4009",
    roles: ["Giovanna"],
    systems: ["Portal de Vendas", "Central de Vendas", "Central de Compras", "Sankhya ERP"],
    summary: "Entrada de garantia referente a Nota Fiscal de terceiros.",
    steps: [
      "Estar com a NF do cliente em mãos e localizar a NF de referência no Portal de Vendas.",
      "Selecionar Dev./Est. e a TOP 2147 – Entrada de Remessa em Garantia / NF de Terceiros.",
      "Concluir para abrir a Central de Compras.",
      "Utilizar Tipo de Negociação 28 – Em Garantia.",
      "Informar a NF do cliente, datas e Chave NF-e.",
      "Retornar ao Portal de Vendas para localizar e copiar a chave da NF referenciada.",
      "Inserir a chave na Central de Compras e salvar com F7.",
      "Alterar o CFOP conforme a operação.",
      "Conferir impostos e confirmar a operação."
    ]
  },
  {
    id: "p4011",
    code: "PAVBRSP.4011.26",
    title: "Padrão de Nomenclatura e Armazenamento de Arquivos",
    sigla: "4011",
    roles: ["Dmitri"],
    systems: ["Sankhya", "Pasta Imagens Sankhya", "Pasta Fotos_ML", "Banco de mídias"],
    summary: "Padronização da nomenclatura, organização e armazenamento de arquivos produzidos pelo setor de fotografia.",
    steps: [
      "Identificar os arquivos utilizando obrigatoriamente o número do PV.",
      "Não utilizar zeros à esquerda no PV.",
      "Nomear fotos do Mercado Livre conforme o padrão PV_ML, PV_ML1, PV_ML2 etc.",
      "Nomear fotos do sistema conforme PV, PV_B, PV_C, PV_D etc.",
      "Organizar fotos de medidas, desenhos técnicos e vídeos conforme os padrões do procedimento.",
      "Organizar a estrutura de pastas por Ano, Mês_Ano, Semana e Data.",
      "Seguir o fluxo de exportação, tratamento, nomenclatura e armazenamento.",
      "Conferir os arquivos e realizar backup anual antes da exclusão de pastas locais."
    ]
  },
  {
    id: "p4012",
    code: "PAVBRSP.4012.26",
    title: "Emissão de Nota Fiscal de Retorno – Portal de Compras",
    sigla: "4012",
    roles: ["Giovanna"],
    systems: ["Portal de Compras", "Sankhya ERP"],
    summary: "Emissão de Nota Fiscal de retorno por meio do Portal de Compras.",
    steps: [
      "Acessar o Portal de Compras > Nota de Compra.",
      "Verificar a data de negociação e localizar a NF de entrada.",
      "Selecionar DEV. EST.",
      "Selecionar a TOP 2162 – Retorno Remessa Para Garantia conforme o CFOP.",
      "Confirmar o parceiro e selecionar Tipo de Negociação 28 – Em Garantia.",
      "Preencher a observação e selecionar o próprio cliente como transportadora.",
      "Informar produto, quantidade e valor.",
      "Validar tributação e CFOP.",
      "Salvar e confirmar a Nota Fiscal."
    ]
  },
  {
    id: "p4013",
    code: "PAVBRSP.4013.26",
    title: "Retorno de Conserto e Garantia de Fornecedor",
    sigla: "4013",
    roles: ["Giovanna"],
    systems: ["Sankhya ERP", "Portal de Vendas", "Gerência", "Central de Compras", "Central de Vendas"],
    summary: "Entrada de notas fiscais relacionadas a retorno de conserto e garantia de fornecedor no Sankhya.",
    steps: [
      "Receber a Nota Fiscal encaminhada pela conferência.",
      "Estar com a Nota Fiscal física e os dados da operação em mãos.",
      "Localizar a NF de referência no Portal de Vendas.",
      "Utilizar a TOP 1259 – Retorno de Conserto / Garantia.",
      "Conferir a Nota Fiscal e os dados fiscais.",
      "Realizar o lançamento no sistema conforme o procedimento.",
      "Conferir CFOP, tributação e demais informações.",
      "Realizar a conferência final antes da confirmação."
    ]
  }
];

let activeResponsible = "Todos";

const main = document.getElementById("main");
const toc = document.getElementById("toc");
const filters = document.getElementById("responsibleFilters");
const search = document.getElementById("search");
const clearSearch = document.getElementById("clearSearch");
const searchCount = document.getElementById("searchCount");
const noResults = document.getElementById("noResults");
const noResultsTerm = document.getElementById("noResultsTerm");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderFilters() {
  filters.innerHTML = RESPONSAVEIS.map((name) => `
    <button class="chip ${name === activeResponsible ? "active" : ""}"
            data-responsible="${escapeHtml(name)}">
      <span class="dot"></span>${escapeHtml(name)}
    </button>
  `).join("");
}

function renderIndex() {
  toc.innerHTML = `
    <a href="#responsaveis">
      <span class="toc-code">01</span>
      <span>Responsáveis</span>
    </a>

    <a href="#procedimentos">
      <span class="toc-code">02</span>
      <span>Procedimentos</span>
    </a>

    <a href="#mapeamento-sankhya">
      <span class="toc-code">03</span>
      <span>Mapeamento geral do Sankhya</span>
    </a>

    ${PROCEDIMENTOS.map((p, i) => `
      <a href="#${p.id}">
        <span class="toc-code">${String(i + 1).padStart(2, "0")}</span>
        <span>${escapeHtml(p.title)}</span>
      </a>
    `).join("")}
  `;
}

function renderResponsibleTable() {
  return `
    <section class="section" id="responsaveis">
      <div class="section-heading">
        <span class="section-number">1</span>
        <h2>Responsáveis</h2>
      </div>

      <div class="responsible-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Atividade</th>
              <th>Responsável principal</th>
              <th>Apoio / secundário</th>
            </tr>
          </thead>
          <tbody>
            ${RESPONSAVEIS_ATIVIDADES.map(row => `
              <tr>
                <td>${escapeHtml(row[0])}</td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderMappingTable() {
  // Agrupar mapeamentos por funcionário
  const grouped = {};
  MAPEAMENTO_SANKHYA.forEach(row => {
    const resp = row[2];
    if (!grouped[resp]) grouped[resp] = [];
    grouped[resp].push({ tela: row[0], uso: row[1], area: row[3] });
  });

  const cardsHtml = Object.keys(grouped).map(resp => {
    const items = grouped[resp];
    const searchText = items.map(i => `${i.tela} ${i.uso} ${i.area}`).join(" ").toLowerCase() + " " + resp.toLowerCase();

    return `
      <div class="sankhya-card" data-responsible="${escapeHtml(resp)}" data-search="${escapeHtml(searchText)}">
        <div class="sankhya-card-head" tabindex="0" role="button" aria-expanded="false">
          <div class="sankhya-card-info">
            <strong class="sankhya-card-name">${escapeHtml(resp)}</strong>
            <span class="sankhya-card-count">${items.length} tela(s) associada(s)</span>
          </div>
          <span class="sankhya-chevron">▼</span>
        </div>
        <div class="sankhya-card-body">
          <div class="responsible-table-wrap">
            <table class="mapping-table">
              <thead>
                <tr>
                  <th>Tela / módulo</th>
                  <th>Utilização</th>
                  <th>Área</th>
                </tr>
              </thead>
              <tbody>
                ${items.map(item => `
                  <tr>
                    <td><strong>${escapeHtml(item.tela)}</strong></td>
                    <td>${escapeHtml(item.uso)}</td>
                    <td>${escapeHtml(item.area)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }).join("");

  return `
    <section class="section" id="mapeamento-sankhya">
      <div class="section-heading">
        <span class="section-number">3</span>
        <h2>Mapeamento geral do Sankhya</h2>
      </div>

      <div class="mapping-intro">
        <p>Clique no funcionário para abrir o mapeamento de telas correspondente.</p>
      </div>

      <div class="sankhya-accordion-list">
        ${cardsHtml}
      </div>
    </section>
  `;
}

function renderProcedure(p) {
  const searchText = [
    p.code,
    p.sigla,
    p.title,
    p.summary,
    p.roles.join(" "),
    p.systems.join(" "),
    p.steps.join(" ")
  ].join(" ").toLowerCase();

  return `
    <article class="proc"
             id="${p.id}"
             data-search="${escapeHtml(searchText)}"
             data-roles="${escapeHtml(p.roles.join("|"))}">

      <div class="proc-head" tabindex="0" role="button"
           aria-expanded="false">

        <span class="proc-code">${escapeHtml(p.code)}</span>
        <span class="proc-title">${escapeHtml(p.title)}</span>

        <span class="roles">
          ${p.roles.map(r => `<span class="role">${escapeHtml(r)}</span>`).join("")}
        </span>

        <span class="chevron">›</span>
      </div>

      <div class="proc-body">
        <div class="meta">
          <div class="meta-item">
            <span class="label">Sistema</span>
            <span class="value">${p.systems.map(escapeHtml).join(", ")}</span>
          </div>

          <div class="meta-item">
            <span class="label">Responsável</span>
            <span class="value">${p.roles.map(escapeHtml).join(", ")}</span>
          </div>

          <div class="meta-item">
            <span class="label">Sigla / documento</span>
            <span class="value">${escapeHtml(p.sigla)} / ${escapeHtml(p.code)}</span>
          </div>
        </div>

        <h4>Objetivo / resumo</h4>
        <p>${escapeHtml(p.summary)}</p>

        <h4>Procedimento</h4>
        <ol>
          ${p.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}
        </ol>
      </div>
    </article>
  `;
}

function render() {
  main.innerHTML = `
    ${renderResponsibleTable()}

    <section class="section" id="procedimentos">
      <div class="section-heading">
        <span class="section-number">2</span>
        <h2>Procedimentos</h2>
      </div>

      ${PROCEDIMENTOS.map(renderProcedure).join("")}
    </section>

    ${renderMappingTable()}
  `;

  renderFilters();
  renderIndex();
}

function toggleProcedure(article) {
  article.classList.toggle("open");
  const head = article.querySelector(".proc-head");
  head.setAttribute("aria-expanded", article.classList.contains("open"));
}

function toggleSankhyaCard(card) {
  card.classList.toggle("open");
  const head = card.querySelector(".sankhya-card-head");
  head.setAttribute("aria-expanded", card.classList.contains("open"));
}

function applyFilters() {
  const term = search.value.trim().toLowerCase();
  const articles = [...document.querySelectorAll(".proc")];
  const sankhyaCards = [...document.querySelectorAll(".sankhya-card")];

  let visible = 0;

  articles.forEach(article => {
    const roles = article.dataset.roles.split("|");
    const text = article.dataset.search;

    const responsibleOk =
      activeResponsible === "Todos" ||
      roles.includes(activeResponsible);

    const searchOk =
      !term || text.includes(term);

    const show = responsibleOk && searchOk;

    article.classList.toggle("hidden", !show);

    if (show) visible++;

    if (term && show) {
      article.classList.add("open");
      article.querySelector(".proc-head").setAttribute("aria-expanded", "true");
    }
  });

  sankhyaCards.forEach(card => {
    const cardResponsible = card.dataset.responsible;
    const cardText = card.dataset.search;

    const responsibleOk =
      activeResponsible === "Todos" ||
      cardResponsible === activeResponsible;

    const searchOk =
      !term || cardText.includes(term);

    const show = responsibleOk && searchOk;
    card.classList.toggle("hidden", !show);

    if (term && show) {
      card.classList.add("open");
      card.querySelector(".sankhya-card-head").setAttribute("aria-expanded", "true");
    }
  });

  clearSearch.style.display = term ? "block" : "none";

  searchCount.textContent =
    term || activeResponsible !== "Todos"
      ? `${visible} procedimento(s) encontrado(s)`
      : "";

  noResults.classList.toggle("hidden", visible !== 0);

  if (visible === 0) {
    noResultsTerm.textContent =
      term ? `"${search.value}"` : activeResponsible;
  }
}

filters.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;

  activeResponsible = chip.dataset.responsible;
  renderFilters();
  applyFilters();
});

main.addEventListener("click", (event) => {
  const procHead = event.target.closest(".proc-head");
  if (procHead) {
    toggleProcedure(procHead.closest(".proc"));
    return;
  }

  const sankhyaHead = event.target.closest(".sankhya-card-head");
  if (sankhyaHead) {
    toggleSankhyaCard(sankhyaHead.closest(".sankhya-card"));
    return;
  }
});

main.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    const procHead = event.target.closest(".proc-head");
    if (procHead) {
      event.preventDefault();
      toggleProcedure(procHead.closest(".proc"));
      return;
    }

    const sankhyaHead = event.target.closest(".sankhya-card-head");
    if (sankhyaHead) {
      event.preventDefault();
      toggleSankhyaCard(sankhyaHead.closest(".sankhya-card"));
      return;
    }
  }
});

search.addEventListener("input", applyFilters);

clearSearch.addEventListener("click", () => {
  search.value = "";
  applyFilters();
  search.focus();
});

render();
applyFilters();