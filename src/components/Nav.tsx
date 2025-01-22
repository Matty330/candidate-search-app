import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SavedCandidates" className="nav-link">
            Potential Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
