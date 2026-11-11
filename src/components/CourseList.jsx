import React from 'react';
import CourseCard from './CourseCard';

function CourseList({ courses }) {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          duration={course.duration}
          category={course.category}
        />
      ))}
    </div>
  );
}

export default CourseList;