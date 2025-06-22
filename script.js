const loweCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const capsCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","."];
const passWordGenerate = [];
let rangePass = parseInt(document.getElementById("rangeValue").value);
const rangeLong = document.getElementById("rangeLong")
const rangeInput = document.getElementById("rangeValue");
const btnGenerate = document.getElementById("btnGenerate");
rangeLong.textContent = rangeInput.value
const btnCopy = document.getElementById("btnCopy")
const message = document.getElementById("message")

rangeInput.addEventListener("input", () => {
        rangeLong.textContent = rangeInput.value
        rangePass = parseInt(rangeInput.value)
    })


btnGenerate.addEventListener("click", () => {
    const hasLetter = document.getElementById("letterCheck").checked
    const hasCapsLetters = document.getElementById("capLetter").checked
    const hasNumbers = document.getElementById("numberCheck").checked
    const hasSpecialCharacter = document.getElementById("specialCheck").checked
    const result = document.getElementById("result")
    const passWordGenerate = [];

    message.classList.remove("border-success")
            result.style.color = "black"
            message.classList.remove("border-danger")

                

    let options = [];
    if(hasLetter) options.push("min");
    if(hasCapsLetters) options.push("may");
    if(hasNumbers) options.push("num");
    if(hasSpecialCharacter) options.push("sym");
    
    if(options.length === 0){
        result.textContent = "Select a least one option"
        result.style.color = "red"
        message.classList.add("border-danger")

        return;
    }

    for (let i = 0; i < rangePass; i++){
        const ramdonType = options[Math.floor(Math.random() * options.length)];

        if(ramdonType === "min"){
            const randomLeters = Math.floor(Math.random() * loweCaseLetters.length)
            passWordGenerate.push(loweCaseLetters[randomLeters])
        }
        
        if(ramdonType === "may"){
            const ramdonCapLetter = Math.floor(Math.random() * capsCaseLetters.length)
            passWordGenerate.push(capsCaseLetters[ramdonCapLetter])
        }

        if(ramdonType === "num"){
            const numbers = Math.floor(Math.random() * 10);
            passWordGenerate.push(numbers)
        }

        if(ramdonType === "sym"){
            const specialSelected = Math.floor(Math.random() * specialCharacters.length)
            passWordGenerate.push(specialCharacters[specialSelected])
        }
    }
    const final = passWordGenerate.join("")     
    result.textContent = final

    btnCopy.addEventListener("click", () => {
        const copyPass = result.textContent;         
        navigator.clipboard.writeText(copyPass)
            .then(() => 
                //message.textContent = "Text Copied",
                message.classList.add("border-success"),
            )
            .catch(() => message.classList.add("border-danger"));
    })
  
})

