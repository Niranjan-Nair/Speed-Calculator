
function myFunction() {
    var distance = document.getElementById('distance').value;
var hours = document.getElementById('time').value;
    document.getElementById("answer").innerHTML = 'Average speed is :  ' + distance / hours + ' Kmph';
}