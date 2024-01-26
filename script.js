let wrapper = document.querySelector("#wrapper");

let block = null,
    num = 0;

for (let i = 0; i < 100; i++){
    num = getRandomNumber();
    block = document.createElement("div");
    block.className = "block";
    block.innerText = num;
    if (num < 31){
        block.style.backgroundColor = "LIGHTGREEN";
    } 
    if (num >= 70) {
        block.style.backgroundColor = "RED";
    }
    if (num > 30 && num < 70) {
        block.style.backgroundColor = "PINK";
        block.style.color = "black";
    }
    wrapper.append(block);
}

function getRandomNumber(min = 0, max = 100){
    return Math.round(Math.random() * (max - min) + min);
}