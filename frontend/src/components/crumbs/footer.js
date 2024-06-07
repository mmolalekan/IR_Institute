import './footer.css';

const Footer = () => {
   const currentYear = new Date().getFullYear();
   return (
      <footer className="footer">
         &copy; {currentYear} <span>IR Institute</span> | All rights reserved!
      </footer>
   );
}

export default Footer;