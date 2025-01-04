// Abrir o popup
function abrirPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Torna o popup visível
}

// Fechar o popup
function fecharPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Esconde o popup
}

// Confirmar a chamada do entregador
function confirmarChamada() {
    alert('Entregador chamado com sucesso!');
    fecharPopup();
}

// Placeholder para os outros botões
function abrirConfiguracoes() {
    alert('Abrir configurações (em desenvolvimento)');
}

function abrirPerfil() {
    alert('Ver perfil (em desenvolvimento)');
}

function abrirRelatorios() {
    alert('Ver relatórios (em desenvolvimento)');
}
