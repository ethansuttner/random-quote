$(function () {
  var quoteArray = 
    ["Be the change you want to see in the world",
     "Without progress there is no progress",
     "Without struggle there is no struggle",
     "Just do it",
     "If you want to make the world a better place, just do it"];
  var currentQuoteIndex = 0;
  $("#generate-quote").click(function() {
    currentQuoteIndex = getRandomIntExclude(0,quoteArray.length, currentQuoteIndex);
    $("#quote").text(quoteArray[currentQuoteIndex]);
    // $("#quote").text(currentQuoteIndex);
  });
  function getRandomIntExclude(min, max, ex) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomIndex = Math.floor(Math.random() * (max - min)) + min;
    if (ex == randomIndex) { 
      return getRandomIntExclude(min, max, ex);
    } else {
      return randomIndex;
    }
  };
});
