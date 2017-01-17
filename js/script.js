// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array with objects
var quotes = [
    {
      quote: "So many books, so little time.",
      source: "Frank Zappa",
      tags: "Humor"
    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      source: "Mark Twain",
      tags: "Truth"
    },
    {
      quote: "Without music, life would be a mistake.",
      source: "Friedrich Nietzsche",
      citation: "Twilight of the Idols",
      year: "1889",
      tags: "Music"
    },
    {
      quote: "Never laught at live dragons.",
      source: "J.R.R Tolkien",
      tags: "Wisdom"
    },
    {
      quote: "The secret of life, though, is to fall seven times and to get up eight times.",
      source: "Paulo Coelho",
      citation: "The Alchemist",
      year: "1988",
      tags: "Inspirational"
    }
  ];

var randomQuote;
var usedQuotes = [];
var finalQuote;


// function which generate a random number and use it to select an object from the quotes array
function getRandomQuote () {
  var i = Math.floor (Math.random() * quotes.length)
  if (quotes.length === 0) {
     quotes = usedQuotes.splice(quotes.length);
  }
  finalQuote = quotes.splice(i, 1)[0];
  usedQuotes.push(finalQuote);
  return finalQuote;
  }

// generate randong RGB number
function randomColor () {
return Math.floor (Math.random() * 256) ;
}

// if the button isn't clicked, this changes the quote after 30s
var intervalID = window.setInterval(printQuote, 30000);

// function which gets the random quote and print its elements
function printQuote() {
 randomQuote = getRandomQuote();
 console.log(randomQuote.quote);
 var stringHTML = '<p class="quote">' + randomQuote.quote + '</p>';
 stringHTML += '<p class="source">' + randomQuote.source;
   if (randomQuote.citation) {
   stringHTML += '<span class="citation">' + randomQuote.citation + '</span>';
   }
   if (randomQuote.year) {
   stringHTML += '<span class="year">' + randomQuote.year + '</span>';
   }
  stringHTML += '<span class="tags"> ( ' + randomQuote.tags + ' ) </span></p>';

  var r = randomColor();
  var g = randomColor();
  var b = randomColor();

 document.getElementById('quote-box').innerHTML = stringHTML;
 document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

  }
