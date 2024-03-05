function calculateFact() {
  let givenInput = document.getElementById("userInput").value;
  let fact;
  if (givenInput == "" || isNaN(givenInput)) {
    alert("Please enter a valid Number");
    fact = document.getElementById(
      "displayResult"
    ).innerHTML = `The given number is <span style="color:red">not a Number or it must be empty</span>.`;
  } else if (givenInput < 0) {
    alert("Please enter a positive Number");
    fact = document.getElementById("displayResult").innerHTML =
      "The given number is not a positive Number.";
  } else {
    fact = 1;
    for (let i = 1; i <= givenInput; i++) {
      fact *= i;
    }
    document.getElementById(
      "displayResult"
    ).innerHTML = `The Factorial of <span style="text-decoration:underline;text-decoration-color:red">${givenInput}</span> is <span style="font-size:30px;color:red">${fact}</span>`;
  }
}
