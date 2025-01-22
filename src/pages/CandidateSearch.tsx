import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState(null);
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const randomUsers = await searchGithub();
        if (randomUsers.length > 0) {
          setCurrentCandidate(randomUsers[0]); // Display the first random user
        } else {
          setError('No candidates available to display.');
        }
      } catch (err) {
        setError('Failed to fetch candidates. Please try again later.');
      }
    };
    fetchCandidate();
  }, []);

  const saveCandidate = () => {
    if (currentCandidate) {
      const updatedCandidates = [...savedCandidates, currentCandidate];
      setSavedCandidates(updatedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
      nextCandidate();
    }
  };

  const nextCandidate = async () => {
    try {
      const randomUsers = await searchGithub();
      if (randomUsers.length > 0) {
        setCurrentCandidate(randomUsers[0]);
      } else {
        setError('No more candidates available.');
      }
    } catch (err) {
      setError('Failed to fetch the next candidate. Please try again.');
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : currentCandidate ? (
        <div>
          <img src={currentCandidate.avatar_url} alt={currentCandidate.login} />
          <h2>{currentCandidate.login}</h2>
          <p>Location: {currentCandidate.location}</p>
          <p>Company: {currentCandidate.company}</p>
          <p>Email: {currentCandidate.email}</p>
          <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
          <br />
          <button onClick={saveCandidate}>+</button>
          <button onClick={nextCandidate}>-</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CandidateSearch;
