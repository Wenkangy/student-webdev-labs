// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event


let userInput1 = document.querySelector('#userInput1');
let copy = document.querySelector('#copy');
let output = document.querySelector('.output');


function handleclick(event) {
    output.textContent = input.value;
};


copy.addEventListener('click', handleclick)

let userInput2 = document.querySelector('#userInput2');
let section = document.querySelector('#inputEventExample');
let output2 = document.createElement('div');
section.appendChild(output2);

userInput2.addEventListener('input', handleInput);

function handleInput(event) {
    output2.textContent = userInput2.value;
}

