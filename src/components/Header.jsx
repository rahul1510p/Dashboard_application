import "./Header.css";
import { FaSearch, FaBell } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header">

      {/* 🔹 ROW 1 */}
      <div className="topRow">
        <div className="logo">Go Business</div>

        <ul className="nav">
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <button className="tryBtn">Try for free</button>
      </div>

      {/* 🔹 ROW 2 */}
      <div className="bottomRow">

        <h2 className="title">Referral Dashboard</h2>

        <div className="rightSection">

          <div className="searchBox">
            <FaSearch />
            <input placeholder="Search here..." />
          </div>

          <button className="searchBtn">Search</button>

          <div className="bellBox">
            <FaBell />
          </div>

          <div className="user">
            <img src="https://i.pravatar.cc/40" alt="" />
            <div>
              <p>Name</p>
              <span>Admin</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}