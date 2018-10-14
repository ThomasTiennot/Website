
//Changing the picture by clicking on it
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/picture.jpg') {
      myImage.setAttribute ('src','images/picture_2.jpg');
    } else {
      myImage.setAttribute ('src','images/picture.jpg');
    }
}

//Creation of button for user selection
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome on my webpage, ' + storedName + '!' ;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome on my webpage, ' + storedName + '!' ;
}

myButton.onclick = function() {
  setUserName();
}
