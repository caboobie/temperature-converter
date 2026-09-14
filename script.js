const inputValue = document.getElementById('inputValue');
const result = document.getElementById('result');
const convertbuttons = document.querySelectorAll('.convert-btn');

function toCelsius(value, from) {
    if (from === 'C') return value;
    if (from === 'F') return (value - 32) * 5/9;
    if (from === 'K') return value - 273.15;
}

function fromCelsius(value, to) {
    if (to === 'C') return value;
    if (to === 'F') return (value * 9/5) + 32;
    if (to === 'K') return value + 273.15;
}

function convert(value, from, to) {
    const celsius = toCelsius(value, from);
    return fromCelsius(celsius, to);
}

function convert(value, from, to) {
    const celsius = toCelsius(value, from);
    return fromCelsius(celsius, to);
}

function isPhysicallyValid(value, unit) {
    if (unit === 'C') return value >= -273.15;
    if (unit === 'F') return value >= -459.67;
    if (unit === 'K') return value >= 0;
}


    convertbuttons.forEach(button => {
    button.addEventListener('click', () => {
        const from = button.dataset.from;
        const to = button.dataset.to;
        const value = parseFloat(inputValue.value);

        if (isNaN(value)) {
            result.textContent = 'Enter a valid number';
            return;
        }

        if (!isPhysicallyValid(value, from)) {
            result.textContent = 'Below absolute zero - not physically possible';
            return;
        }

        const converted = convert(value, from, to);
        result.textContent = `${converted.toFixed(2)} ${to}`;
    })
})