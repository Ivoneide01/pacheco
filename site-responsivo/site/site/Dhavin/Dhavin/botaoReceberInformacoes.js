document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("formularioContato");
    var message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o comportamento padrão de submissão do formulário

        // Captura os valores dos campos do formulário
        const name = form.elements["name"].value;
        const email = form.elements["email"].value;

        // Chama a função para enviar dados para o Firebase
        enviarDadosParaFirebase(name, email)
            .then(() => {
                console.log('Dados do formulário de contato enviados com sucesso!');
                // Exibe a mensagem de sucesso
                message.style.display = "block";
                // Opcional: oculta a mensagem após 3 segundos
                setTimeout(function() {
                    message.style.display = 'none';
                }, 3000);
                // Limpa o formulário após o envio
                form.reset();
            })
            .catch((error) => {
                console.error('Erro ao enviar dados do formulário de contato:', error);
            });
    });
});

// Definição da função enviarDadosParaFirebase
function enviarDadosParaFirebase(name, email) {
    // Implementação para enviar os dados para o Firebase
    console.log("Enviando dados para o Firebase...", { name, email });
    return new Promise((resolve, reject) => {
        // Aqui você deve incluir a lógica para enviar os dados para o Firebase
        // Simulando um envio bem-sucedido com setTimeout
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
