// 5216 -> 'five thousand two hundred sixteen'
// 4489202 -> 'four million four hudnred eighty nine thousand two hundred and two'
// 23,524,489,200 ->
// 0 -> 'zero'

// 111 -> one hundred eleven

numsToEnglish = {
  '00': '',
  '01': 'one',
  '02': 'two',
  //...
  '09': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'twelve',
  '17': 'twelve',
  '0': 'zero',
  '1': 'one',
  //... // goes to 99 -> 109
}

// 4000 -> four thousand

function lessThanThousandToEnglish(num) {
  num = num.toString(); // '789' -> num[0] -> '7'

  //000 === 00
  //000 === 0;

  if (num.length === 1 || num.length === 2) {
    return numsToEnglish[n];
  } else if (num.length === 3) { // 410
    return numsToEnglish[num[0]] + ' hundred ' + numsToEnglish[num[1] + num[2]];
  }

  return '';
}

function numberToEnglish(num) {
  const hundred = 100;
  const thousand = 1000;
  const million = thousand * 100;
  const billion = million * 100;
  let output = '';

  if (num > billion) {
    let remainder = num % billion; // 524,489...
    let b = num - remainder; //23,000,000,000
    b = b / billion;

  }


}
