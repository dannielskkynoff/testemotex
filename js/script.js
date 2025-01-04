document.getElementById("chamar-entregador-btn").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});

document.getElementById("dinheiro").addEventListener("change", function () {
    const trocoContainer = document.getElementById("troco-container");
    trocoContainer.style.display = this.checked ? "block" : "none";
});
