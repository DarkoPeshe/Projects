import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="card-parent">
        <div className="card-child">
          <div className="card-inner">
            <div className="social-links">
              <h5 className="footer-headline">Social Share</h5>
              <a href="https://facebook.com">
                <i className="fa-brands fa-facebook-f fa-xl"></i>
              </a>
              <a href="https://instagram.com">
                <i className="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a href="https://x.com">
                <i className="fa-brands fa-twitter fa-xl"></i>
              </a>
              <a href="https://linkedin.com">
                <i className="fa-brands fa-linkedin-in fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card-child border-left">
          <div className="card-inner">
            <div className="event-info">
              <h5 className="footer-headline">Event Info</h5>
              {[
                "Enter Now",
                "Event info",
                "Course Maps",
                "Race Pack",
                "Results",
                "FAQs",
                "Am i registered?",
              ].map((text, i) => (
                <div key={i}>
                  <a href="#">
                    <span>{text}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-child border-left">
          <div className="card-inner">
            <div className="registration">
              <h5 className="footer-headline">Registration</h5>
              {[
                "Volunteers",
                "Gallery",
                "Press",
                "Results",
                "Privacy Policy",
                "Service Plus",
                "Contacts",
              ].map((text, i) => (
                <div key={i}>
                  <a href="#">
                    <span>{text}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-child border-left">
          <div className="card-inner">
            <div className="schedule">
              <h5 className="footer-headline">Schedule</h5>
              {[
                "Gallery",
                "About",
                "Videos",
                "Results",
                "FAQs",
                "Results",
                "Volunteers",
              ].map((text, i) => (
                <div key={i}>
                  <a href="#">
                    <span>{text}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
