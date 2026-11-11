import React from 'react';

function CourseCard({ title, description, duration, category }) {
  return (
    <article className="course-card">
      <span className="card-category">{category}</span>
      <h3>{title}</h3>
      <p className="card-desc">{description}</p>
      <p className="card-meta">Maht: {duration}</p>
    </article>
  );
}

export default CourseCard;