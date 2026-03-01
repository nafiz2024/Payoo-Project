document.getElementById("cashout_btn").addEventListener("click", function () {
    const agentNumber = getValueFromInput("agent_number");
    if (agentNumber.length != 11) {
        alert("Agent Number in Invalid");
        return;
    }

    const cashoutAmount = getValueFromInput("cashout_amount");

    const currentBalanceInput = document.getElementById("balance");
    const currentBalance = currentBalanceInput.innerText;

    const newBalance = Number(currentBalance) - Number(cashoutAmount);
    if(newBalance < 0){
        alert("This Amount is Not Available in Your Account");
        return;
    }

    const pinNumber = getValueFromInput("cashout_pin")
    if(pinNumber == 6181){
        alert("CashOut Successfull");
        currentBalanceInput.innerText = newBalance;
        return;
    } else {
        alert("Your Pin is Invalid")
        return;
    }
})

