// randomly chooses a quote from quotes array in quotes.js
function getRandomQuote() {
  var randomise = Math.floor(Math.random() * quotes.length);
  var spliced = quotes.splice(randomise, 1)[0]; // remove selected quote from quotes array and stote in spliced var
  usedQuotes.push(spliced); 
  //when quotes array becomes empty, refilled with usedQuotes, which is then reset
  if (quotes.length === 0) {
    quotes = usedQuotes;
    usedQuotes = [];
  }
  return spliced;
}

//calls random quote from getRandomQuote and prints to 'quote-box' div
function printQuote(quote) {
  var chosenQuote = getRandomQuote();
  console.log(chosenQuote);
  var toQuote = '<p class="quote">' + chosenQuote.quote + '</p>';
  toQuote += '<p class="source">' + chosenQuote.source;
  //citation field only added to output if present
  if (chosenQuote.citation) {        
    toQuote += '<span class="citation">' + chosenQuote.citation + '</span>';
  } 
  //year field only added to output if present
  if (chosenQuote.year) {
    toQuote += '<span class="year">' + chosenQuote.year + '</span></p>';
  }
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = toQuote;
  changeBackgroundColor();
  return chosenQuote;
}
var usedQuotes = [];

//change background color to one of 6 pre-selected colors each time function is called
function changeBackgroundColor() {
  var colors = ['#3399ff', '#009933', '#3D003D', '#A3A300', '#669999', '#cc6600'];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote);
// quote automatically updated every 30 seconds
//window.setInterval(printQuote, 30000);
