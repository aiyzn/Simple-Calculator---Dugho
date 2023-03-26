function sum() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  answer = num1+num2;
  document.getElementById("answer").innerHTML = 'The sum of ' +num1+ ' and ' +num2+ ' is ' +answer+ '.';
  


}

function difference() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  answer = num1-num2;
  document.getElementById("answer").innerHTML = 'The difference of ' +num1+ ' and ' +num2+ ' is ' +answer+ '.';
  
  }

  function product() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  answer = num1*num2;
  document.getElementById("answer").innerHTML = 'The product of ' +num1+ ' and ' +num2+ ' is ' +answer+ '.';
  
  }

  function quotient() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  answer = num1/num2;
  document.getElementById("answer").innerHTML = 'The quotient of ' +num1+ ' and ' +num2+ ' is ' +answer+ '.';
  
  }

  function remainder() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  answer = num1%num2;
  document.getElementById("answer").innerHTML = 'The remainder of ' +num1+ ' and ' +num2+ ' is ' +answer+ '.';
  
  }
    