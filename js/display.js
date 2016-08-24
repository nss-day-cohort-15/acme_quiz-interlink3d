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
    pretty.forEach(function (){
        $("#fwGrid").append(
        `<h1>"hello"</h1><div class="col-md-3">
        <div class="singleFirework" style="background-color: red">
        <h5>Category: ${categories[types[pretty.type].category].name}</h5>
        <h5>Type: ${types[pretty.type].name}</h5>
        <h5>Product Name: ${pretty.name}</h5>
        <p>${pretty.description}</p></div></div>`
        )});

};

var explInv = function () {
    $("#fwGrid").empty();
    explosives.forEach(function (){
        $("#fwGrid").append(
        `<div class="col-md-3">
        <div class="singleFirework" style="background-color: white">
        <h5>Category: ${categories[types[explosives.type].category].name}</h5>
        <h5>Type: ${types[explosives.type].name}</h5>
        <h5>Product Name: ${explosives.name}</h5>
        <p>${explosives.description}</p>
        <div class="col-md-1"></div></div>`
        )});

};

var kidsInv = function () {
    $("#fwGrid").empty();
    kids.forEach(function (){
        $("#fwGrid").append(
        `<div class="col-md-3">
        <div class="singleFirework" style="background-color: blue">
        <h5>Category: ${categories[types[kids.type].category].name}</h5>
        <h5>Type: ${types[kids.type].name}</h5>
        <h5>Product Name: ${kids.name}</h5>
        <p>${kids.description}</p></div></div>`
        )});

};

$("#fire").click(fireInv);
$("#expl").click(explInv);
$("#kids").click(kidsInv);

// })

