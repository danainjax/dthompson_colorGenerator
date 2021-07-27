const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

console.log(randomNumber(2, 266))

const randomRGB = () =>  [
    randomNumber(0, 255),
    randomNumber(0, 255),
    randomNumber(0, 255)
]

const currentValueSpan = document.getElementById('value')
console.log(currentValueSpan)
const generate = document.getElementById('generate');
console.log(generate)

generate.addEventListener('click', () => {
    const rgb = randomRGB();
    const content = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
    document.documentElement.style.setProperty('--current-value', content);
    currentValueSpan.textContent = content;
})