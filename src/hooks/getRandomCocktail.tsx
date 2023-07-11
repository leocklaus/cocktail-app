const ingredients = ['lemon', 'gin', 'water']

function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

export function getRandomCocktailIngredient(){
    let number = randomIntFromInterval(0, 2);
    return ingredients[number];
}