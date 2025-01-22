import { useEffect, useState } from 'react';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve saved candidates from localStorage
    const saved = localStorage.getItem('savedCandidates');
    console.log('Saved candidates in localStorage:', saved); // Debug log
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((candidate, index) => (
            <li key={index}>
              <img
                src={candidate.avatar_url}
                alt={candidate.login}
                style={{ width: '50px', borderRadius: '50%' }}
              />
              <h2>{candidate.login}</h2>
              <p>Location: {candidate.location}</p>
              <p>Company: {candidate.company}</p>
              <p>Email: {candidate.email}</p>
              <a
                href={candidate.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No saved candidates yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
