function abrirTelaLateral() {
    document.getElementById('sidePanel').style.display = 'block';
}

function fecharTelaLateral() {
    document.getElementById('sidePanel').style.display = 'none';
}

function logout() {
    // Lógica de logout
    alert('Logout realizado');
    window.location.href = "index.html"; // Redireciona para o login
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
    fecharTelaLateral();
});
