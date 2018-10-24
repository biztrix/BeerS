var xml_urls = {
  'recipes' : 'https://drive.google.com/open?id=1upGHcPcnzpZrhu_nQ37f_kBz9xpK2kzU',
  'hops': 'https://drive.google.com/open?id=1trm3iVjK3kFj7Q8KUFp_7JWWeH5lnp0O',
  'grains' : 'https://drive.google.com/open?id=1ItAsHdNpG39N-dvKQ5yTl3DSvC6N0fyI',
  'yeasts' : 'https://drive.google.com/open?id=14-yvqGh6bCi3Me89A8Yg6oyfA4tgqI5_'
}

var page_urls = {
	'index' : 'http://www.cnn.ca',
	'ingredients' : 'http://www.kulka.ca/beers/ingredients.html',
	'recipe_details' : 'http://www.kulka.ca/beers/recipe-details.html',
	'recipes' : 'http://www.kulka.ca/beers/recipes.html',
	'setup' : 'http://www.kulka.ca/beers/setup.html'
};

$(document).ready(function(){
  beersmithViewerLoad(xml_urls);
});