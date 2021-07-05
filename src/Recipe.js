import React from 'react';
import { useState } from 'react';
import './Recipe.css';

function Recipe(props) { 

    const [click, setClicked] = useState(false);
    
    const showRecipe = () => { //show the recipe div
        setClicked(true)
    }

    const hideRecipe = () => { //hide the recipe div
        setClicked(false)
    }     
    
    return(
        <div className="recipe">
            <h2 className="recipe-title">{props.title}</h2>
            <img className="recipe-image" src={props.image} alt={props.title} />

            <button id='show' onClick={showRecipe} className={ click ? 'clicked' : 'clicked-active' }>Show Recipe</button>
            <button id='hide' onClick={hideRecipe} className={ click ? 'clicked-active' : 'clicked' }>Hide Recipe</button>

            <div className={ click ? 'clicked-active' : 'clicked' } >
                <div className="recipe-content">
                    <h3 className="type">{props.meal} {props.dish}</h3>
                    <ul className="ingredients">
                        Ingredients:
                        {props.ingredients.map(ingredient => (
                            <li className="ingredient">{ingredient.text}</li> /*addkey prop */
                        ))}
                    </ul>
                
                    <p className="calories">Calories: {props.calories}</p>
                    <p className="caution">Caution, may contain: {props.caution}</p>
                    
                </div>
            </div> 
        </div>
    )
}

export default Recipe;