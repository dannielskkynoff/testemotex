// login.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Configuração do Firebase (modifique com suas credenciais)
const firebaseConfig = {
  apiKey: "AIzaSyCjDxtzK9ELCyxLNgmd0ZYDhB1o-bPLWr8",
  authDomain: "nuxpro-gestao-de-entregas.firebaseapp.com",
  projectId: "nuxpro-gestao-de-entregas",
  storageBucket: "nuxpro-gestao-de-entregas.firebasestorage.app",
  messagingSenderId: "483551326765",
  appId: "1:483551326765:web:e77ef1e29d69f58efa7ea4",
  measurementId: "G-FVR4EXZR93"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Lógica do Formulário de Login
const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuário logado:', user);
            window.location.href = 'dashboard.html';  // Redireciona para o painel após login bem-sucedido
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
            alert("Falha ao fazer login. Verifique suas credenciais.");
        });
});
