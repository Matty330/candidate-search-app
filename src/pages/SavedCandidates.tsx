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
    <div className="saved-candidates">
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <ul>
          {savedCandidates.map((candidate, index) => (
            <li key={index} className="candidate-item">
              <img
                src={candidate.avatar_url}
                alt={candidate.login}
                className="candidate-avatar"
              />
              <h2 className="candidate-name">{candidate.login}</h2>
              <p className="candidate-location">Location: {candidate.location}</p>
              <p className="candidate-company">Company: {candidate.company}</p>
              <p className="candidate-email">Email: {candidate.email}</p>
              <a
                href={candidate.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="candidate-profile-link"
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-candidates">No saved candidates yet.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
