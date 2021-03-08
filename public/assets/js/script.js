$(function() {
  //Add new burger
  $(".create-form").on("submit", function(event) {
      event.preventDefault();
      var newBurger = {
          burger_name: $("#enter-burger").val().trim(),
          devoured: 0
      };
      // Send the POST request.
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(function() {
          console.log("Burger added!");
          location.reload();
      });
  });

  //Devour Burger
  $("#devour-button").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var devoured = {
          devoured: 1
      };
      // Send the PUT request
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devoured
      }).then(function() {
          console.log("Burger devoured!");
          location.reload();
      });
  });

  //Delete burger
  $("#delete-button").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      // Send the DELETE request
      $.ajax({
          type: "DELETE",
          url: "/api/burgers/" + id
      }).then(location.reload());
  });
});