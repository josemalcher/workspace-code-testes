var input = {
    Nome: $('[name="Nome"]'),
    Mnemonico: $('[name="Mnemonico"]'),
}

var documento = $(document);
var linhas = $("#tabela tbody");

documento.on("click", "[data-acao='adicionar']", function onAdicionarClick() {
    var item = {
        Nome: input.Nome.val(),
        Mnemonico: input.Mnemonico.val()
    };

    if ($.trim(item.Nome) == "" || $.trim(item.Mnemonico) == "") {
        return;
    }

    var linha = $("<tr>");
    var nome = $("<td>").attr("data-column", "Nome");
    var mnemonico = $("<td>").attr("data-column", "Mnemonico");
    var acoes = $("<td>").attr("data-column", "Acoes");
    var editar = $("<button>").attr("data-acao", "editar").html("Editar");
    var excluir = $("<button>").attr("data-acao", "excluir").html("Excluir");

    nome.html(item.Nome).data("value", item.Nome);
    mnemonico.html(item.Mnemonico).data("value", item.Mnemonico);
    acoes.append(editar).append(excluir);

    linha.append(nome);
    linha.append(mnemonico);
    linha.append(acoes);

    linhas.append(linha);
    return false;
});

documento.on("click", "[data-acao='editar']", function onEditarClick() {
    var self = $(this);
    var linha = self.closest("tr");
    var nome = $("[data-column='Nome']", linha);
    var mnemonico = $("[data-column='Mnemonico']", linha);
    var acoes = $("[data-column='Acoes']", linha);
    var cancelar = $("<button>").attr("data-acao", "cancelar").html("Cancelar");
    var confirmar = $("<button>").attr("data-acao", "confirmar").html("Confirmar");

    var input =  {
        Nome: $("<input>").attr("type", "text").val(nome.data("value")),
        Mnemonico: $("<input>").attr("type", "text").val(mnemonico.data("value")),
    }
    nome.empty().append(input.Nome);
    mnemonico.empty().append(input.Mnemonico);
    acoes.empty().append(cancelar).append(confirmar);
    return false;
});

documento.on("click", "[data-acao='excluir']", function onExcluirClick() {
    var self = $(this);
    var linha = self.closest("tr");
    linha.remove();
    return false;
});

documento.on("click", "[data-acao='cancelar']", function onEditarClick() {
    var self = $(this);
    var linha = self.closest("tr");
    var nome = $("[data-column='Nome']", linha);
    var mnemonico = $("[data-column='Mnemonico']", linha);
    var acoes = $("[data-column='Acoes']", linha);
    var editar = $("<button>").attr("data-acao", "editar").html("Editar");
    var excluir = $("<button>").attr("data-acao", "excluir").html("Excluir");

    nome.empty().html(nome.data("value"));
    mnemonico.empty().html(mnemonico.data("value"));
    acoes.empty().append(editar).append(excluir);
    return false;
});

documento.on("click", "[data-acao='confirmar']", function onEditarClick() {
    var self = $(this);
    var linha = self.closest("tr");
    var nome = $("[data-column='Nome']", linha);
    var mnemonico = $("[data-column='Mnemonico']", linha);
    var acoes = $("[data-column='Acoes']", linha);
    var editar = $("<button>").attr("data-acao", "editar").html("Editar");
    var excluir = $("<button>").attr("data-acao", "excluir").html("Excluir");

    var input =  {
        Nome: $("input", nome),
        Mnemonico: $("input", mnemonico)
    };

    nome.data("value", input.Nome.val());
    mnemonico.data("value", input.Mnemonico.val());

    nome.empty().html(nome.data("value"));
    mnemonico.empty().html(mnemonico.data("value"));
    acoes.empty().append(editar).append(excluir);
    return false;
});