$(document).ready(function() {
  

  var superheroes= [
    'batman',
    'superman',
    'black panther',
    'iron man',
    'spider-man',
    'wonder woman'];

  for (var i = 0; i < superheroes.length; i++) {
    $('.buttons').append('<button class="shbutton" value='+superheroes[i]+'>'+superheroes[i]+'</button>'+' ');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + superheroes[i] + "&api_key=puTf1GlvsIxLOd1CQI1eAzM62hQaWLKU&limit=10";
  };
   
    ///Get from Giphy API
    

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    
  })
  $('#submit').on('click', function() {
    ///add value in search img to array
  })
  $('.shbutton').on('click', function() {
    console.log($(this).val());
  })  
})




