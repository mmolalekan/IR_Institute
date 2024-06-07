import './contact.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import NavbarSidebar from '../crumbs/NavbarSidebar'
import Footer from '../crumbs/footer'

const Contact = () => {
  return (
    <>
      <NavbarSidebar />

      <section className="contact">

        <div className="row">

          <div className="image">
            <img src="images/gif.gif" alt="" />
          </div>

          <form action="" method="post">
            <h3>Contact us</h3>
            <input type="text" placeholder="enter your name" name="name" required maxLength="50" className="box" />
            <input type="email" placeholder="enter your email" name="email" required maxLength="50" className="box" />
            <input type="number" placeholder="enter your number" name="number" required maxLength="50" className="box" />
            <textarea name="msg" className="box" placeholder="enter your message" required maxLength="1000" cols="30"
              rows="10"></textarea>
            <input type="submit" value="send message" className="inline-btn" name="submit" />
          </form>

        </div>

        <div className="box-container">

          <div className="box">
            <i className="fas fa-phone"></i>
            <h3>phone number</h3>
            <a href="tel:+2348174448996">+234 817 444 8996</a>
          </div>

          <div className="box">
            <i className="fas fa-envelope"></i>
            <h3>email address</h3>
            <a href="mailto:irinstitute.ng@gmail.com">irinstitute.ng@gmail.com</a>
          </div>

          <div className="box">
            <i class="fas fa-whatsapp" aria-hidden="true"></i>
            <h3>WhatsApp</h3>
            <a href="https://wa.me/+2348174448996" target='_blank'>+234 817 444 8996</a>
          </div>

          <div className="box">
            <i className="fas fa-globe"></i>
            <h3>Website</h3>
            <a href="https://www.irinstitute.com" target='_blank'>www.irinstitute.com</a>
          </div>

        </div>

      </section>
      <Footer />
    </>
  );
}

export default Contact;