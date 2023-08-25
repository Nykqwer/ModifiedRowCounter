let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl =document.getElementById("total-el")
let count = 0;
let total = 0;

function increment(){
    count += 1;
    countEl.textContent = count;

}


function totalCount(){
    save();
    total += count;
    totalEl.textContent = "Total: " + total;
    countEl.textContent = 0;
    count = 0; 

}
function save(){
    let sum = count + " - ";
    saveEl.textContent += sum;  
}


function resetValues() {
    count = 0;
    total = 0;
    countEl.textContent = 0;
    totalEl.textContent = "Total: " + total;
    saveEl.textContent = "Previous Entries: ";
}

