function mostrarCampoPagamento(forma) {
    // Ocultar todos os campos primeiro
    document.getElementById('pixValorContainer').style.display = 'none';
    document.getElementById('cartaoValorContainer').style.display = 'none';
    document.getElementById('trocoContainer').style.display = 'none';

    // Mostrar o campo correspondente
    if (forma === 'pix') {
        document.getElementById('pixValorContainer').style.display = 'block';
    } else if (forma === 'cartao') {
        document.getElementById('cartaoValorContainer').style.display = 'block';
    } else if (forma === 'dinheiro') {
        document.getElementById('trocoContainer').style.display = 'block';
    }
}

// Lógica para enviar o formulário de pedido
document.getElementById('chamarForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formaPagamento = document.querySelector('input[name="pagamento"]:checked');
    if (!formaPagamento) {
        alert('Selecione uma forma de pagamento!');
        return;
    }

    const pagamentoEscolhido = formaPagamento.id;
    let valor = null;

    if (pagamentoEscolhido === 'pix') {
        valor = document.getElementById('pixValor').value;
        if (!valor || valor <= 0) {
            alert('Informe o valor do Pix!');
            return;
        }
    } else if (pagamentoEscolhido === 'cartao') {
        valor = document.getElementById('cartaoValor').value;
        if (!valor || valor <= 0) {
            alert('Informe o valor do Cartão!');
            return;
        }
    } else if (pagamentoEscolhido === 'dinheiro') {
        valor = document.getElementById('troco').value;
        if (!valor || valor <= 0) {
            alert('Informe o valor do troco!');
            return;
        }
    }

    alert(`Pedido enviado com sucesso! Forma de pagamento: ${pagamentoEscolhido}, Valor: ${valor || 'Não especificado'}`);
    fecharTelaLateral();
});
