

document.querySelector('.card-number-input1').oninput = () => {
    document.querySelector('.card-number-box1').innerText = document.querySelector('.card-number-input1').value

}

document.querySelector('.card-number-input2').oninput = () => {
    document.querySelector('.card-number-box2').innerText = document.querySelector('.card-number-input2').value

}

document.querySelector('.card-number-input3').oninput = () => {
    document.querySelector('.card-number-box3').innerText = document.querySelector('.card-number-input3').value

}

document.querySelector('.card-number-input4').oninput = () => {
    document.querySelector('.card-number-box4').innerText = document.querySelector('.card-number-input4').value

}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value
}


