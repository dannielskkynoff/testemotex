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

// Mostrar/ocultar campo de troco
function toggleTroco(checkbox) {
    const trocoGroup = document.getElementById('trocoGroup');
    if (checkbox.checked && checkbox.value === 'dinheiro') {
        trocoGroup.style.display = 'block';
    } else {
        trocoGroup.style.display = 'none';
    }
}

// Enviar dados do formulário
function enviarDados(event) {
    event.preventDefault();
    alert('Dados enviados com sucesso!');
    fecharPopup();
}
