import React from 'react';

function Recipe(props) { 
    
    return(
        <div className="recipe">
            <h2 className="recipe-title">{props.title}</h2>
            <ol className="ingredients">
                {props.ingredients.map(ingredient => (
                    <li className="ingredient">{ingredient.text}</li> /*addkey prop */
                ))}
            </ol>
            <p className="calories">{props.calories}</p>
            <img className="recipe-image" src={props.image} alt={props.title} />
            <p>{props.caution}</p>
            <p>{props.meal}</p>
            <p>{props.dish}</p>
        </div>
    )
}

export default Recipe;