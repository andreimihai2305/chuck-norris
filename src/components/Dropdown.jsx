import React from 'react';
import "./Dropdown.css";

const Dropdown = ({ categories, onSelect }) => {
    return (
        <div className='dropdown-container'>
            <label htmlFor="categories">Choose a category :</label>
            <select onChange={onSelect} className='dropdown' name="categories" id="categories">
                <option className='option' value="all">All</option>
              {categories.map(category => (
                <option key={category} className='option' value={category}> {category.charAt(0).toUpperCase() + category.slice(1)} </option>
              ))}
            </select>
        </div>
    );
}

export default Dropdown;
