// The function below is just a test to check if I can change the value inside the button when I click button


function clickChange() {
    document.getElementById("demo").innerHTML = "Goodness try out.";
    document.getElementById("btn-change").innerHTML = "Thank You!"
    // document.getElementById("demo").innerHTML = "This is the default content"


}

function changeBulbOn() {
    document.getElementById("bulb").src='./dist/img/bulbon.gif'
}

function changeBulbOff() {
    document.getElementById("bulb").src='./dist/img/pic_bulboff.gif'
}