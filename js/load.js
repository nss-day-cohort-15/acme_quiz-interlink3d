console.log("load.js")
$(document).ready(function () {

var DirtStand = (function (loadInv) {
  var categories = [];
  var types = [];
  var products = [];


  loadInv.stockShelves = function (display) {
    Promise.all([
      $.getJSON('categories.json'),
      $.getJSON('types.json'),
      $.getJSON('products')
      ])


      .then(function(resolve){
        categories = resolve[0].categories
        types = resolve[1].types
        products = resolve[2].products[0]
        resolve(categories, types, products)
      })

    }

  return loadInv;


  // loadInv.stockShelves = function (display) {

  //   $.getJSON('categories.json')
  //     .then( function(resolve) {
  //       categories = resolve.categories;
  //       return categories;
  //     });
  //       console.log("content", categories)

  //   $.getJSON('types.json')
  //     .then( function(resolve) {
  //       types = resolve.types;
  //       return types;
  //     });


  //   $.getJSON('products.json')
  //     .then( function(resolve) {
  //       products = resolve.products;
  //       return products;
  //     });

  // }

    })
      (DirtStand || {})
})
