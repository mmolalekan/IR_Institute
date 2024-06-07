import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Dashboard from './components/pages/dashboard';
import Profile from './components/pages/profile';
import Update from './components/pages/update';
import Question from './components/pages/question';
import About from './components/pages/about';
import Courses from './components/pages/courses';
import Teachers from './components/pages/teachers';
import TeacherProfile from './components/pages/teacherProfile';
import Contact from './components/pages/contact';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [courses, setCourses] = useState([]);
  const [courseErrors, setCourseErrors] = useState('');

  useEffect(() => {
    document.title = "IR Institute"
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/subjects/');
        setCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setCourseErrors(error.message);
      }
    };

    fetchCourses();
  }, []);

  if (courseErrors) {
    return <div>Error: {courseErrors}</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard courses={courses} />} />
        <Route path="/home" element={<Dashboard courses={courses} />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses courses={courses} />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/update" element={<Update />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
