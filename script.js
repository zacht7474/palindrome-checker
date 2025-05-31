const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");



checkBtn.addEventListener("click", () => {
   const input = textInput.value.trim();
// this just removes the outside spaces //

  if (textInput.value.trim() === "") {
    alert("Please input a value.");
    return;
  } 

  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversed = cleaned.split("").reverse().join("");

  if (cleaned === reversed) {
    result.textContent = `${input} is a palindrome!`;

    // Fire confetti! :) 
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

  } else {
    result.textContent = `${input} is not a palindrome.`;
  }

});




// this algorithm is fire //
