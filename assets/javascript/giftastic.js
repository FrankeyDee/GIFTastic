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

  //on click function to declare button value
  $('.button').on('click',function() {
    $(".col-8").empty();
    var thisHero = $(this).text();
    thisHero = thisHero.replace(' ','+');
    // console.log(thisHero);
    //define query URL
    var queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + thisHero + "&api_key=puTf1GlvsIxLOd1CQI1eAzM62hQaWLKU&limit=10");
      // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      for(i = 0; i < 10; i++) {
        var rating = response.data[i].rating;
				var urlThumb = response.data[i].images.original.url;
				var urlStill = response.data[i].images.original_still.url;
        
        var beginDiv = $("<div class='gifBlock'>");
				var img = "<img class='gif' data-moving='" + urlThumb + "' src='" + urlStill + "'>";
        
        var rate = "<p>Rating: " + rating.toUpperCase() + "</p>";
				beginDiv.append(rate,img);
				$(".col-8").append(beginDiv);

        // $('.gif').on("click", function(){
        //   var state = $(this).attr("data-state");
        //   console.log($(this).attr('src'));
        //   if (state === "still") {
        //       $(this).attr("src", $(this).attr("data-animate"));
        //       $(this).attr("data-state","animate");
        //     } else {
        //       $(this).attr("src",$(this).attr("data-still"));
        //       $(this).attr("data-state","still");
        //     }
        })


      }
    })    

  })
  ///call API
  
  

   
})
//   ///function add new hero to array in form using 'submit' button
//   $('#submit').on('click', function(event){
//     event.preventDevault();

//     var superhero = $('#input').val().trim();
//     superhero.push(superhero);
//     renderButtons();
//   })
//   ///function to display results from clicking array buttons
//   function heroGifs(e) {
//     $('.col-8').empty();
//     var thisHero = $(this).attr('data-name');

//     

//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);

//       var results = response.data;
//       for(var i = 0; i<results.length; i++) {
        
//       }
//     });
//   };
    
//   // var yourHero = superheroes[i]
//   // $('.shbutton').on('click', function() {
//   //   console.log($(this).val());
// });




