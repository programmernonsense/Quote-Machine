function randomQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      $("#quoteBody").html(response.quoteText);
      $("#quoteAuthor").html('~' + response.quoteAuthor);
      $("#share").attr("href", "https://twitter.com/home/?status=" + response.quoteText + '~' + response.quoteAuthor + '\n' + ' www.programmernonsense.com/quotes.html');
    }
  });
}

$(function() {
  randomQuote();
});

$("button").click(function() {
  randomQuote();
});
