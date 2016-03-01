$(document).ready(function() {
  // takes input from the user
  $("input")
    .keyup(function() {
      var value = $(this).val();
      $("li:first-of-type").html("<label for=" + value + "><input type='checkbox' class='listOfItemsCheckbox' id=" + value + ">" + value + "</label>")
    });
    // allows user to drag and drop unwanted items
    $(".removeItem").droppable({
      drop: function(event, ui) {
        $(this)
        .find(".deleteTrashCan")
        .html("&nbsp; Item Removed!");
        $(ui.draggable).remove();
      }
    });
    // confirms that the user wants to remove this item
    $(".removeItem").click(function(){
      if(confirm("Are you sure you want to delete this?")){
        $("input[type=checkbox]:checked").parent().remove();
      }
    })
  // once user adds input and click the plus sign icon the icon is added to array
  $(".addBtn").click(function() {
    var listOfItems = [];

      for (var i = 0; i < listOfItems.length; i++) {
        if (listOfItems[i] === $("input").val()) {
          $("li:first-of-type").remove()
        }
      }
      $("li:first-of-type").draggable();
      $("ul").prepend("<li></li>");
      $("input").val("").focus();
    });
    // adds line-through if user clicks checkbox
    $("input:checkbox").change(function(){
      if ($(this).is(":checked")) {
        $(this).parent().addClass("addedList");
      } else {
        $(this).parent().removeClass("addedList");
      }
    });
  });
        
