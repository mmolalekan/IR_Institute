import './profile.css';
import { Link } from 'react-router-dom';
import NavbarSidebar from '../crumbs/NavbarSidebar'
import Footer from '../crumbs/footer'


const Profile = () => {
  return (
    <>
      <NavbarSidebar />
      <section className="user-profile">
        <h1 className="heading">your profile</h1>
        <div className="info">
          <div className="user">
            <img src="images/mm.png" alt="" />
            <h3>Abdulmuhaymin Olalekan</h3>
            <p>student</p>
            <Link to="/update" className="inline-btn">update profile</Link>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="flex">
                <i className="fas fa-bookmark"></i>
                <div>
                  <span>4</span>
                  <p>saved playlist</p>
                </div>
              </div>
              <Link href="#" className="inline-btn">view playlists</Link>
            </div>
            <div className="box">
              <div className="flex">
                <i className="fas fa-heart"></i>
                <div>
                  <span>33</span>
                  <p>videos liked</p>
                </div>
              </div>
              <Link href="#" className="inline-btn">view liked</Link>
            </div>
            <div className="box">
              <div className="flex">
                <i className="fas fa-comment"></i>
                <div>
                  <span>12</span>
                  <p>videos comments</p>
                </div>
              </div>
              <Link href="#" className="inline-btn">view comments</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
