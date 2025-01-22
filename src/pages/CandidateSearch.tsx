import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState(null);
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  useEffect(() => {
    const fetchCandidate = async () => {
      const randomUsers = await searchGithub();
      if (randomUsers.length > 0) {
        setCurrentCandidate(randomUsers[0]); // Display the first random user
      } else {
        console.log('No candidates found');
      }
    };
    fetchCandidate();
  }, []);

  const saveCandidate = () => {
    if (currentCandidate) {
      setSavedCandidates([...savedCandidates, currentCandidate]); // Save candidate
      nextCandidate(); // Load the next candidate
    }
  };

  const nextCandidate = async () => {
    const randomUsers = await searchGithub();
    if (randomUsers.length > 0) {
      setCurrentCandidate(randomUsers[0]);
    } else {
      console.log('No more candidates available');
    }
  };

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

      <h3>Saved Candidates</h3>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((candidate, index) => (
            <li key={index}>{candidate.login}</li>
          ))}
        </ul>
      ) : (
        <p>No candidates saved yet.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
