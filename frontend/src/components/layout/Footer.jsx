import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="mt-auto py-4 bg-dark text-white">
      <div className="container">
        <div className="row">
          {/* Brand + Description */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Smart LMS</h5>
            <p className="small">
              Your modern Learning Management System.  
              Learn anytime, anywhere with ease 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              {[
                { name: "Home", path: "/" },
                { name: "Courses", path: "/courses" },
                { name: "Dashboard", path: "/dashboard" },
                { name: "About", path: "/about" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white text-decoration-none"
                    style={{ transition: "color 0.3s" }}
                    onMouseOver={(e) => (e.target.style.color = "#0d6efd")}
                    onMouseOut={(e) => (e.target.style.color = "#fff")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="mb-1">
              <i className="bi bi-envelope me-2"></i> support@smartlms.com
            </p>
            <p className="mb-0">
              <i className="bi bi-telephone me-2"></i> +91 98765 43210
            </p>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Follow Us</h6>
            <div className="d-flex gap-3">
              {[
                { icon: "facebook", link: "#" },
                { icon: "twitter", link: "#" },
                { icon: "linkedin", link: "#" },
                { icon: "github", link: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-white"
                  style={{ fontSize: "1.2rem", transition: "all 0.3s" }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#0d6efd";
                    e.target.style.transform = "scale(1.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#fff";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <i className={`bi bi-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary" />

        {/* Bottom line */}
        <div className="text-center small">
          © {new Date().getFullYear()} Smart LMS. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
