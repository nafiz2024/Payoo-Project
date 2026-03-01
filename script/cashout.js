document.getElementById("cashout_btn").addEventListener("click", function () {

    const agentNumberInput = document.getElementById("agent_number");
    const agentNumber = agentNumberInput.value;

    if (agentNumber.length != 11) {
        alert("Agent Number in Invalid")
        return;
    }

    const cashoutAmountInput = document.getElementById("cashout_amount");
    const cashoutAmount = cashoutAmountInput.value;

    const currentBalanceInput = document.getElementById("balance");
    const currentBalance = currentBalanceInput.innerText;

    const newBalance = Number(currentBalance) - Number(cashoutAmount);

    if (newBalance < 0) {
        alert("This Amount is Not Available in Your Account")
        return
    }

    const cashoutPinInput = document.getElementById("cashout_pin");
    const cashoutPin = cashoutPinInput.value;

    if (cashoutPin == 6181) {
        alert("CashOut Successfull")
        currentBalanceInput.innerText = newBalance;
    } else {
        alert("Invalid Pin");
        return;
    }
})