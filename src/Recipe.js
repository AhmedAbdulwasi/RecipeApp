import React from "react";

const Recipe = ({ name, calories, image, time, url, ingredients }) => {
    const ingredientsText = ingredients.map(ingredient => ingredient.text).join(", ");
    const RoundedCalories = Math.floor(calories);
  return (
    <div className="RecipeCard">
        <div className="RecipeInfo">
        <h3>Name of Recipe: {name}</h3>
        <p>Calories: {RoundedCalories}</p>
        <h4>Ingredients</h4>
        <p>{ingredientsText}</p>
        <p>Time: {time} mins</p>
        <p>Source: <a href={url}>{url}</a></p>
        <div className="ImageBox">
            <img src={image} alt="" />
        </div>

        </div>
    </div>
  );
};

export default Recipe;