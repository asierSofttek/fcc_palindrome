const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


function cleanInputString(str) {
    const regex = /[a-z0-9]/g;
    return str.toLowerCase().match(regex).join("");
}

checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let text = textInput.value.trim();

    if (text === "") {
        alert("Please input a value");
    }
    let cleanText = cleanInputString(text);
    console.log(cleanText);

    if (cleanText === cleanText.split("").reverse().join("")) {
        result.innerText = `${text} is a palindrome`;
    }
    else {
        result.innerText = `${text} is not a palindrome`;
    }
});