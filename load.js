var DirtStand = (function (loadInv) {
  var categories = []
  var types = []
  var products = []


  loadInv.stockShelves = function (invDisplay) {
    Promise.all([
      $.getJSON('categories.json'), 
      $.getJSON('types.json'),
      $.getJSON('products')
      ])
    

      .then(function(inventory){
        categories = inventory[0].categories
        types = inventory[1].types
        products = inventory[2].products[0]
        invDisplay(categories,types,products)
      })

    }
  return loadInv;
  console.log("loadInv", DirtStand.categories);
  console.log("loadInv", DirtStand.types);
  console.log("loadInv", DirtStand.invDisplay);

})

(DirtStand || {})


