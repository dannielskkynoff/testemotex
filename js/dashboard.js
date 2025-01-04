function chamarEntregador() {
    document.getElementById("popup").style.display = "flex";
}

// Quando o botão de pagamento "Dinheiro" for selecionado
const dinheiroRadio = document.getElementById("dinheiro");
const campoTroco = document.getElementById("campoTroco");

dinheiroRadio.addEventListener("change", function() {
    if (dinheiroRadio.checked) {
        campoTroco.style.display = "block";
    } else {
        campoTroco.style.display = "none";
    }
});

// Fechar popup
document.getElementById("popup").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
