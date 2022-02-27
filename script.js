const labels = document.querySelectorAll('.loginInput label');

labels.forEach(label => {
    labels.innerHTML = label.innerText
    .split('')
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>` )
    .join('')
})