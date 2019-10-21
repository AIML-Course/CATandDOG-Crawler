var countHttp = new XMLHttpRequest();
var downloadHttp = new XMLHttpRequest();
countHttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
    document.getElementById("content").innerHTML =
      "Files Downloaded: " + this.responseText;
  } else {
    console.log("count fail");
  }
};
downloadHttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log("download executed");
  } else {
    console.log("download fail");
  }
};

function downloadAction() {
  downloadHttp.open("GET", "/download", true);
  downloadHttp.send();
}

setInterval(function() {
  countHttp.open("GET", "/count", true);
  countHttp.send();
}, 1000);
