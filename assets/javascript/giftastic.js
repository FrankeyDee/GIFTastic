$(document).ready(function() {

  var superheroes= [
    'batman',
    'superman',
    'black panther',
    'iron man',
    'spider-man',
    'wonder woman'];

    for (var i = 0; i < superheroes.length; i++) {
      // console.log(superheroes[i]);
      $('.buttons').append('<button id="shbutton">'+superheroes[i]+'</button>'+' ') 
    };
   


    // $.ajax({
    //   url: "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=puTf1GlvsIxLOd1CQI1eAzM62hQaWLKU&limit=10",
    //   method: "GET"
    // }).then(function(response) {

    // }
  
  
})




