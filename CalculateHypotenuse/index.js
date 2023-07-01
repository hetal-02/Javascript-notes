let a;
let b;
let c;



document.getElementById("mybutton").onclick = function(){
    a = document.getElementById("egtext1").value;
    a = Number(a);

    b = document.getElementById("egtext2").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("lablec").innerHTML = "side c: " + c;
    

}
