const testToken = async () => {
    try {
      const response = await fetch('https://api.github.com/users/octocat', {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('GitHub API Response:', data);
    } catch (error) {
      console.error('Error testing token:', error);
    }
  };
  
  testToken();
  