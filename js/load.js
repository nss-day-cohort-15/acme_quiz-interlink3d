console.log("load.js")

// $(document).ready(function () {

var stockShelves = function () {
  Promise.all([
    $.getJSON('categories.json'),
    $.getJSON('types.json'),
    $.getJSON('products.json')
    ])


    .then(function(resolve){
      var categories = resolve[0].categories
      var types = resolve[1].types
      var products = resolve[2].products[0]
      display(categories, types, products);

    })
}

stockShelves();

// })

// started to work through the individual getJSON calls and chaining them
// but was getting hung up. Moved to doing promise.all

  // stockShelves = function () {

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

