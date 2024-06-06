import './teachers.css';
import NavbarSidebar from '../crumbs/NavbarSidebar'
import Footer from '../crumbs/footer'
import TeacherProfile from './teacherProfile';
import { Link } from 'react-router-dom';

const Teachers = () => {
  const teachers = [
    { id: 1, subject: 'Mathematics', tutor: 'Tutor 1', tutorImage: "images/pic-1.jpg", role: "Mathematician", rating: 5.6 },
    { id: 2, subject: 'English', tutor: 'Tutor 2', tutorImage: "images/pic-2.jpg", role: "Linguist", rating: 6.5 },
    { id: 3, subject: 'Physics', tutor: 'Tutor 3', tutorImage: "images/pic-3.jpg", role: "Physicist", rating: 7.8 },
    { id: 4, subject: 'Computer Science', tutor: 'Tutor 4', tutorImage: "images/pic-4.jpg", role: "Software Engineer", rating: 5.4 },
  ];
  return (
    <>
      <NavbarSidebar />
      <section class="teachers">

        <h1 class="heading">Tutor</h1>

        <form action="" method="post" class="search-tutor">
          <input type="text" name="search_box" placeholder="search tutors..." required maxlength="100" />
          <button type="submit" class="fas fa-search" name="search_tutor"></button>
        </form>

        <div class="box-container">
          {teachers.map((item) => (
            <div className="box" key={item.id}>
              <div class="tutor">
                <img src={item.tutorImage} alt="" />
                <div>
                  <h3>{item.tutor}</h3>
                  <span>{item.role}</span>
                </div>
              </div>
              <p>Reviews: <span>{`${item.rating}/10`}</span></p>
              <Link to="/course" class="inline-btn">view Course</Link>
              <Link to="/TeacherProfile" class="inline-btn">view profile</Link>
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </>
  )
}

export default Teachers;