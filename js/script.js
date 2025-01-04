// Abrir o popup ao clicar no botão "Chamar Entregador"
document.getElementById("chamar-entregador-btn").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});

// Fechar o popup ao clicar no botão de fechar (X)
document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});

// Mostrar o campo de troco ao selecionar "Dinheiro"
document.getElementById("dinheiro").addEventListener("change", function () {
    const trocoContainer = document.getElementById("troco-container");
    trocoContainer.style.display = this.checked ? "block" : "none";
});

// Validar e confirmar pedido ao clicar no botão
document.getElementById("confirmar-pedido").addEventListener("click", function () {
    const nomeCliente = document.getElementById("nome-cliente").value.trim();
    const telefoneCliente = document.getElementById("telefone-cliente").value.trim();
    const bairroCliente = document.getElementById("bairro-cliente").value.trim();
    const ruaCliente = document.getElementById("rua-cliente").value.trim();

    if (!nomeCliente || !telefoneCliente || !bairroCliente || !ruaCliente) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return;
    }

    if (document.getElementById("dinheiro").checked) {
        const troco = document.getElementById("troco").value.trim();
        if (!troco || isNaN(troco)) {
            alert("Por favor, insira um valor válido para o troco!");
            return;
        }
    }

    alert("Pedido confirmado com sucesso!");
    document.getElementById("popup").style.display = "none";
});
