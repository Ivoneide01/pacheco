// Importar as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";

// Configuração do Firebase
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDgXqWqvpWHBgudWNpM0HOONsx8LcQB-NI",
    authDomain: "pacheco7-b02a9.firebaseapp.com",
    projectId: "pacheco7-b02a9",
    storageBucket: "pacheco7-b02a9.appspot.com",
    messagingSenderId: "598150952481",
    appId: "1:598150952481:web:19072c24caa66f87d59560",
    measurementId: "G-4S16Z6NBND"
  };

// Inicializar o aplicativo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obter referência ao banco de dados
const db = getDatabase(app);

// Função para enviar dados do formulário para o Firebase
export function enviarDadosFormulario(name) {
  const contatosRef = ref(db, 'contatos'); // Referência à coleção 'contatos'
  return push(contatosRef, {
    nome: name
  });
}