Candidate Search Application

A React + TypeScript application built with Vite that allows users to search for GitHub candidates, save potential candidates, and view saved profiles. This project includes robust error handling, clean styling, and responsive design.

Table of Contents

1. Description
2. Features
3. Technologies Used
4. Setup and Installation
5. Usage
6. Screenshots
7. Future Enhancements
8. Contributing
9. License

Description

The Candidate Search Application allows users to search for GitHub profiles using the GitHub API. Users can:

View random GitHub profiles.
Save potential candidates for future reference.
View a list of saved candidates with their details.
The app handles edge cases, such as empty candidate lists or API errors, and ensures a seamless user experience with clean styling and responsive design.

Features

Candidate Search Page:
Displays random GitHub profiles fetched via the GitHub API.
Users can save or skip candidates.
Handles errors gracefully (e.g., API failures).
Saved Candidates Page:
Displays a list of saved GitHub profiles.
Profiles include name, avatar, location, company, and more.
Persistent storage using localStorage.
Responsive Design:
Works seamlessly across devices with a mobile-first approach.
Robust Error Handling:
Provides meaningful error messages for common issues, such as empty data or API failures.

Technologies Used

Frontend:
React with TypeScript
Vite for fast builds and hot module replacement
Styling:
CSS3 with custom styles
Google Fonts (Inter Tight)
Data Fetching:
GitHub REST API

Setup and Installation

Follow these steps to run the project locally:

Clone the Repository:
git clone https://github.com/Matty330/candidate-search-app.git
cd candidate-search-app
Install Dependencies:
npm install
Set Up the Environment File:
Create a .env file in the environment directory:
touch environment/.env
Add your GitHub personal access token:
VITE_GITHUB_TOKEN=your_personal_access_token
Run the Application:
npm run dev
Open in Browser:
Navigate to http://localhost:5173 in your browser.

Usage

Candidate Search Page
View random GitHub profiles.
Click the + button to save a candidate.
Click the - button to skip to the next candidate.
Saved Candidates Page
View a list of saved profiles.
Review candidate details, including:
Name
Avatar
Location
Company
GitHub profile link

Screenshots

Candidate Search Page
![Candidate Search Screenshot](path/to/screenshot1.png)
Saved Candidates Page
![Saved Candidates Screenshot](path/to/screenshot2.png)

Future Enhancements

Sorting and Filtering:
Add the ability to filter saved candidates by location, company, or username.
Implement sorting options (e.g., alphabetical order).
Improved Styling:
Add themes (light and dark mode).
Advanced Error Handling:
Handle API rate-limiting and provide user feedback.
Deployment:
Deploy to Render or another hosting platform.

Contributing

We welcome contributions! To contribute:
Fork the repository.
Create a new branch:
git checkout -b feature-name
Commit your changes:
git commit -m "Add new feature"
Push to your branch:
git push origin feature-name
Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
