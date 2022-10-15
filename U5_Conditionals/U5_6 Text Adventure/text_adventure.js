alert ("You are a strugling merchant looking for a better life. The choices you make now impact your life in the future, so choose wisely...");

let sell_clothes_or_food = prompt ("Do you want to sell food or clothes? Please type 1 for food or 2 for clothes");

if (sell_clothes_or_food == 1){
    let fresh_or_processed = prompt("Do you want to sell fresh food or canned food? Please type 1 for fresh or 2 for canned");
    if(fresh_or_processed == 1) {
        alert ("All of your fresh food spoiled before you could make enough sales to buy more. You are know in a worse position in life than you were to begin with.");
    } else {
        alert ("You do manage to find customers, but unfortunately your food has way too much sodium, which causes them leave bad reviews online leading to the downfall of your business")
    }
} else {
    let cheap_or_expensive = prompt ("Do you want to sell your clothes at good price or rip people off by telling them that the clothes you are selling are from fancy design firms and worth hundreds when they are actually not. Please type 1 for cheap clothes or 2 for expensive clothes");
    if (cheap_or_expensive == 1) {
        alert ("People buy your clothes at such low prices, but your margins are razer thin and you still live in hard times despite selling lots of clothes");
    } else {
        let keep_or_be_honest = prompt("your customors discover that you have been ripping them off for all of these years. Do you want to refund their money or keep it for yourself. Please type 1 to refund the money or 2 to keep it");
        if (keep_or_be_honest == 1){
            alert ("You return all of the piles of money that you have accumulated leaving you broke and without a good reputation...");
        }
        else {
            alert ("You are now rich but have lose the trust of many. This is the correct path but you must question if you regret your decision");
        } 
    }
}