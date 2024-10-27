// Adicionar evento de envio ao formulário
const formContato = document.getElementById('formularioContato');
const confirmationMessage = document.getElementById('confirmationMessage');

formContato.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = formContato['name'].value;

    // Enviar os dados para o Firebase Realtime Database
    enviarDadosFormulario(nome)
        .then(() => {
            console.log('Dados do formulário de contato enviados com sucesso!');
            confirmationMessage.style.display = "block"; // Exibir mensagem de confirmação
            formContato.reset(); // Limpar o formulário após o envio
        })
        .catch((error) => {
            console.error('Erro ao enviar dados do formulário de contato:', error);
        });
});

