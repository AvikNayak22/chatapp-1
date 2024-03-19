# chatapp-1
This is a simple chat application built with React and Appwrite, allowing users to communicate in real-time.

# Features
- __User Authentication:__ Users can register, log in, and log out securely.
- __Real-time Messaging:__ Chat with other users in real-time.
- __Responsive Design:__ The application is designed to work seamlessly on various screen sizes.
- __Secure Communication:__ All communications are encrypted to ensure security and privacy.
# Technologies Used
- __React:__ A JavaScript library for building user interfaces.
- __Appwrite:__ A secure backend as a service platform providing various services like user authentication and database management.
- __React Router:__ For handling client-side routing within the application.
# Setup Instructions
1. Clone the repository:
   ```
    git clone https://github.com/your-username/chatapp-1.git
   ```
2. Install dependencies:
   ```
   cd chatapp-1
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file at the root of the project.
   - Define the following environment variables:
     ```
     VITE_API_ENDPOINT=YOUR_APPWRITE_API_ENDPOINT
     VITE_PROJECT_ID=YOUR_APPWRITE_PROJECT_ID
     VITE_DATABASE_ID=YOUR_APPWRITE_DATABASE_ID
     VITE_COLLECTION_ID_MESSAGES=YOUR_APPWRITE_COLLECTION_ID_MESSAGES
     ```
4. Start the development server:
   ```
   npm run dev
   ```
