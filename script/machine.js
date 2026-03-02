// Get Value From Input ID Function
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;

    return value;
}

// Get Main Balance Value Function
function getBalance() {
    const currentBalance = document.getElementById("balance");
    const balance = currentBalance.innerText;

    return Number(balance);
}

// Set Main Balance Value Function
function setBalance(value) {
    const currentBalance = document.getElementById("balance");
    currentBalance.innerText = value;
}

// Make Button Click Function
function showOnly(id) {

    const addMoney = document.getElementById("add_money");
    const cashOut = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer_money");
    const getBonus = document.getElementById("bonus")

    // Hide All Section ID
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden")
    transferMoney.classList.add("hidden")
    getBonus.classList.add("hidden")

    // Show Button Click ID
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
    return;
}