function converterValor(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura o valor do input e substitui vírgula por ponto para valores decimais
    const amountInput = document.getElementById('amount').value.replace(',', '.');
    const amount = parseFloat(amountInput); // Converte o valor para número

    // Captura a moeda selecionada e seu valor de referência
    const currencySelect = document.getElementById('currency');
    const selectedCurrency = currencySelect.options[currencySelect.selectedIndex];
    const openValue = parseFloat(selectedCurrency.getAttribute('data-open'));

    // Verifica se o valor de entrada é válido
    if (!isNaN(amount) && !isNaN(openValue)) {
        // Realiza a conversão de moeda
        const convertedValue = (amount / openValue).toFixed(2);

        // Define a descrição do país com base na moeda
        const description = {
            "USD": "Estados Unidos",
            "EUR": "Europa",
            "GBP": "Inglaterra"
        }[selectedCurrency.value] || "Desconhecido";

        // Atualiza o rodapé com o resultado da conversão
        document.getElementById('description').textContent = `País escolhido: ${description}`;
        document.getElementById('result').textContent = `Valor convertido: R$ ${convertedValue}`;

        // Exibe o rodapé com o resultado da conversão
        document.getElementById('resultFooter').classList.add('show-result');
    } else {
        alert('Por favor, insira um valor válido.');
    }
}
