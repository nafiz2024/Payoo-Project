function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;

    return value;
}

function getBalance() {
    const currentBalance = document.getElementById("balance");
    const balance = currentBalance.innerText;

    return Number(balance);
}

function setBalance(value) {
    const currentBalance = document.getElementById("balance");
    currentBalance.innerText = value;
}