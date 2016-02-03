window.onload = function() {

  var clock = document.getElementById("clock");

  writeDate();
};

setInterval(writeDate, 1000);

function writeDate() {

  var d = new Date();
  var minute = addZeroBefore(d.getMinutes());
  var hour = addZeroBefore(d.getHours());
  var second = addZeroBefore(d.getSeconds());

  clock.innerHTML = ("Kell on: " + hour + ":" + minute + ":" + second);

}

function addZeroBefore(number) {

  if(number < 10) {
    number = "0" + number;
  }

  return number;
}
