
const searchGithub = async () => {
  // Simulate an API error
  throw new Error('Simulated API error'); // This will trigger your error handling
};

const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in searchGithubUser:', error.message);
    return {}; // Return empty object to avoid breaking the app
  }
};

export { searchGithub, searchGithubUser };
