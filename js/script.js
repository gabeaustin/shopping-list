// $(document).ready(function() {
//   if ($(".item") == "" && $(".item").keydown(function(event) {
//     (event.which == 13) {
//       $(".item").toggle("shake"); 
//     }
//   })

$(document).ready(function() {

  // for(i=0; i<=10; i++ ) {
  //   document.write("hello <br/>");
  // };

  // if (".item" == " ") {
  //   $(".item").toggle("shake");
  // };

  // var listOfItems = [];

  // for (var i = 0; i < listOfItems.length; i++) {
  //   console.log(listOfItems[i]);
  // };

  $( "input" )
    .keyup(function() {
      var value = $( this ).val();
      $( "li" ).html( "<input type='checkbox' class='listOfItemsCheckbox'> " + value + " </input>" )
    });

  $( ".addBtn" ).click(function() {
    var listOfItems = [];

      for (var i = 0; i < listOfItems.length; i++) {
        if listOfItems[i] === $("input".val()) {
          $("ul":first-of-type.remove())
        }
        // $( "li:first-of-type" ).append(function() {
        //   $('ul').prepend( "<li></li>" );

        // })
        console.log(listOfItems[i]);
      };

  });

});


