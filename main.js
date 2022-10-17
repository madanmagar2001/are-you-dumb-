const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');

yesBtn.addEventListener('click', () => {
    const content = document.querySelector('.content').innerHTML = 'I knew it';
    noBtn.style.position = 'static';
})

noBtn.addEventListener('mousemove', () => {
    let topValue = Math.floor(Math.random() * 90 + 1)
    let leftValue = Math.floor(Math.random() * 90 +1)
    noBtn.style.position = 'absolute';
    noBtn.style.top = topValue + 'vh';
    noBtn.style.left = leftValue + 'vw';
})
