document.getElementById("cashout_btn").addEventListener("click", function () {
    const agentNumber = getValueFromInput("agent_number");
    if (agentNumber.length != 11) {
        alert("Agent Number in Invalid");
        return;
    }

    const cashoutAmount = getValueFromInput("cashout_amount");

    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert("This Amount is Not Available in Your Account");
        return;
    }

    const pinNumber = getValueFromInput("cashout_pin")
    if (pinNumber == 6181) {
        alert("CashOut Successfull");
        setBalance(newBalance);

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
                    Cashout Success
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
        alert("Your Pin is Invalid")
        return;
    }
})

