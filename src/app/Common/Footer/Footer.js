import Link from "next/link";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={`${style.footer} footer`}>
        <div className="container">
          <div className="top-inline-list py-5">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-0">
                <Link href="#" className={style.linkstyle}>
                  About Us
                </Link>
              </li>
              <span className="mx-1">|</span>
              <li className="list-inline-item me-0">
                <Link href="#" className={style.linkstyle}>
                  Careers
                </Link>
              </li>
              <span className="mx-1">|</span>
              <li className="list-inline-item me-0">
                <Link href="#" className={style.linkstyle}>
                  Terms & Conditions
                </Link>
              </li>
              <span className="mx-1">|</span>
              <li className="list-inline-item me-0">
                <Link href="#" className={style.linkstyle}>
                  Privacy Policy
                </Link>
              </li>
              <span className="mx-1">|</span>
              <li className="list-inline-item me-0">
                <Link href="#" className={style.linkstyle}>
                  Sitemap
                </Link>
              </li>
              <span className="mx-1">|</span>
              <li className="list-inline-item me-0">
                <Link href="#" className={style.linkstyle}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-5 mb-3">
              <h5>About Us</h5>
              <p>
                We are committed to providing the best hospitality experience.
                Contact us for more information.
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Rooms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>Email: info@example.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Main St, City</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-3">
           Copyright &copy; {new Date().getFullYear()}, Amritara Hotels and Resorts. All rights reserved. Powered by 
            <Link href="https://www.cinuniverse.com/" target="_blank">
              CIN Universe
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
