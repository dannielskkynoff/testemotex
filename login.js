// Função para realizar login com Firebase Authentication
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessageElement = document.getElementById("error-message");

    // Limpa mensagens de erro anteriores
    errorMessageElement.textContent = "";

    // Faz login com Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log("Login bem-sucedido:", userCredential);
            window.location.href = "dashboard.html"; // Redireciona para o painel
        })
        .catch((error) => {
            console.error("Erro ao fazer login:", error);
            errorMessageElement.textContent = "Erro: " + error.message;
        });
});
