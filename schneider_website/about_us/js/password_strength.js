

$("#yellow_strength").hide();
$("#green_strength").hide();


var content = document.getElementById("register_password");

var points = [];

var n = 0;
var o = 0;

var backspace;


$("#register_password").keydown( function(event) {

  backspace = event.keyCode;

  if(backspace == 8) {

    o = points.length - 1;

    if(points.length == 0) {

      n = 0;
      o = 0;

    } else {

      evaluateScore(points);

    }

  }
})

content.addEventListener("input", function(event) {

  var checkNum = Number(content.value[o]);

  if(backspace !== 8) {
    if(content.value[o] === content.value[o].toUpperCase() && Math.floor(checkNum !== checkNum))  {

      n += 3;

    }  else if(Math.floor(checkNum) == checkNum) {

      n += 3;

    }  else {

     n += 1;

   }
   points.push(content.value[o]);

   if(points.length > 5 && points.length <= 6) {
     n += 3;
   } else if (points.length > 12 && points.length <= 13) {
     n += 5;
   } else if (points.length > 20 && points.length <= 21) {
     n += 7;
   }
 } else {

 }

  //rate the strength

  if(n <= 10) {

    $("#yellow_strength").hide();
    $("#green_strength").hide();
    $("#red_strength").show();

  }
  else if(n > 10 && n < 20) {

    $("#red_strength").hide();
    $("#green_strength").hide();
    $("#yellow_strength").show();

  }
  else {

    $("#red_strength").hide();
    $("#yellow_strength").hide();
    $("#green_strength").show();

  }

  o += 1;
})


function evaluateScore(textArray) {

  n = 0;

  textArray.pop(-1);

    for(var q = 0; q <= textArray.length - 1; q++) {

      var checkNum = Number(textArray[q]);

      if(textArray[q] === textArray[q].toUpperCase() && Math.floor(checkNum !== checkNum))  {

        n += 3;

      }  else if(Math.floor(checkNum) == checkNum) {

        n += 3;

      }  else {

       n += 1;

     }

    }

    o -= 1

}


//DONT KNOW HOW I DID THAT SHIT
//JUST DONT TOUCH !!!
