// Abrir o popup ao clicar no botão "Chamar Entregador"
document.getElementById("chamar-entregador-btn").addEventListener("click", function () {
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; // Torna o popup visível
});

// Fechar o popup ao clicar no botão de fechar (X)
document.getElementById("close-popup").addEventListener("click", function () {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Oculta o popup
});

// Exibir o campo "Valor do Troco" quando a opção "Dinheiro" for selecionada
document.getElementById("dinheiro").addEventListener("change", function () {
    const trocoContainer = document.getElementById("troco-container");
    if (this.checked) {
        trocoContainer.style.display = "block"; // Exibe o campo de troco
    } else {
        trocoContainer.style.display = "none"; // Oculta o campo de troco
    }
});

// Evento de validação e confirmação ao clicar em "Confirmar Pedido"
document.getElementById("confirmar-pedido").addEventListener("click", function () {
    // Captura os valores preenchidos nos campos
    const nomeCliente = document.getElementById("nome-cliente").value.trim();
    const telefoneCliente = document.getElementById("telefone-cliente").value.trim();
    const bairroCliente = document.getElementById("bairro-cliente").value.trim();
    const ruaCliente = document.getElementById("rua-cliente").value.trim();
    const numeroCasa = document.getElementById("numero-casa").value.trim();
    const linkLocalizacao = document.getElementById("link-localizacao").value.trim();

    // Verifica se os campos obrigatórios foram preenchidos
    if (!nomeCliente || !telefoneCliente || !bairroCliente || !ruaCliente) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return; // Interrompe a execução caso haja campos obrigatórios vazios
    }

    // Captura as opções de pagamento selecionadas
    const pagamentoPix = document.getElementById("pix").checked;
    const pagamentoCartao = document.getElementById("cartao").checked;
    const pagamentoDinheiro = document.getElementById("dinheiro").checked;
    const pagamentoPago = document.getElementById("pago").checked;

    // Verifica se o troco foi informado, caso "Dinheiro" esteja selecionado
    if (pagamentoDinheiro) {
        const valorTroco = document.getElementById("troco").value.trim();
        if (!valorTroco || isNaN(valorTroco)) {
            alert("Por favor, informe o valor do troco!");
            return; // Interrompe a execução caso o valor do troco não seja válido
        }
    }

    // Exemplo de confirmação (simula o envio dos dados)
    alert("Pedido confirmado com sucesso!");

    // Fecha o popup após a confirmação
    const popup = document.getElementById("popup");
    popup.style.display = "none";

    // Opcional: Limpa os campos do formulário após confirmar
    document.getElementById("nome-cliente").value = "";
    document.getElementById("telefone-cliente").value = "";
    document.getElementById("bairro-cliente").value = "";
    document.getElementById("rua-cliente").value = "";
    document.getElementById("numero-casa").value = "";
    document.getElementById("link-localizacao").value = "";
    document.getElementById("pix").checked = false;
    document.getElementById("cartao").checked = false;
    document.getElementById("dinheiro").checked = false;
    document.getElementById("pago").checked = false;
    document.getElementById("troco").value = "";
    document.getElementById("troco-container").style.display = "none"; // Oculta o campo de troco
});
