const storageInput = document.querySelector(".storage");
const text = document.querySelector(".text");
const button = document.querySelector(".btn");
const storedContent = localStorage.getItem('content');

if(storedContent) {
    text.textContent = storedContent;
}

storageInput.addEventListener("input", (letter) => {
  text.textContent = letter.target.value;
});

const saveToLocalStorage = () => {
    localStorage.setItem('content', text.textContent);
}

button.addEventListener('click', saveToLocalStorage);


