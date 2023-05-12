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
        <li className="links"><a href="/">rockets</a></li>
        <li className="links">
          {' '}
          <a href="/missions">missions</a>
        </li>
        <hr className="nav-hr" />
        <li className="links"><a href="/profile">my profile</a></li>
      </ul>
    </nav>
  </>
);

export default Navigation;
