function openPopup(tipo) {
    const popup = document.getElementById('popup');
    const configPopup = document.getElementById('config-popup');
    const popupTitle = document.getElementById('popup-title');
    const trocoContainer = document.getElementById('troco-container');

    if (tipo === 'chamar') {
        popup.style.display = 'flex';
        popupTitle.textContent = 'Chamar Entregador';
    } else if (tipo === 'configuracoes') {
        configPopup.style.display = 'flex';
    } else if (tipo === 'perfil') {
        popup.style.display = 'flex';
        popupTitle.textContent = 'Ver Perfil';
    } else if (tipo === 'relatorios') {
        popup.style.display = 'flex';
        popupTitle.textContent = 'Ver Relatórios';
    }
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('config-popup').style.display = 'none';
}

document.getElementById('theme-switch').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
});

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
