document.getElementById("add_bill_btn").addEventListener("click", function () {
    const payBiller = getValueFromInput("select_pay_biller");
    if (payBiller == "Select Biller") {
        alert("Please Select A Biller");
        return;
    }

    const billerAccountNumber = getValueFromInput("biller_account_number");
    if (billerAccountNumber.length != 11) {
        alert("Your Account Number is Invalid");
        return;
    }

    const payBillAmount = getValueFromInput("pay_bill_amount");

    const currnetBalance = getBalance();

    const newBalance = currnetBalance - Number(payBillAmount);

    const pin = getValueFromInput("pay_bill_pin");
    if (pin == 6181) {
        alert(`Pay Bill ${payBillAmount} Taka Sucess from ${billerAccountNumber} at ${new Date()}`);
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
                    Pay Bill Success ${payBillAmount} Taka
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
                <a href=""><i class="fa-solid fa-ellipsis-vertical text-2xl"></i></a>
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
});