var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/digital_forensic.png') {
      myImage.setAttribute ('src','images/digital_forensics2.jpg');
    } else {
      myImage.setAttribute ('src','images/digital_forensic.png');
    }
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
   var myName=prompt('Please enter your name.');
   localStorage.setItem('name',myName);
   myHeading.innerHTML='Digital Forensic,'+myName;
}

/* This function contains a prompt() function, which brings up a dialog box, a bit like alert() except that prompt() asks the user to enter some data, and stores that data in a variable after the user presses OK.

Next, we call on an API called localStorage, which allows us to store data in the browser and retrieve it later on.

We use localStorage's setItem() function to create and store a data item called 'name', and set its value to the myName variable that contains the name the user entered.*/

if(! localStorage.getItem('name')){

   setUserName();
}else{
    var storedName=localStorage.getItem('name');
    myHeading.innerHTML='Digital Forensic,'+storedName;
}

myButton.onclick=function(){
   setUserName();
}


