import React from 'react';
import Header from './components/Header';
import PageHeading from './components/PageHeading';
import CategoryList from './components/CategoryList';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import './index.css';

const courses = [
  {
    id: 1,
    category: "PROGRAMMEERIMINE",
    title: "Veebiarenduse alused",
    description: "Õpi looma veebilehti HTML-i, CSS-i ja JavaScriptiga.",
    duration: "24 tundi",
    isPopular: true
  },
  {
    id: 2,
    category: "ANDMEANALÜÜS",
    title: "Andmete analüüs Pythoniga",
    description: "Andmete töötlemine ja lihtsam visualiseerimine.",
    duration: "30 tundi",
    isPopular: true
  },
  {
    id: 3,
    category: "DISAIN",
    title: "Kasutajaliidese kujundamine",
    description: "Hea kasutajaliidese põhimõtted ja lihtsad prototüübid.",
    duration: "18 tundi",
    isPopular: true
  },
  {
    id: 4,
    category: "PROGRAMMEERIMINE",
    title: "Reacti sissejuhatus",
    description: "Komponendid ja nende kasutamine veebirakenduses.",
    duration: "20 tundi",
    isPopular: false
  },
  {
    id: 5,
    category: "ANDMEANALÜÜS",
    title: "Andmete visualiseerimine",
    description: "Graafikute ja diagrammide loomine andmetest.",
    duration: "16 tundi",
    isPopular: false
  },
  {
    id: 6,
    category: "DISAIN",
    title: "Veebilehe kujunduse alused",
    description: "Värvid, tüpograafia ja lehe paigutus.",
    duration: "12 tundi",
    isPopular: false
  }
];

const categories = ["Programmeerimine", "Andmeanalüüs", "Disain"];

function App() {
  const popularCourses = courses.filter(course => course.isPopular);

  return (
    <div className="app-wrapper">
      <Header />
      
      <main className="container">
        <PageHeading />
        
        {/* Punkt 8.4 muudatus: Populaarsed koolitused */}
        <section className="section-block">
          <h2>Populaarsed koolitused</h2>
          <CourseList courses={popularCourses} />
        </section>

        {/* Tavapärane kataloog */}
        <section className="section-block">
          <h2>Kõik koolitused</h2>
          <CategoryList categories={categories} />
          <CourseList courses={courses} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;