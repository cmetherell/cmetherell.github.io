$(document).ready(function() {
  var randomQuote;
  function getQuote () {
    var quoteList = 
      [
        "Not all who wander are lost.", 
        "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.", 
        "All we have to decide is what to do with the time that is given us.",
        "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
        "Never laugh at live dragons.",
        "I will not say: do not weep; for not all tears are an evil."
      ];
    var randomNumber = Math.floor((Math.random()*quoteList.length));
    randomQuote = quoteList[randomNumber];
    
    $(".thequotes").html(randomQuote);
    
    }
  
  $(".tweetme").click(function() {
    window.open("https://twitter.com/intent/tweet?text="+randomQuote);
  });
  
  $(".nextme").click(function() {
    getQuote();
  });
 
});