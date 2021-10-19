const rect = require('./rectangle');

function result(a, b) {
  if (a < 0 || b < 0) {
    console.log('Values must be greater than 0');
  } else {
    console.log('Area is ' + rect.area(a, b));
    console.log('Perimeter is ' + rect.perimeter(a, b));
  }
}

result(2, 5);
result(2, 1);
result(-6, 5);
result(100, 145);
