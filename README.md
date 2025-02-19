# React-project
# React Web Application Assignment

## Overview
This project is a React-based web application developed as part of the upliance.ai Associate Software Developer assignment. It includes a Counter, User Data Form, Rich Text Editor, and Dashboard with data visualization.

## Features
- **Counter Component**: Increment, decrement, and reset functionality with animated background color.
- **User Data Form**: Stores user input with auto-generated user ID and local storage persistence.
- **Rich Text Editor**: Allows text formatting (bold, italic, underline) and user data visualization.
- **Dashboard**: Displays user profile trends using charts.
- **Routing**: Uses React Router for navigation between components.

## Technologies Used
- React with TypeScript
- Material UI / Chakra UI / Next UI (for styling)
- React Spring (for animations)
- React Router (for navigation)
- Draft.js (for Rich Text Editing)
- React Chart.js 2 (for data visualization)

## Installation & Running the Project
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd upliance-assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## Folder Structure
```
/src
  ├── components
  │   ├── Counter.tsx
  │   ├── UserForm.tsx
  │   ├── RichTextEditor.tsx
  │   ├── Dashboard.tsx
  │   ├── Auth.tsx
  ├── styles
  │   ├── Counter.css
  │   ├── UserForm.css
  │   ├── RichTextEditor.css
  │   ├── Dashboard.css
  ├── App.tsx
  ├── index.tsx
```

## Troubleshooting
### Chart.js Issue (`category is not a registered scale`)
Ensure `Chart.js` is correctly registered in `Dashboard.tsx`:
```tsx
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
```

### Rich Text Editor Not Showing
Make sure `draft-js` is installed:
```sh
npm install draft-js
```

## Author
Developed by [Your Name] as part of the upliance.ai Associate Software Developer assignment.

