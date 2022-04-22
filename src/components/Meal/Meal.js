import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { addToHandle, meal } = props;
    const { strMeal, strInstructions, strMealThumb } = props.meal;

    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>
            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={() => addToHandle(meal)}>Add this Food</button>
        </div>
    );
};

export default Meal;