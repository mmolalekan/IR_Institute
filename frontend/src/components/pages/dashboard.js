import React from 'react';
import { Link } from 'react-router-dom';
import NavbarSidebar from '../crumbs/NavbarSidebar';
import Footer from '../crumbs/footer';
import './dashboard.css';

const Dashboard = ({ courses }) => {
  return (
    <>
      <NavbarSidebar />
      <div className="dashboard-container">
        <div className="table-container">

          <table className="table">
            <thead>
              <tr>
                <th colSpan="3">Course Score</th>
              </tr>
              <tr>
                <th>Course</th>
                <th>Overall score</th>
                <th>% Completed</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>Implement course score</td>
                  <td>Implement % done</td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="table">
            <thead>
              <tr>
                <th colSpan="3">Topic Completed (Score)</th>
              </tr>
              <tr>
                <th>Course</th>
                <th>Topics</th>
                <th>Scores</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <React.Fragment key={course.id}>
                  <tr>
                    <td rowSpan={course.topics.length || 1}>{course.title}</td>
                    {course.topics.length > 0 ? (
                      <>
                        <td>
                          <Link to={{
                            pathname: `/question/${course.topics[0].id}`,
                            state: { id: course.topics[0].id }
                          }}>
                            {course.topics[0].title}
                          </Link>
                        </td>
                        <td>Implement score</td>
                      </>
                    ) : (
                      <td colSpan="2">No topics</td>
                    )}
                  </tr>
                  {course.topics.slice(1).map((topic) => (
                    <tr key={topic.id}>
                      <td>
                        <Link to={{
                          pathname: `/question/${topic.id}`,
                          state: { id: topic.id }
                        }}>
                          {topic.title}
                        </Link>
                      </td>
                      <td>Implement score</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <table className="table">
            <thead>
              <tr>
                <th colSpan="3">Topic In Progress (% Completed)</th>
              </tr>
              <tr>
                <th>Course</th>
                <th>Topics</th>
                <th>% Completed</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <React.Fragment key={course.id}>
                  <tr>
                    <td rowSpan={course.topics.length || 1}>{course.title}</td>
                    {course.topics.length > 0 ? (
                      <>
                        <td>{course.topics[0].title}</td>
                        <td>Implement % completed</td>
                      </>
                    ) : (
                      <td colSpan="2">No topics</td>
                    )}
                  </tr>
                  {course.topics.slice(1).map((topic) => (
                    <tr key={topic.id}>
                      <td>{topic.title}</td>
                      <td>Implement % completed</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

