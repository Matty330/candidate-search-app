import { useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  useEffect(() => {
    const testApi = async () => {
      // Fetch random users
      const randomUsers = await searchGithub();
      console.log('Random Users:', randomUsers);

      // Fetch specific user details
      const specificUser = await searchGithubUser('octocat');
      console.log('Specific User:', specificUser);
    };
    testApi();
  }, []);

  return <h1>Candidate Search</h1>;
};

export default CandidateSearch;
