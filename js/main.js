document.addEventListener('DOMContentLoaded', function() {

var clickSwitch = document.querySelector('button');
var wallBackground = document.querySelector('body');
var statusText = document.querySelector('.status');

clickSwitch.addEventListener('click', function() {
  if (clickSwitch.classList.contains('on')) {
    // Change switch styling
    clickSwitch.classList.add('off');
    clickSwitch.classList.remove('on');

    //Change wall background
    wallBackground.classList.add('light');
    wallBackground.classList.remove('dark');

    //Change status text
    statusText.innerText = "It's so bright in here!";

  } else {

    // Change switch styling
    clickSwitch.classList.add('on');
    clickSwitch.classList.remove('off');

    //Change wall background
    wallBackground.classList.add('dark');
    wallBackground.classList.remove('light');

    //Change status text
    statusText.innerText = "Hey, who turned off the lights?";
  }

});

});
