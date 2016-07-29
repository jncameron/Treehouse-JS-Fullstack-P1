// randomly chooses a quote from quotes array in quotes.js
function getRandomQuote() {
  var randomise = Math.floor(Math.random() * quotes.length);
   return quotes[randomise];
}

//calls random quote from getRandomQuote and prints to 'quote-box' div
function printQuote(quote) {
  var chosenQuote = getRandomQuote();
  var toQuote = '<p class="quote">' + chosenQuote.quote + '</p>';
  toQuote += '<p class="source">' + chosenQuote.source;
  //citation field only added to output if present
  if (chosenQuote.citation.length !== 0) {        
    toQuote += '<span class="citation">' + chosenQuote.citation + '</span>';
  } 
  //year field only added to output if present
  if (chosenQuote.year.length !==0) {
    toQuote += '<span class="year">' + chosenQuote.year + '</span></p>';
  }
  //console.log(chosenQuote);
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = toQuote;
  changeBackgroundColor();
}
//change background color to one of 6 pre-selected colors each time function is called
function changeBackgroundColor() {
  colors = ['#3399ff', '#009933', '#3D003D', '#A3A300', '#669999', '#cc6600'];
  randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote);

