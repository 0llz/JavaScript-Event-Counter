let countTotal = document.getElementById("countTotal");
let previousEntries = document.getElementById("previousEntries");
let count = 0;

function addPerson() {
    count = count += 1
    countTotal.textContent = count
}

function removePerson() {
    count = count -= 1
    countTotal.textContent = count
}

function save() {
    let entries = count + " / "
    previousEntries.textContent += entries
    countTotal.textContent = 0
    count = 0
}