var xml_urls = {
  'recipes' : 'http://www.kulka.ca/beers/bsmx\Recipe.bsmx',
  'hops': 'http://www.kulka.ca/beers/bsmx\Hops.bsmx',
  'grains' : 'http://www.kulka.ca/beers/bsmx\Grain.bsmx',
  'yeasts' : 'http://www.kulka.ca/beers/bsmx\Yeast.bsmx'
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