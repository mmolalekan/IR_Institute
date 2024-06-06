import './about.css';
import { Link } from 'react-router-dom';
import NavbarSidebar from '../crumbs/NavbarSidebar'
import Footer from '../crumbs/footer'

const About = () => {
  const data = [
    { id: 1, num: "10", title: "courses", className: "fa-graduation-cap" },
    { id: 2, num: "50", title: "students", className: "fa-user-graduate" },
    { id: 3, num: "10", title: "tutors", className: "fa-chalkboard-user" },
    { id: 4, num: "25", title: "tutor vacancies", className: "fa-chalkboard-user" },
  ];

  const review = [
    { id: 1, name: "Julien Barbier", statement: "Not so good for me", image_url: "images/pic-1.jpg", review: 1 },
    { id: 2, name: "Kimba", statement: "Life changing opportunity", image_url: "images/pic-2.jpg", review: 5 },
    { id: 3, name: "Holberton", statement: "Couldn't have asked for more", image_url: "images/pic-3.jpg", review: 4 },
    { id: 4, name: "Betty", statement: "The lectures are well curated. Nice job with the audio too", image_url: "images/pic-4.jpg", review: 3.5 }
  ];

  return (
    <>
      <NavbarSidebar />
      <section className="about">

        <div className="row">

          <div className="image">
            <img src="images/about-img.svg" alt="" />
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo? Distinctio expedita
              commodi, nemo a quam error repellendus sint, fugiat quis numquam eum eveniet sequi aspernatur quaerat
              tenetur.</p>
            <Link to="/courses" className="inline-btn">Our courses</Link>
          </div>

        </div>

        <div className="box-container">
          {data.map((item) => (
            <div className="box" key={item.id}>
              <i className={`fas ${item.className}`}></i>
              <div>
                <h3>{item.num}</h3>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className="reviews">

        <h1 className="heading">student's reviews</h1>

        <div className="box-container">

          {review.map((item) => (
            <div className="box" key={item.id}>
              <p>{item.statement}</p>
              <div className="student">
                <img src={item.image_url} alt="" />
                <div>
                  <h3>{item.name}</h3>
                  <div className="stars">
                    {Array.from({ length: item.review }, (_, i) => (
                      <i className="fas fa-star" key={i}></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section >

      <Footer />
    </>
  );
}

export default About;