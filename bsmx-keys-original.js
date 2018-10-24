var xml_urls = {
  'recipes' : 'http://orangetones.synology.me:62668/BeerSmith2/Recipe.bsmx',
  'hops': 'http://orangetones.synology.me:62668/BeerSmith2/Hops.bsmx',
  'grains' : 'http://orangetones.synology.me:62668/BeerSmith2/Grain.bsmx',
  'yeasts' : 'http://orangetones.synology.me:62668/BeerSmith2/Yeast.bsmx'
}

var page_urls = {
	'index' : 'http://orangetones.synology.me:62668/index.html',
	'ingredients' : 'http://orangetones.synology.me:62668/ingredients.html',
	'recipe_details' : 'http://orangetones.synology.me:62668/recipe-details.html',
	'recipes' : 'http://orangetones.synology.me:62668/recipes.html',
	'setup' : 'http://orangetones.synology.me:62668/setup.html'
};

$(document).ready(function(){
  beersmithViewerLoad(xml_urls);
});