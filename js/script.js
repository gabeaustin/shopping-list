// $(document).ready(function() {
//   $(".item").toggle("shake");
// })

$(document).ready(function() {
  $( "input" )
    .keyup(function() {
      var value = $( this ).val();
      $( "li" ).html( "<input type='checkbox'>" + value + "</input><br>" )
      .addClass("listOfItemsCheckbox");
    });
});
