// METHOD 2
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World');

// METHOD 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    alert("Hello World");
});

// function alertFunction() {
//     alert("YAY! YOU DID IT!");
// }
  
// // METHOD 2
// btn.onclick = alertFunction;

// // METHOD 3
// btn.addEventListener('click', alertFunction);

const btn = document.querySelector('#try');
btn.addEventListener('click', function(e) {
    e.target.style.background = 'yellow';
});