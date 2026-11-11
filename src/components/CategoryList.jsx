import React from 'react';

function CategoryList({ categories }) {
  return (
    <div className="categories-filter">
      <button className="category-btn active">Kõik</button>
      {categories.map((category, index) => (
        <button key={index} className="category-btn">
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;