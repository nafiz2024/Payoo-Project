document.getElementById("login_btn").addEventListener("click", function () {
    const mobileNumber = document.getElementById("mobile_number");
    const idNumber = mobileNumber.value;

    const pin = document.getElementById("pin")
    const pinNumber = pin.value;

    if (idNumber === "01876566181" && pinNumber === "6181") {
        alert("login Success")
        window.location.assign("home.html")
    } else {
        alert("Wrong Input")
    }

})