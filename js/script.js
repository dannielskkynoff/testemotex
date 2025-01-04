function openPopup() {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup").querySelector(".popup-content").style.transform = "scale(1)";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function togglePaymentFields() {
    const isPix = document.getElementById("pix").checked;
    const isCard = document.getElementById("card").checked;
    const isCash = document.getElementById("cash").checked;

    document.getElementById("payment-amount-fields").style.display = isPix || isCard ? "block" : "none";
    document.getElementById("cash-field").style.display = isCash ? "block" : "none";
}

function submitOrder() {
    alert("Pedido enviado com sucesso!");
    closePopup();
}
