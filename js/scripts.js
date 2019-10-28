$(document).ready(function() {
  $("#favoriteThings").submit(function(event) {
    event.preventDefault();
    var userColor = $("input#userColor").val();
    var userFruit = $("input#userFruit").val();
    var userAnimal = $("input#userAnimal").val();
    var userMovie = $("input#userMovie").val();
    var userDrink = $("input#userDrink").val();
    //
    userFavorite = [userColor, userFruit, userAnimal, userMovie, userDrink];
      alert(userFavorite);
    });
  });
