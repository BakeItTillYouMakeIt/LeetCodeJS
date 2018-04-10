const lessThanTwenty = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens  = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const thousands = ['', 'Thousand', 'Million', 'Billion'];

var numberToWords = function(num) {
  // Edge Case
  if (num === 0) return 'Zero';

  // results str
  let result = '';
  let tIdx = 0;

 // 123, 105

  while (num) {
    const hundredChunk = num % 1000;
    num = Math.floor(num / 1000);
    const part = getHundreds(hundredChunk).trim();

    if (hundredChunk !== 0) {
      result = part + ' ' + thousands[tIdx] + ' ' + result;
    }
    tIdx++;
  }

  return result.trim();
};


function getHundreds (num) {

  // Less than 20
  if (num < 20) {
    return lessThanTwenty[num];
  }
  // Less than 100
  else if (num < 100) {
    return tens[Math.floor(num/10)] + ' ' + getHundreds(num % 10);
  }
  // Number between 100 - 999
  return lessThanTwenty[Math.floor(num/100)] + ' Hundred ' + getHundreds(num % 100);
}
