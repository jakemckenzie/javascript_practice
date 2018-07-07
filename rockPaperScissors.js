function rockPaperScissors(a, b){
    if (a.toUpperCase() == "ROCK" && (b.toUpperCase() == "ROCK" || b.toUpperCase() == "PAPER" || b.toUpperCase() == "SCISSORS")) {
        console.log((b.toUpperCase() == ("ROCK")) ? "TIE!" : (b.toUpperCase() == ("PAPER")) ? "Player 2 wins!" : "Player 1 wins!");
    }
    if (a.toUpperCase() == "PAPER" && (b.toUpperCase() == "ROCK" || b.toUpperCase() == "PAPER" || b.toUpperCase() == "SCISSORS")) {
        console.log((b.toUpperCase() == ("PAPER")) ? "TIE!" : (b.toUpperCase() == ("SCISSORS")) ? "Player 2 wins!" : "Player 1 wins!");
    }
    if (a.toUpperCase() == "SCISSORS" &&( b.toUpperCase() == "ROCK" || b.toUpperCase() == "PAPER" || b.toUpperCase() == "SCISSORS")) {
        console.log((b.toUpperCase() == ("SCISSORS")) ? "TIE!" :  (b.toUpperCase() == ("ROCK")) ? "Player 2 wins!" : "Player 1 wins!");
    }
    if (!(a.toUpperCase() == "ROCK" || a.toUpperCase() == "PAPER" || a.toUpperCase() == "SCISSORS") || !(b.toUpperCase() == "ROCK" || b.toUpperCase() == "PAPER" || b.toUpperCase() == "SCISSORS")) {
        if (!(a.toUpperCase() == "ROCK" || a.toUpperCase() == "PAPER" || a.toUpperCase() == "SCISSORS") && (b.toUpperCase() == "ROCK" || b.toUpperCase() == "PAPER" || b.toUpperCase() == "SCISSORS")) {
            console.log("Invalid move of " + a + "!");        
        } else if ((a.toUpperCase() == "ROCK" || a.toUpperCase() == "PAPER" || a.toUpperCase() == "SCISSORS") && !(b.toUpperCase() == "ROCK" || b.toUpperCase() == "PAPER" || b.toUpperCase() == "SCISSORS")) {
            console.log("Invalid move of " + b + "!");  
        } else {
            console.log("Invalid moves of " + a + " and " + b + "!");
        }
    }
    
}