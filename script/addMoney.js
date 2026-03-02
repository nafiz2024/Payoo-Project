document.getElementById("add_money_btn").addEventListener("click", function () {
    const bankAccount = getValueFromInput("add_money_bank");
    if (bankAccount == "Select A Bank") {
        alert("Please Select A Bank");
        return;
    }

    const bankAccountNumber = getValueFromInput("bank_account_number");
    if (bankAccountNumber.length != 11) {
        alert("Account Number is Invalid");
        return;
    }

    const addMoneyAmount = getValueFromInput("add_money_amount");

    const currentAmount = getBalance();

    const newBalance = Number(addMoneyAmount) + currentAmount;

    const pin = getValueFromInput("add_money_pin");
    if (pin == 6181) {
        alert(`Add Money ${addMoneyAmount} Sucess from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance)
        return;
    } else {
        alert("Your Pin is Invalid");
        return;
    }
})