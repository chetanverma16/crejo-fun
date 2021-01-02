const creditcardnumber = document.querySelector("#cardnumber");
const creditcardinput = document.getElementById("cardinput");

const creditcardname = document.querySelector("#creditcardname");
const creditcardnameinput = document.querySelector("#creditcardnameinput");

const creditcardvalidity = document.querySelector("#creditcardvalidity");
const creditcardvalidityinput = document.querySelector(
  "#creditcardvalidityinput"
);

console.log(creditcardvalidityinput);

// Card Number vaidation
function regexvalidation(inputtxt, regex) {
  if (inputtxt.value.match(regex)) {
    return true;
  } else {
    alert("Enter Valid Card Details");
    return false;
  }
}

// Credit Card Number Binding
creditcardinput.addEventListener("change", (e) => {
  if (e.target.value) {
    if (regexvalidation(creditcardinput, /^4[0-9]{12}(?:[0-9]{3})?$/)) {
      creditcardnumber.textContent = e.target.value
        .toString()
        .match(/.{4}/g)
        .join(" ");
    }
  } else {
    creditcardnumber.textContent = "---- ---- ---- ---- ";
  }
});

// Credit Card Name Binding
creditcardnameinput.addEventListener("change", (e) => {
  if (e.target.value) {
    if (
      regexvalidation(
        creditcardnameinput,
        /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/
      )
    ) {
      creditcardname.textContent = `${e.target.value}`;
    }
  } else {
    creditcardname.textContent = "-----------";
  }
});

// Credit Card Validity Bincing

creditcardvalidityinput.addEventListener("change", (e) => {
  if (e.target.value) {
    if (
      regexvalidation(
        creditcardvalidityinput,
        /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/
      )
    ) {
      creditcardvalidity.textContent = `${e.target.value}`;
    }
  } else {
    creditcardvalidity.textContent = "-- / --";
  }
});
