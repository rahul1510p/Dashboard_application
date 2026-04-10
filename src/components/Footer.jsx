import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid">

        <div>
          <h4>COMPANY</h4>
          <p>About</p>
          <p>Premium</p>
          <p>Blog</p>
          <p>Referral Program</p>
        </div>

        <div>
          <h4>HELP AND SUPPORT</h4>
          <p>Contact Us</p>
          <p>Knowledge Center</p>
          <p>Premium Support</p>
        </div>

        <div>
          <h4>LEARNING</h4>
          <p>Learn Hub</p>
          <p>Tutorials</p>
          <p>Communities</p>
        </div>

        <div>
          <h4>RESOURCES</h4>
          <p>Tools</p>
          <p>Illustrations</p>
          <p>Stock Photos</p>
        </div>

        <div>
          <h4>LEGAL</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>EULA</p>
        </div>

      </div>

      <div className="footer-bottom">
        <h3>Go Business</h3>
        <p>© 2024 Go Business, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}