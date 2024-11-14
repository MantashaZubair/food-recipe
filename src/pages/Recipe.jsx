import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data.json';
import "../style/Recipe.css"; // Custom CSS if needed
import { SearchContext } from '../customHook/useSearch';

const Recipe = () => {
  const { name } = useParams(); // Get recipe name from URL parameters
  const { searchQuery, filteredData } = useContext(SearchContext);
  console.log(filteredData);

  // If there's a search query, filter the data from filteredData, otherwise from the original data
  const recipe = searchQuery 
    ? filteredData.find(item => item.itemName.toLowerCase() === name.toLowerCase()) 
    : data.find(item => item.itemName.toLowerCase() === name.toLowerCase());

  console.log(name);
  console.log(recipe);

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  return (
    <div className="recipe-container">
      <h1>{recipe.itemName}</h1>
      <img src={`/images/${recipe.image}`} alt={recipe.itemName} className="recipe-image" />
      
      <div className="recipe-details">
        <h2>Ingredients</h2>
        <ul className="ingredients-list">
           {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2>Instructions</h2>
        <ol className="instructions-list">
          {recipe.instruction.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
