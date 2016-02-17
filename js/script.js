// $(document).ready(function() {
//   $(".item").toggle("shake");
// })

$(document).ready(function() {

  var listOfItems = [];
  listOfItems.push(document.getElementById(listOfItems));

  $( "addBtn" ).click(function() {
    $( "li" ).append( "<input type='checkbox'>" + listOfItems + "</input>" )
    .addClass("listOfItemsCheckbox");
  });

});


