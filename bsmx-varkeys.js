var xml_urls = {
  'recipes' : 'http://www.kulka.ca/beers/bsmx/Recipe.bsmx',
  'hops': 'http://www.kulka.ca/beers/bsmx/Hops.bsmx',
  'grains' : 'http://www.kulka.ca/beers/bsmx/Grains.bsmx',
  'yeasts' : 'http://www.kulka.ca/beers/bsmx/Yeasts.bsmx'
}

var page_urls = {
	'index1' : 'http://www.cbc.ca',
	'ingredients' : 'http://www.kulka.ca/beers/ingredients.html',
	'recipe_details' : 'http://www.kulka.ca/beers/recipe-details.html',
	'recipes' : 'http://www.kulka.ca/beers/recipes.html',
	'setup' : 'http://www.kulka.ca/beers/setup.html'
};

$(document).ready(function(){
  beersmithViewerLoad(xml_urls);
});