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
                <div>
                    <ul className="ingredients">
                        {props.ingredients.map(ingredient => (
                            <li className="ingredient">{ingredient.text}</li> /*addkey prop */
                        ))}
                    </ul>
                </div>
                <p className="calories">{props.calories}</p>
                <p>{props.caution}</p>
                <p>{props.meal}</p>
                <p>{props.dish}</p>
            </div> 
        </div>
    )
}

export default Recipe;