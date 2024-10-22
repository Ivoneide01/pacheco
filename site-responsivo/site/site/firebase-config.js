// Importar as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";

// Configuração do Firebase
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAaXaQYKDPuW_Ml6WrnDrCx12mVydBm-wU",
    authDomain: "dhavin-new.firebaseapp.com",
    databaseURL: "https://dhavin-new-default-rtdb.firebaseio.com",
    projectId: "dhavin-new",
    storageBucket: "dhavin-new.appspot.com",
    messagingSenderId: "1048204239667",
    appId: "1:1048204239667:web:438f8e90edb1f613e51446",
    measurementId: "G-52Y0REFPRT"
  };

// Inicializar o aplicativo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obter referência ao banco de dados
const db = getDatabase(app);

// Função para enviar dados do formulário para o Firebase
export function enviarDadosFormulario(name, email) {
  const contatosRef = ref(db, 'contatos'); // Referência à coleção 'contatos'
  return push(contatosRef, {
    nome: name,
    email: email
  });
}