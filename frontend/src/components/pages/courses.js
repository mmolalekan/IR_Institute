import './courses.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import NavbarSidebar from '../crumbs/NavbarSidebar'
import Footer from '../crumbs/footer'

const Course = () => {
  const [collapsedSubjects, setCollapsedSubjects] = useState({});

  const subjects = [
    {
      id: 1,
      name: 'Mathematics',
      topics: [
        { id: 1, name: 'Algebra', link: '/topics/algebra' },
        { id: 2, name: 'Calculus', link: '/topics/calculus' },
        { id: 3, name: 'Geometry', link: '/topics/geometry' },
      ],
    },
    {
      id: 2,
      name: 'Science',
      topics: [
        { id: 1, name: 'Physics', link: '/topics/physics' },
        { id: 2, name: 'Chemistry', link: '/topics/chemistry' },
        { id: 3, name: 'Biology', link: '/topics/biology' },
      ],
    },
    {
      id: 3,
      name: 'History',
      topics: [
        { id: 1, name: 'Ancient History', link: '/topics/ancient-history' },
        { id: 2, name: 'Modern History', link: '/topics/modern-history' },
      ],
    },
  ];

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
      
      {subjects.map((subject) => (
        <div key={subject.id} className="subject">
          <div className="subject-header" onClick={() => toggleCollapse(subject.id)}>
            <span className={`collapse-icon ${collapsedSubjects[subject.id] ? 'collapsed' : ''}`}>
              {collapsedSubjects[subject.id] ? '▼' : '▶'}
            </span>
            <h2>{subject.name}</h2>
          </div>
          {collapsedSubjects[subject.id] && (
            <div className="topics">
              {subject.topics.map((topic) => (
                <a key={topic.id} href={topic.link} className="topic">
                  {topic.name}
                </a>
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

export default Course;