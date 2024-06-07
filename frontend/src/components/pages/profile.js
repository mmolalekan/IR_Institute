import './profile.css';
import { Link } from 'react-router-dom';
import NavbarSidebar from '../crumbs/NavbarSidebar';
import Footer from '../crumbs/footer';

const Profile = () => {
  return (
    <>
      <NavbarSidebar />
      <section className="user-profile">
        <h1 className="heading">Your Profile</h1>
        <div className="info">
          <div className="user">
            <img src="images/mm.png" alt="Profile" />
            <h3>Abdulmuhaymin Olalekan</h3>
            <p>Student</p>
            <Link to="/update" className="inline-btn">Update Profile</Link>
          </div>
          <div className="details">
            <h2>Student Details</h2>
            <p><strong>Email:</strong> student@example.com</p>
            <p><strong>Phone:</strong> +1234567890</p>
            <p><strong>Enrolled Since:</strong> January 2024</p>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="flex">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <span>5</span>
                  <p>Enrolled Courses</p>
                </div>
              </div>
              <Link to="#" className="inline-btn">View Courses</Link>
            </div>
            <div className="box">
              <div className="flex">
                <i className="fas fa-bookmark"></i>
                <div>
                  <span>4</span>
                  <p>Saved Playlists</p>
                </div>
              </div>
              <Link to="#" className="inline-btn">View Playlists</Link>
            </div>
            <div className="box">
              <div className="flex">
                <i className="fas fa-heart"></i>
                <div>
                  <span>33</span>
                  <p>Videos Liked</p>
                </div>
              </div>
              <Link to="#" className="inline-btn">View Liked</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
