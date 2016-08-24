console.log("display.js");

// $(document).ready(function () {

var pretty = [];
var explosives = [];
var kids = [];

var display = function (categories,types,products){
 for (var i in types) {
    if (types[i].category === 0) {
        pretty.push(types[i]);
    };
    if (types[i].category === 1) {
        explosives.push(types[i]);
    };
    if (types[i].category === 2) {
        kids.push(types[i]);
    };
  };
}
        console.log(pretty)
        console.log(explosives)
        console.log(kids)

var fireInv = function () {
  console.log('fireworks dom load')
    $("#fwGrid").empty();
    var res1 = "";
    pretty.forEach(function (fire){
      res1 +=
        `"results1"
        <div class="row"
        <div class="col-md-3">
        <div class="singleFirework" style="background-color: tomato;">
        <h5>Category: ${pretty.id}</h5>
        <h5>Type: ${pretty.type}</h5>
        <h5>Product Name: ${pretty.name}</h5>
        <p>${pretty.description}</p>
        </div>
        </div>
        </div>`

      });
        $("#fwGrid").append(res1)
};

var explInv = function () {
  console.log('explosives dom load')
    $("#fwGrid").empty();
    var res2 = "";
    explosives.forEach(function (explode){
       res2 +=
        `"results2"
        <div class="row"
        <div class="col-md-3">
        <div class="singleFirework" style="background-color: lightgrey;">
        <h5>Category: ${pretty.id}</h5>
        <h5>Type: ${pretty.type}</h5>
        <h5>Product Name: ${pretty.name}</h5>
        <p>${pretty.description}</p>
        </div>
        </div>
        </div>`

      });
        $("#fwGrid").append(res2)
};

var kidsInv = function () {
  console.log('kids dom load')
    $("#fwGrid").empty();
    var res3 = "";
    kids.forEach(function (play){
        res3 +=
        `"results3"
        <div class="row"
        <div class="col-md-3">
        <div class="singleFirework" style="background-color: lightblue;">
        <h5>Category: ${pretty.id}</h5>
        <h5>Type: ${pretty.type}</h5>
        <h5>Product Name: ${pretty.name}</h5>
        <p>${pretty.description}</p>
        </div>
        </div>
        </div>`

      });
        $("#fwGrid").append(res3)
};

$("#fire").click(fireInv);
$("#expl").click(explInv);
$("#kids").click(kidsInv);

// })

