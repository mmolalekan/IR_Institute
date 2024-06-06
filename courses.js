import NavbarSidebar from '../crumbs/NavbarSidebar'
import Footer from '../crumbs/footer'
import './courses.css';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    { id: 1, subject: 'Mathematics', tutor: 'Tutor 1', tutorImage: "images/pic-1.jpg", topics: 15, imageUrl: "images/thumb-1.png", datePosted: "21-10-2022" },
    { id: 2, subject: 'English', tutor: 'Tutor 2', tutorImage: "images/pic-2.jpg", topics: 25, imageUrl: "images/thumb-2.png", datePosted: "21-10-2022" },
    { id: 3, subject: 'Physics', tutor: 'Tutor 3', tutorImage: "images/pic-3.jpg", topics: 10, imageUrl: "images/thumb-3.png", datePosted: "21-10-2022" },
    { id: 4, subject: 'Computer Science', tutor: 'Tutor 4', tutorImage: "images/pic-4.jpg", topics: 20, imageUrl: "images/thumb-4.png", datePosted: "21-10-2022" },
  ];
  return (
    <>
      <NavbarSidebar />
      <section className="courses">

        <h1 className="heading">our courses</h1>

        <div className="box-container">
          {courses.map((item) => (
            <div className="box" key={item.id}>
              <div className="tutor">
                <img src={item.tutorImage} alt="" />
                <div className="info">
                  <h3>{item.tutor}</h3>
                  <span>{item.datePosted}</span>
                </div>
              </div>
              <div className="thumb">
                <img src={item.imageUrl} alt="" />
                <span>{`${item.topics} topics`}</span>
              </div>
              <h3 className="title">{item.subject}</h3>
              <Link to="/playlist" className="inline-btn">list of topics</Link>
            </div>
          ))}
        </div>

      </section>
      <Footer />
    </>
  );
}

export default Courses;