

function Pizza(name, size, top, big, finTop) {
  this.customerName = name;
  this.pizzaSize= size;
  this.pizzaTop = top;
  this.pizzaBig = big
  this.finTop = finTop;
}

Pizza.prototype.Cost = function() {
 var cost = this.pizzaSize + this.pizzaTop;
 return cost;
}

$(document).ready(function() {
  $("#new-toppings").click(function(){
      $(".toppings").append('<h4>Select Your Topping</h4>'  +
                  '<select class="form-control new-top">' +
                  '<option id="topping1" value="2">  Pepperoni </option>' +
                  '<option id="topping2" value="2">  Chicken </option>' +
                  '<option id="topping3" value="2">  Bacon </option>' +
                  '<option id="topping4" value="2">  Sausage </option>' +
                  '<option id="topping5" value="1">  Sundried Tomatoes </option>' +
                  '<option id="topping6" value="1">  Peppers </option>' +
                  '<option id="topping7" value="1">  Cheese </option>' +
                  '<option id="topping8" value="1">  Olives </option>' +
                  '<option id="topping9" value="1">  Onions </option>' +
                  '<option id="topping10" value="1"> Pineapple </option>' +
                  '</select>');
    });

  $("form#new-order").submit(function(event) {
    event.preventDefault();
    $("#slide").animate({width:'toggle'},500);

    var inputtedName = $("input#new-name").val();
    var finalSize = parseInt($("select.new-size option:selected").val());
    var finalTop = parseInt($("select.new-top option:selected").val());
    var inputtedSize = $(this).find("select.new-size option:selected").text();
    var inputtedTop = $(this).find("select.new-top option:selected").text();
    var newPizza = new Pizza(inputtedName, finalSize, finalTop, inputtedSize, inputtedTop);

    $("ul#orders").append("<li><span class='order'>" + newPizza.customerName + "</span></li>");

    $(".order").last().click(function() {

      $("#show-order").show();
      $("#show-order h2").text(newPizza.customerName);
      $("ul#show-list").text("");
      $("ul#show-cost").text("");
      $("ul#show-list").append("<li>" + newPizza.pizzaBig + "</li>");
      $("ul#show-list").append("<li>" + newPizza.finTop + "</li>");
      $("ul#show-cost").append("<li>" + "Total Cost: " + "$" + newPizza.Cost() + "</li>");
    });


    $("input#new-name").val("");

    });
  });
