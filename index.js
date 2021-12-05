const cards = []
function writeCards(["name"], occasion) {
    for (let i = 0; i < "name".length; i++) {
        cards[i] = `Thank you, ${"name"[i]}, for the wonderful ${occasion} card!`;
        debugger;
    }

    return cards
}
 
function countDown(num) {
let count = num;
while (count >= 0) 
  console.log(count--);
}