import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: '1rem' }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'yellow' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/SavedCandidates" style={{ textDecoration: 'none', color: 'yellow' }}>
            Potential Candidates 
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
