async function fetchFoods(type = 'search.php?s=') {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${type}`);
    const data = await response.json();
    if (data.meals) return data.meals;
    return [{ idMeal: '', srtMeal: '', srtMealThumb: '' }];
}
  
export default fetchFoods;