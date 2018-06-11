//JavaScript Document
document.getElementById("backgroundimagediv").style.backgroundImage = "url('assets/images/winterbackground.gif')";

//sets the initial state of the game, initial score and the global counter.
var scoretracker = 5;
var counter = 0;
var ic = document.getElementById("scoretracker")
  ic.innerHTML = counter + scoretracker

// Here we establish a random "targetNumber" using the math,round.
var randomTargetNumberOptions = [19, 20, 30, 40, 50, 60, 70, 80, 90, 75, 65, 55, 56, 23, 42, 110, 120, 112, 115, 100];
var randomTargetNumber = randomTargetNumberOptions[Math.floor(Math.random() * randomTargetNumberOptions.length)]; 
var targetNumber = randomTargetNumber;
// Here we set the "number-to-guess" header to match the "targetNumber".
// Eventually this will allow us to change the HTML to match the value in the JavaScript.
$("#numberToGuessid").text(targetNumber);
// Here we create a counter, we'll be using this to track the user's total.


//Crystal Number 1
$(".crystal1img").on("click", function() {

  // This time we increase the counter by *10* each time the user clicks.
  counter += 10;

  // We then output the new counter value each time the crystal is clicked.
  //alert("Your new score is: " + counter);
  var sc = document.getElementById("scoretracker")
  sc.innerHTML = counter + scoretracker
  // Here we created some logic to "check" if the click counter matches the targetNumber.
    // Remember, this click event will be triggered with each click.
    // With each click the counter will increase by 10 and be re-evaluated against target.
    if (counter === targetNumber) {

      // If the numbers match we'll celebrate the user's win.
      alert("You win!");
    }
    // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
    else if (counter >= targetNumber) {

      // Then they are alerted with a loss.
      alert("You lose!!");
      //spawn the ice dragon
      $('#icedragondiv').css("visibility", "visible");
      iceDragonFlight();   
     
    }

});

//Crystal Number 2
$(".crystal2img").on("click", function() {

  // Each time the user clicks the crystal the counter goes up by 1.
  counter += 5;

  // We then output the number of times the crystal is clicked.
  //alert("You clicked this crystal " + counter + " times!");
  var sc = document.getElementById("scoretracker")
  sc.innerHTML = counter + scoretracker
  console.log(counter)
});

//Crystal Number 3
$(".crystal3img").on("click", function() {

  // Each time the user clicks the crystal the counter goes up by 1.
  counter += 3;

  // We then output the number of times the crystal is clicked.
  //alert("You clicked this crystal " + counter + " times!");
  var sc = document.getElementById("scoretracker")
  sc.innerHTML = counter + scoretracker
  console.log(counter)
});

//Crystal Number 4
$(".crystal4img").on("click", function() {

  // Each time the user clicks the crystal the counter goes up by 1.
  counter += 7;

  // We then output the number of times the crystal is clicked.
  //alert("You clicked this crystal " + counter + " times!");
  var sc = document.getElementById("scoretracker")
  sc.innerHTML = counter + scoretracker
  console.log(counter)
});

movingWw1()
function movingWw1() {
  var elem = document.getElementById("walker-image1");   
  var pos = 710;
  var id = setInterval(frame, 120);
  elem.style.top = '410px'; 
  function frame() {
    if (pos == 105) {
      pos = 710;
      console.log (scoretracker);
      scoretracker = scoretracker - 1
      console.log (scoretracker);
      var sc = document.getElementById("scoretracker");
      sc.innerHTML = scoretracker + counter;
    } else {
      pos--; 
      
      elem.style.left = pos + 'px'; 
    }
  }
}

movingWw2()
function movingWw2() {
  var elem = document.getElementById("walker-image2");   
  var pos = 710;
  var id = setInterval(frame, 150);
  elem.style.top = '390px'; 
  function frame() {
    if (pos == 105) {
      pos = 710;
      console.log (scoretracker);
      scoretracker = scoretracker - 1
      console.log (scoretracker);
      var sc = document.getElementById("scoretracker");
      sc.innerHTML = scoretracker + counter;
    } else {
      pos--; 
      
      elem.style.left = pos + 'px'; 
    }
  }
}

movingWw3()
function movingWw3() {
  var elem = document.getElementById("walker-image3");   
  var pos = 710;
  var id = setInterval(frame, 180);
  elem.style.top = '385px'; 
  function frame() {
    if (pos == 105) {
      pos = 710;
      console.log (scoretracker);
      scoretracker = scoretracker - 1
      console.log (scoretracker);
      var sc = document.getElementById("scoretracker");
      sc.innerHTML = scoretracker + counter;
    } else {
      pos--; 
      
      elem.style.left = pos + 'px'; 
    }
  }
}

movingWw4()
function movingWw4() {
  var elem = document.getElementById("walker-image4");   
  var pos = 710;
  var id = setInterval(frame, 100);
  elem.style.top = '380px'; 
  function frame() {
    if (pos == 105) {
      pos = 710;
      console.log (scoretracker);
      scoretracker = scoretracker - 1
      console.log (scoretracker);
      var sc = document.getElementById("scoretracker");
      sc.innerHTML = scoretracker + counter;
      
    } else {
      pos--; 
      
      elem.style.left = pos + 'px'; 
    }
  }
}


function flyingDragon() {
  var elem = document.getElementById("flyingDragondiv");   
  var xpos = 5;
  var ypos = 50;
  var id = setInterval(frame, 50);
  var returnRoute = false
  elem.style.top = '100px'; 
  function frame() {
    if (ypos > 160) {
      ypos = 160;
    } else if (returnRoute == false) {
      xpos=xpos+1; 
      ypos=ypos+3;
      elem.style.top = ypos + 'px'; 
      elem.style.left = xpos + 'px'; 
    }
    if (xpos > 95) {
      xpos = 95;
      var visr1 = document.getElementById('flame-image1');
      var visr2 = document.getElementById('flame-image2');
      var visr3 = document.getElementById('flame-image3');
      var visr4 = document.getElementById('walker-image1');
      var visr5 = document.getElementById('walker-image2');
      var visr6 = document.getElementById('walker-image3');
      var visr7 = document.getElementById('walker-image4');
      
      visr1.style.visibility = 'visible';
      visr2.style.visibility = 'visible';
      visr3.style.visibility = 'visible';
      visr4.style.visibility = 'hidden';
      visr5.style.visibility = 'hidden';
      visr6.style.visibility = 'hidden';
      visr7.style.visibility = 'hidden';
    }
  }
}


function iceDragonFlight() {
  lastDragonflight()
  var elem = document.getElementById("icedragondiv");   
  var xpos = 700;
  var ypos = 70;
  var id = setInterval(frame, 50);
  var returnRoute = false
  elem.style.top = '70px'; 
  function frame() {
    if (ypos > 80) {
      ypos = 80;
    } else if (returnRoute == false) {
      xpos=xpos-3; 
      ypos=ypos+1;
      elem.style.top = ypos + 'px'; 
      elem.style.left = xpos + 'px'; 
    }
    if (xpos < 230) {
      xpos = 230;
      $('#burningfire1').css("visibility", "visible");
      $('#burningfire2').css("visibility", "visible");
      $('#burningfire3').css("visibility", "visible");
      $('#burningfire4').css("visibility", "visible");
    }
  }
}

function lastDragonflight() {
  var elem = document.getElementById("flyingDragondiv");   
  var xpos = 5;
  var ypos = 50;
  var id = setInterval(frame, 50);
  var returnRoute = false
  elem.style.top = '100px'; 
  function frame() {
    if (ypos > 160) {
      ypos = 160;
    } else if (returnRoute == false) {
      xpos=xpos+1; 
      ypos=ypos+3;
      elem.style.top = ypos + 'px'; 
      elem.style.left = xpos + 'px'; 
    }
    if (xpos > 95) {
      xpos = 95;
    }
  }
}
randomizeCrystalValue()
function randomizeCrystalValue() {
// We begin by expanding our array to include four options.
// Here we created code that selects a number either 10, 5, 3, 7.
// We'll set this number at the start of the "game".
var numberOptions = [10, 5, 3, 7];
for (var i = 0; i < numberOptions.length; i++) {
var increment = numberOptions[Math.round(Math.random())];
console.log(increment);

}
}