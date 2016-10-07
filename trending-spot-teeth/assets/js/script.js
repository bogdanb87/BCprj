
function today() {
  var mydate = new Date();
  var year = mydate.getYear();
  if (year < 1000) year += 1900;
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate();
  if (daym < 10) daym = "0" + daym;
  var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  document.write("" + dayarray[day] + ", " + daym + " " + montharray[month] + ", " + year + "");
}


var mydate= new Date()
document.write(mydate.getFullYear());

// if(!window.jQuery){document.write('<script src="jquery.min.js"><\/script>');}

var areYouReallySure = false;
var internalLink = false;
function areYouSure() {
  if(allowPrompt) {
    if (!areYouReallySure && !internalLink && true) {
    areYouReallySure = true;
    location.href="http://nsf9u.voluumtrk.com/click"
    return "***************************************\n\n             W A I T !!! R I S K  F R E E  T R I A L ! ! !\n\nYou are missing out on this internet exclusive offer!\n\n-A very LIMITED supply of these products remain.\n\n-The results speak for themself - this amazing whitening product retails for hundreds of dollars!\n  \n  CLICK THE *CANCEL* BUTTON RIGHT NOW To Get True Brilliance Teeth Whitening Pen FOR LESS THAN $4 before supplies run out!\n\n***************************************";
    }
  }	else {
    allowPrompt = true;
  }
}

var allowPrompt = true;
window.onbeforeunload = areYouSure;

function NoPrompt() {
  allowPrompt = false;
}
