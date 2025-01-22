import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState(null);
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  // Load saved candidates from localStorage when the component mounts
  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  // Save a candidate
  const saveCandidate = () => {
    if (currentCandidate) {
      const updatedCandidates = [...savedCandidates, currentCandidate];
      setSavedCandidates(updatedCandidates);

      // Save to localStorage
      localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));

      // Load the next candidate
      nextCandidate();
    }
  };

  // Fetch the next candidate
  const nextCandidate = async () => {
    const randomUsers = await searchGithub();
    if (randomUsers.length > 0) {
      setCurrentCandidate(randomUsers[0]);
    } else {
      console.log('No more candidates available');
    }
  };

  // Load the first candidate when the component mounts
  useEffect(() => {
    nextCandidate();
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      {currentCandidate ? (
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
