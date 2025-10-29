const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "In the middle of difficulty lies opportunity.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The best way to predict the future is to create it.",   
    "Your time is limited, don’t waste it living someone else’s life.",
    "Believe you can and you’re halfway there.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.", 
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "You miss 100% of the shots you don’t take."
]

const usedIndexes  = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote(){
    if(usedIndexes.size === quotes.length){
    usedIndexes.clear();
    }

    while(true){

        const randomIndex = Math.floor(Math.random() * quotes.length);
        if (usedIndexes.has(randomIndex)) continue;

        const quote = quotes[randomIndex];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIndex);
        }
    }
