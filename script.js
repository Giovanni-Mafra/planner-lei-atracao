// Aguarda que o documento esteja carregado
document.addEventListener('DOMContentLoaded', () => {
    
    const botaoComprar = document.getElementById('btn-comprar');

    // Adiciona um evento de clique
    botaoComprar.addEventListener('click', (event) => {
        // Por agora, apenas mostra uma mensagem. 
        // No futuro, podes trocar pelo link do Stripe/PayPal
        console.log("O utilizador tem interesse no planner!");
        alert("Parabéns por dares o primeiro passo para manifestar os teus sonhos!");
    });

});