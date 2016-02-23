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

  $("input")
    .keyup(function() {
      var value = $(this).val();
      $("li:first-of-type").html("<label for=" + value + "><input type='checkbox' class='listOfItemsCheckbox' id=" + value + ">" + value + "</label>")
    });

  $("input:checkbox").change(function(){
    if ($(this).is(":checked")) {
      $("li.listOfItems").addClass("addedList");
    } else {
      $("li.listOfItems").removeClass("addedList");
    }
  });

  $(".addBtn").click(function() {
    var listOfItems = [];

      for (var i = 0; i < listOfItems.length; i++) {
        if (listOfItems[i] === $("input").val()) {
          $("li:first-of-type").remove()
        }
      };
        
  $("ul").prepend("<li></li>");

  $("input").val("").focus();

        
  // console.log(listOfItems[i]);

  });

});


