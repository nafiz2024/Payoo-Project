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

        const history = document.getElementById("history_container");

        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="p-4 bg-white rounded-xl mb-3">
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <div class="p-3 bg-[#080808]/5 rounded-full w-12">
                  <img src="/assets/opt-1.png" alt="" />
                </div>
                <div class="flex flex-col gap-1.5">
                  <h1 class="text-[16px] text-[#080808]/70 font-semibold">
                    Add Money Success
                  </h1>
                  <p class="text-[12px] text-[#080808]/70">
                         ${new Date().toLocaleString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: false   // 24 hour format
                         })}
                </p>
                </div>
              </div>
              <div class="">
                <i class="fa-solid fa-ellipsis-vertical text-2xl"></i>
              </div>
            </div>
          </div>
        `;

        history.append(newHistory);
        return;
    } else {
        alert("Your Pin is Invalid");
        return;
    }
})