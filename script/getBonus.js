document.getElementById("bonus_btn").addEventListener("click", function () {
    const bonusCoupon = getValueFromInput("bonus_coupon");
    if (bonusCoupon === "PH13") {
        alert(`You Got Bonus Coupon at ${new Date()}`);
        
        const history = document.getElementById("history_container");

        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
        <div class="p-4 bg-white rounded-xl mb-3">
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <div class="p-3 bg-[#080808]/5 rounded-full w-12">
                  <img src="./assets/opt-4.png" alt="" />
                </div>
                <div class="flex flex-col gap-1.5">
                  <h1 class="text-[16px] text-[#080808]/70 font-semibold">
                    You Got Bonus Coupon
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
        alert("Your Coupon is Invalid")
        return;
    }
})