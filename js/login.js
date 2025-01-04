// Função de login
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessageElement = document.getElementById("error-message");

    // Limpar a mensagem de erro
    errorMessageElement.textContent = "";

    // Verificar login com Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            console.log("Login bem-sucedido", userCredential);
            window.location.href = "dashboard.html"; // Substitua pelo seu painel
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // Exibir erro se houver
            console.error("Erro ao fazer login:", errorCode, errorMessage);
            errorMessageElement.textContent = "Erro ao fazer login: " + errorMessage;
        });
}
