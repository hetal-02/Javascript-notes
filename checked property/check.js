
document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    
    if(myCheckBox.checked){
        console.log("You are subscribed!!");
    }else{
        console.log("You are not subscribed!")
    }

    if(visaBtn.checked){
        console.log("you are paying with visa.");
    }
    else if(masterCardBtn.checked){
        console.log("you are paying with Master Card.");
    }
    else if(paypalBtn.checked){
        console.log("you are paying with PayPal.");
    }
    else{
        console.log("Select a payment method first.")
    }
}