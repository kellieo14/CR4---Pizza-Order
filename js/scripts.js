function Pizza(name, size, top) {
  this.name = name;
  this.size= size;
  this.top = [];
}

Pizza.prototype.cost = function() {
  var pizzaCost = this.size + this.topping;
  return pizzaCost;
}

$(document).ready(function() {


    });
  });
});
