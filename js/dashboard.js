function chamarEntregador() {
    document.getElementById('popup').style.display = 'block';
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}

function logout() {
    // Adicione sua lógica de logout aqui
    alert('Logout realizado');
    window.location.href = "index.html"; // redireciona para a tela de login
}

function mostrarTroco() {
    const dinheiroCheckbox = document.getElementById('dinheiro');
    const trocoContainer = document.getElementById('trocoContainer');
    trocoContainer.style.display = dinheiroCheckbox.checked ? 'block' : 'none';
}

// Lógica para enviar o formulário do pedido (caso necessário)
document.getElementById('chamarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pedido enviado!');
    fecharPopup();
});
