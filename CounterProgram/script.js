let count = 0;

document.getElementById("decreasebtn").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetbtn").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increasebtn").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}