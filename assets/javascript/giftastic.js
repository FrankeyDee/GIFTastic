$(document).ready(function() {
  ///declare items in array
  var superheroes= [
    'batman',
    'superman',
    'black panther',
    'iron man',
    'spider-man',
    'wonder woman'];

  //buttons for array
  function renderButton() {
    for (var i = 0; i < superheroes.length; i++) {
      // console.log(superheroes[i]);
      $('.buttons').append($('<button class="button" value="value">'+superheroes[i]+'</button>'));
    }
  }
  renderButton();

  ///take value of 'input' when you click on 'submit' and add to the array
  $('button').on('click', function() {
    console.log('hi!');
  })



  //on click function to declare button value
  $('.button').on('click',function() {
    $(".col-8").empty();
    var thisHero = $(this).text();
    thisHero = thisHero.replace(' ','+');
    // console.log(thisHero);
    //define query URL
    var queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + thisHero + "&api_key=puTf1GlvsIxLOd1CQI1eAzM62hQaWLKU&limit=10");
      // console.log(queryURL);
    // connect to giphy API, create variables for results
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data;

      $('#results').empty();
      for(var i = 0; i < 10; i++) {
        var rating = results[i].rating;
				var urlImg = results[i].images.original_still.url;
        var urlGif = results[i].images.original.url;

        var beginDiv = $("<div class='gifBlock'>");
				var img = '<img src= " ' + urlImg +
            '" data-still=" ' + urlImg +
            ' " data-animate=" ' + urlGif + '" data-state="still" class="thisGIF"><br>';
        
          $('.thisGIF').on('click', function(){
            var state = $(this).attr('data-state');
              if (state === 'still'){
                $(this).attr('src',$(this).attr('data-animate'));
                $(this).attr('data-state', 'animate');
              } else {
                $(this).attr('src',$(this).attr('data-still'));
                $(this).attr('data-state', 'still')
              }
          })
       
        var rate = "<p>Rating: " + rating.toUpperCase();
				  beginDiv.append(rate,img);
				  $(".col-8").append(beginDiv);
      }})
    }    
  )
});
