function convertToRoman(num) {
  if (num === 0) return "";

  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";

  for (let [roman, value] of symbols) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

window.convertToRoman = convertToRoman;

// DOM interaction for UI
document.getElementById("convertBtn").addEventListener("click", function () {
  const input = document.getElementById("numberInput").value;
  const roman = convertToRoman(parseInt(input));
  document.getElementById("romanOutput").textContent = roman || "N/A";
});
