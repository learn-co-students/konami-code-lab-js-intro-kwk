const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  var i = 0;
  document.body.addEventListener('keydown', function(e) {
    if(parseInt(e.detail) === code[i]) {
      if(i === code.length-1){
        alert("You entered the secret code");
        i = 0;
      } else {
        i++;
      }
    } else {
      i = 0;
    }
  });
}
