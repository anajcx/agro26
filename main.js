document.addEventListener('DOMContentLoaded', () => {
    const btnSimular = document.getElementById('btnSimular');
    const resultadoBox = document.getElementById('resultadoSimulacao');

    // Dados fictícios baseados em métricas reais de agropecuária sustentável
    const dadosSimulacao = [
        {
            titulo: "Tecnologia de Precisão Aplicada",
            impacto: "Aumento de 22% na produtividade e redução de 15% no uso de água.",
            dica: "Dica: O uso de sensores de solo evita o desperdício de recursos hídricos."
        },
        {
            titulo: "Integração Lavoura-Pecuária (ILP)",
            impacto: "Recuperação biológica do solo e ganho de peso do gado 30% mais rápido.",
            dica: "Dica: Alternar pasto com plantio renova o nitrogênio da terra naturalmente."
        },
        {
            titulo: "Uso de Bioinsumos",
            impacto: "Redução de 40% na dependência de fertilizantes químicos tradicionais.",
            dica: "Dica: Defensivos biológicos protegem a fauna local e mantêm o solo vivo."
        }
    ];

    btnSimular.addEventListener('click', () => {
        // Sorteia um cenário técnico para mostrar a força do agro sustentável
        const cenarioAleatorio = dadosSimulacao[Math.floor(Math.random() * dadosSimulacao.length)];
        
        // Insere o conteúdo no HTML dinamicamente
        resultadoBox.innerHTML = `
            <h3 style="color: #2e7d32; margin-bottom: 10px;">${cenarioAleatorio.titulo}</h3>
            <p><strong>Impacto Estimado:</strong> ${cenarioAleatorio.impacto}</p>
            <p style="font-style: italic; color: #666; margin-top: 8px; font-size: 0.9rem;">${cenarioAleatorio.dica}</p>
        `;
        
        // Remove a classe 'hidden' para exibir a caixa com efeito
        resultadoBox.classList.remove('hidden');
    });
});