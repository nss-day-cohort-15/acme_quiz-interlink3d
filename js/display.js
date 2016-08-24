console.log("display.js");

var pretty = [];
var explosives = [];
var kids = [];

var display = function (categories,types,products){
  // console.log(categories[0].name)
 for (var i in products) {
    if (products[i].type <= 2) {
      // work on creating an object with the keys from categories and types into products
      // var obj = {
      //   category: categories[0].name,
      //   typeName: types.name,
      //   typeDescrip: types.description,
      //   name: products.name,
      //   description: products.description
      // }
      // pretty.push(obj)
      // console.log(pretty)
        pretty.push(products[i]);
      }
    if (products[i].type >2 && products[i].type <6) {
        explosives.push(products[i]);
    };
    if (products[i].type >= 6) {
        kids.push(products[i]);
    };
  };
}
        console.log(pretty)
        console.log(explosives)
        console.log(kids)


var fireInv = function () {
  // console.log('fireworks dom load')
    $("#fwGrid").empty();
    var categories = getCategories();
    var types = getTypes();
    var res1 = "";
    pretty.forEach(function (fire){
      res1 +=
        `<div class="row"
        <div class="col-md-3">
        <div class="singleFirework" style="background-color: tomato;">
        <h5>Category: ${categories[0].name}</h5>
        <h5>Type: ${types[fire.type].name}</h5>
        <h5>Product Name: ${fire.name}</h5>
        <p>${fire.description}</p>
        </div>
        </div>
        </div>`

      });
        $("#fwGrid").append(res1)
};

var explInv = function () {
  // console.log('explosives dom load')
    $("#fwGrid").empty();
    var categories = getCategories();
    var types = getTypes();
    var res2 = "";
    explosives.forEach(function (explode){
       res2 +=
        `<div class="row"
        <div class="col-md-3">
        <div class="singleFirework" style="background-color: lightgrey;">
        <h5>Category: ${categories[1].name}</h5>
        <h5>Type: ${types[explode.type].name}</h5>
        <h5>Product Name: ${explode.name}</h5>
        <p>${explode.description}</p>
        </div>
        </div>
        </div>`

      });
        $("#fwGrid").append(res2)
};

var kidsInv = function () {
  // console.log('kids dom load')
    $("#fwGrid").empty();
    var categories = getCategories();
    var types = getTypes();
    var res3 = "";
    kids.forEach(function (play){
        res3 +=
        `<div class="row"
        <div class="col-md-3">
        <div class="singleFirework" style="background-color: lightblue;">
        <h5>Category: ${categories[2].name}</h5>
        <h5>Type: ${types[play.type].name}</h5>
        <h5>Product Name: ${play.name}</h5>
        <p>${play.description}</p>
        </div>
        </div>
        </div>`

      });
        $("#fwGrid").append(res3)
};

$("#fire").click(fireInv);
$("#expl").click(explInv);
$("#kids").click(kidsInv);

