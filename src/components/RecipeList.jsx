import { useState, useEffect } from "react";


const Recipe = ({ingredient, onClickRecipe}) => {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (!ingredient) {
      return; 
    }
    else {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then(response => response.json())
      .then(data => {
        setDishes(data.meals);
        
      })
    }
    
  }, [ingredient]);


  return (
    <div className="output-container">
      {dishes?.length > 0 &&
        <h3>found {dishes.length} recipes:</h3>
      }
      <div className="card-container">
        {dishes?.map((dish) => (
          <div key={dish.idMeal} className="card">
            <img alt="dish" src={dish.strMealThumb}/>
            <h5 className="card-title">{dish.strMeal}</h5>
            <button onClick={() => onClickRecipe(dish.idMeal)} className="btn btn-primary">Zum Rezept</button>
          </div>
      ))}
    </div>
  </div>
  );
}

export default Recipe;