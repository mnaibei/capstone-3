import logo from '../images/planet.png';
import '../styles/navigationstyle.css';

const Navigation = () => (
  <>
    <nav className="navigation-container">
      <div className="logo-header">
        <img src={logo} alt="logo" className="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-links">
        <li className="links">rockets</li>
        <li className="links">missions</li>
        <hr className="nav-hr" />
        <li className="links">my profile</li>
      </ul>
    </nav>
  </>
);

export default Navigation;
