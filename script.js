function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (
        let i = 2;
        i <= Math.sqrt(num); i++
    ) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault()
    let num =
        document.getElementById("inp").value;
    let result = checkPrime(num);

    if (result) {
        document.getElementById("dom-msg").innerHTML =
            num + " Is A Prime Number";
    } else {
        document.getElementById("dom-msg").innerHTML =
            num + " Is Not A Prime Number";
    }
}
);
document.getElementById("clear")
    .addEventListener("click", () => {
        document.getElementById("inp").value = "";
        document.getElementById("dom-msg").innerHTML = "Result";
    })