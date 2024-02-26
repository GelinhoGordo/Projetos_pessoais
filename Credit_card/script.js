document.querySelector('.card-number-input1').oninput = () => {
    const inputValue = document.querySelector('.card-number-input1').value;
    if (!isNaN(inputValue)) {
        document.querySelector('.card-number-box1').innerText = inputValue;
    } else {
        document.querySelector('.card-number-input1').value = ''; // Limpa o valor se não for um número
    }
}

document.querySelector('.card-number-input2').oninput = () => {
    const inputValue = document.querySelector('.card-number-input2').value;
    if (!isNaN(inputValue)) {
        document.querySelector('.card-number-box2').innerText = inputValue;
    } else {
        document.querySelector('.card-number-input2').value = ''; // Limpa o valor se não for um número
    }
}

document.querySelector('.card-number-input3').oninput = () => {
    const inputValue = document.querySelector('.card-number-input3').value;
    if (!isNaN(inputValue)) {
        document.querySelector('.card-number-box3').innerText = inputValue;
    } else {
        document.querySelector('.card-number-input3').value = ''; // Limpa o valor se não for um número
    }
}

document.querySelector('.card-number-input4').oninput = () => {
    const inputValue = document.querySelector('.card-number-input4').value;
    if (!isNaN(inputValue)) {
        document.querySelector('.card-number-box4').innerText = inputValue;
    } else {
        document.querySelector('.card-number-input4').value = ''; // Limpa o valor se não for um número
    }
}

document.querySelector('.card-holder-input').oninput = () => {
    const inputValue = document.querySelector('.card-holder-input').value;
    if (!/\d/.test(inputValue)) {
        document.querySelector('.card-holder-name').innerText = inputValue;
    } else {
        document.querySelector('.card-holder-input').value = ''; // Limpa o valor se houver números
    }
}

document.querySelector('.month-input').oninput = () => {
    const inputValue = document.querySelector('.month-input').value;
    if (!isNaN(inputValue)) {
        document.querySelector('.exp-month').innerText = inputValue;
    } else {
        document.querySelector('.month-input').value = ''; // Limpa o valor se não for um número
    }
}

document.querySelector('.year-input').oninput = () => {
    const inputValue = document.querySelector('.year-input').value;
    if (!isNaN(inputValue)) {
        document.querySelector('.exp-year').innerText = inputValue;
    } else {
        document.querySelector('.year-input').value = ''; // Limpa o valor se não for um número
    }
}

document.querySelector('.year-input').onchange = () => {
    const selectedOption = document.querySelector('.year-input').value;
    if (selectedOption !== "year" && !isNaN(selectedOption)) {
        document.querySelector('.exp-year').innerText = selectedOption;
    } else {
        // Limpa a seleção se uma opção inválida for selecionada
        document.querySelector('.year-input').selectedIndex = 0;
    }
}




// Seleciona todos os inputs com a classe "card-info" e "card-holder-input"
const inputs = document.querySelectorAll('.card-info, .card-holder-input');

// Para cada input, adiciona um event listener para o evento "change"
inputs.forEach(input => {
    input.addEventListener('change', () => {
        // Após o evento "change" ocorrer, desabilita o input
        input.disabled = true;
    });
});


// Seleciona o formulário
const form = document.querySelector('form');

// Adiciona um event listener para o evento 'submit'
form.addEventListener('submit', function(event) {
    // Para cada campo de entrada do cartão
    const cardInputs = document.querySelectorAll('.card-info');
    cardInputs.forEach(input => {
        // Verifica se o valor é numérico
        if(isNaN(input.value)) {
            alert('Por favor, insira apenas números nos campos do cartão.');
            event.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });

    // Verifica o campo do titular do cartão
    const cardHolderInput = document.querySelector('.card-holder-input');
    // Verifica se o valor contém apenas texto (sem números)
    if(/\d/.test(cardHolderInput.value)) {
        alert('Por favor, insira apenas texto no campo do titular do cartão.');
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }

    // Verifica o campo do mês de expiração
    const monthInput = document.querySelector('.month-input');
    // Verifica se um mês foi selecionado
    if(monthInput.value === 'month') {
        alert('Por favor, selecione um mês de expiração.');
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }

    // Verifica o campo do ano de expiração
    const yearInput = document.querySelector('.year-input');
    // Verifica se um ano foi selecionado
    if(yearInput.value === 'year') {
        alert('Por favor, selecione um ano de expiração.');
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
});




