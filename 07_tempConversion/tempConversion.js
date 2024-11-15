const convertToCelsius = function(fahrenheit) {
  let convert = fahrenheit - 32
  let answer = convert * 0.5555555
  return Math.round(answer * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  let product = celsius * 1.8
  let sum = product + 32
  return Math.round(sum * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
