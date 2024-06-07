import './courses.css';
import React, { useState } from 'react';
import NavbarSidebar from '../crumbs/NavbarSidebar';
import Footer from '../crumbs/footer';

const Courses = ({ courses }) => {
  const [collapsedSubjects, setCollapsedSubjects] = useState({});

  const toggleCollapse = (subjectId) => {
    setCollapsedSubjects((prev) => ({
      ...prev,
      [subjectId]: !prev[subjectId],
    }));
  };

  return (
    <>
      <NavbarSidebar />
      <div className="subjects-container">
        {courses.map((subject) => (
          <div key={subject.id} className="subject">
            <div className="subject-header" onClick={() => toggleCollapse(subject.id)}>
              <span className={`collapse-icon ${collapsedSubjects[subject.id] ? 'collapsed' : ''}`}>
                {collapsedSubjects[subject.id] ? '▼' : '▶'}
              </span>
              <h2>{subject.title}</h2>
            </div>
            {collapsedSubjects[subject.id] && (
              <div className="topics">
                {subject.topics.map((topic) => (
                  <div key={topic.id} className="topic">
                    {topic.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Courses;
