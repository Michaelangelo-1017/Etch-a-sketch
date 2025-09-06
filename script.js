//Variables
const gridContainer = document.querySelector(".grid-container");
const generateBtn = document.getElementById("generate-btn");
//Functions
function generateRowContainer(count){
    for(let i = 1; i <= count; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "containerRow");
        div.classList.add(`${i}`);
        gridContainer.appendChild(div);
    }
}

function generateSquare(count){
    const allContainerRows = document.querySelectorAll(".containerRow");
    allContainerRows.forEach((row)=>{
        for(let i = 1; i <= count; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "gridSquare");
        div.classList.add(`${i}`);
        row.appendChild(div);
        }
    })
}

function generateRandomHex(){
    const hexCharArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let hex = "#"
    for(let i=0; i < 6; i++){
        const randomIndex = Math.floor(Math.random() * (16 - 0)) + 0;
        hex += hexCharArray[randomIndex]
    }
    return hex;
}

function askForSquares(){
    let isValid = true;
    let numberOfSquares;
    const numberRegex = /^[0-9]+$/
    while(isValid){
        numberOfSquares = prompt("Enter the number of squares you want! (Maximum of 100 and no decimals)");
        if(numberRegex.test(numberOfSquares) && parseInt(numberOfSquares) <= 100){
            console.log(parseInt(numberOfSquares));
            isValid = false;
        }
    }
    return numberOfSquares;
}

//EventListeners
document.addEventListener("DOMContentLoaded",()=>{
    generateRowContainer(16);
    generateSquare(16);
    gridContainer.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("gridSquare")) {
            if (!e.target.style.backgroundColor) {
                e.target.style.backgroundColor = generateRandomHex();
    }
        }
});

    generateBtn.addEventListener("click",()=>{
        const requestedNumber = askForSquares();
        gridContainer.innerHTML = "";
        generateRowContainer(requestedNumber);
        generateSquare(requestedNumber);
    })
})


//Test Block