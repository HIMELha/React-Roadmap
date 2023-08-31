const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const page1 = document.getElementById('Page1');
const page2 = document.getElementById('Page2');
const page3 = document.getElementById('Page3');

btn1.addEventListener('click', () => {
    page1.classList.remove('hidden');
    page2.classList.add('hidden');
    page3.classList.add('hidden');
});

btn2.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
    page3.classList.add('hidden');
});

btn3.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.add('hidden');
    page3.classList.remove('hidden');
});
