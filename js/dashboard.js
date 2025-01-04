function openPopup(tipo) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const trocoContainer = document.getElementById('troco-container');

    popup.style.display = 'flex';

    if (tipo === 'chamar') {
        popupTitle.textContent = 'Chamar Entregador';
    } else if (tipo === 'configuracoes') {
        popupTitle.textContent = 'Configurações';
    } else if (tipo === 'perfil') {
        popupTitle.textContent = 'Ver Perfil';
    } else if (tipo === 'relatorios') {
        popupTitle.textContent = 'Ver Relatórios';
    }
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('popup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Pedido enviado!");
    fecharPopup();
});

document.getElementById('pagamento').addEventListener('change', function () {
    const pagamento = this.value;
    const trocoContainer = document.getElementById('troco-container');

    if (pagamento === 'dinheiro') {
        trocoContainer.style.display = 'block';
    } else {
        trocoContainer.style.display = 'none';
    }
});

function sair() {
    alert("Saindo...");
    // Aqui você pode implementar a lógica para sair ou redirecionar para a página de login.
}
