
let cards = ["A","1","2","3","4","5","6","7","8","9","10","J","Q","K"];
shuffleCard(cards);
console.log(cards);
function shuffleCard(cards){

    let currentIndex = cards.length;
    while(currentIndex != 0){
        let randomIndex = Math.floor( Math.random() * cards.length);
        currentIndex -= 1;
    
        let temp = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temp;
    }
    //return cards;

}





