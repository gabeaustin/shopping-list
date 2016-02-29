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

  $(".addBtn").click(function() {
    var listOfItems = [];

      for (var i = 0; i < listOfItems.length; i++) {
        if (listOfItems[i] === $("input").val()) {
          $("li:first-of-type").remove()
        }
      };
        
  $("ul").prepend("<li></li>");

  $("input").val("").focus();

  $(function() {
    $("li").draggable();
    $(".removeItem").droppable({
      drop: function(event, ui) {
        $(this)
        .find(".deleteTrashCan")
        .html("&nbsp; Item Removed!");
      }
    });
  });

  // needs work - below
  $("input:checkbox").change(function(){
    if ($(this).is(":checked")) {
      $("li").addClass("addedList");
    } else {
      $("li").removeClass("addedList");
    }
  });


  function removeItems(elem){
    if(confirm("Are you sure you want to delete this?")){
      elem.remove();
    }
  };

  function itemClicked() {
    $("item:checkbox");
  };

  function trashClicked() {
    $(".deleteTrashCan").click();
  };

  if (itemClicked && trashClicked) {
    removeItems($("li").find("input:checked").parent());
  };

  //delete checked items
  // if ("li").click() && ("i").click()
  // $("li").click(function() {
  //   removeItems($("li").find("input:checked").parent());
  // });

        
  // console.log(listOfItems[i]);

  });

});


