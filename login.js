document.addEventListener('DOMContentLoaded', function() { // Removido o parêntese extra no início e adicionado um no final
    // 1. Obter referências aos elementos do DOM
    const formulario = document.getElementById("loginform"); // Corrigido 'fomulario' para 'formulario' e ID 'loginform' para 'loginForm' (case-sensitive)
    const emailInput = document.getElementById("email");     // Corrigido 'email' para 'emailInput' para evitar conflito com a constante 'email' interna
    const senhaInput = document.getElementById("senha");     // Corrigido 'senha' para 'senhaInput' para evitar conflito com a constante 'senha' interna
    const mensagemErroDiv = document.getElementById('mensagemErro');

    // É importante verificar se os elementos foram encontrados.
    // Isso evita erros se você esqueceu um ID no HTML.
    if (!formulario || !emailInput || !senhaInput || !mensagemErroDiv) {
        console.error("Erro: Um ou mais elementos do formulário não foram encontrados no HTML. Verifique os IDs.");
        return; // Sai da função se os elementos não existirem
    }

    // 2. Adicionar um "ouvinte de evento" ao formulário para quando ele for submetido
    // A referência ao formulário deve ser a constante 'formulario' que você declarou acima.
    formulario.addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();

        // Limpa mensagens de erro anteriores
        mensagemErroDiv.textContent = '';
        mensagemErroDiv.style.display = 'none';

        // 3. Capturar os valores digitados pelo usuário
        // Use as variáveis com 'Input' no nome para pegar os valores dos campos
        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

        // 4. Realizar validações no lado do cliente
        if (email === '' || senha === '') {
            exibirMensagemErro('Por favor, preencha todos os campos.');
            return; // Interrompe a execução se houver erro
        }

        // Validação simples de formato de e-mail (não é infalível, mas ajuda)
        //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       // if (!emailRegex.test(email)) {
          //  exibirMensagemErro('Por favor, insira um e-mail válido.');
         //   return;
       // }

        // Simulação de autenticação (em um ambiente real, você enviaria para um servidor)
        if (email === 'junior87721727@gmail.com' && senha === 'senha123') {
                
            alert('Login bem-sucedido!'); // Mensagem de sucesso
            // Em um ambiente real, você redirecionaria o usuário para outra página.
            // O redirecionamento abaixo deve ser aqui, DENTRO do if de sucesso.
            window.location.href = 'index.html'; // Redireciona APENAS se o login for bem-sucedido
        } else {
            exibirMensagemErro('E-mail ou senha incorretos.');
        }
    });

    // Função auxiliar para exibir mensagens de erro
    function exibirMensagemErro(mensagem) {
        mensagemErroDiv.textContent = mensagem;
        mensagemErroDiv.style.display = 'block'; // Mostra a div de erro
    }

    // O window.location.href = "index.html"; estava fora da lógica de sucesso,
    // o que faria a página redirecionar imediatamente após o carregamento do script,
    // independentemente do login. Ele foi movido para dentro do 'if' de sucesso.
}); // Adicionado o parêntese de fechamento da função do DOMContentLoaded