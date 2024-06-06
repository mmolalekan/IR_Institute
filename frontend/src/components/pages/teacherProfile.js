import './teacherProfile.css';
import { Link } from 'react-router-dom';
import NavbarSidebar from '../crumbs/NavbarSidebar'
import Footer from '../crumbs/footer'

const TeacherProfile = () => {
  const teacher = { name: "Abdulmuhaymin Olalekan", subject: "Computer Science", role: "Software Engineer", duration: 5, rating: "8", availability: 3 }
  return (
    <>
      <NavbarSidebar />

      <section className="teacher-profile">

        <h1 className="heading">profile: {teacher.name}</h1>

        <div className="details">
          <div className="tutor">
            <img src="images/pic-2.jpg" alt="" />
            <h3>{teacher.name}</h3>
            <span>{teacher.role}</span>
          </div>
          <div className="flex">
            <p>Specialization: <span>{teacher.subject}</span></p>
            <p>in service: <span>{teacher.duration} years</span></p>
            <p>Available slots: <span>{teacher.availability} / 5</span></p>
            <p>Rating: <span>{teacher.rating} / 10</span></p>
            <p>Contact:
              <span>
                <a href="https://wa.me/+2348065075359" target="_blank" rel="noopener noreferrer"> WhatsApp</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
              </span>
            </p>

          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default TeacherProfile;