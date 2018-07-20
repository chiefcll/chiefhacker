/*
Input: 123
Output: "One Hundred Twenty Three"

116:  "One hundred Sixteen"

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
*/

const LESS20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen','Nineteen', 'Twenty'];
const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

/**
 * @param {number} num
 * @return {string}
 */
function lessThanThousand(num) {
  if(num < 1) {
    return "";
  }

  if(num < 20) {
    return LESS20[num] + ' ';
  }

  if(num < 100) {
    return TENS[parseInt(num/10, 10)] + ' ' + lessThanThousand(num%10);
  }

  return LESS20[parseInt(num/100, 10)] + ' Hundred ' + lessThanThousand(num%100);
}

function numberToString(num, i) {
  num = parseInt(num, 10);

  if(num < 1) {
    return '';
  }

  if (num%1000 < 1) {
    return numberToString(num/1000, i+1);
  }

  return numberToString(num/1000, i+1) + lessThanThousand(num%1000) + THOUSANDS[i] + " ";
}


var numberToWords = function(num) {
  if (num === 0) {
    return 'Zero';
  }

  return numberToString(num, 0).trim();
};

