# Custom Form Builder with MERN Stack

## Project Description

This project involves creating a custom form builder using the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS for styling. The goal is to build a user-friendly form editor that enables form creation, editing, and storage in a MongoDB database. Additionally, the project should feature a form preview and filling functionality, with user responses securely saved in the backend.

## Inspiration and UI Design

To create our custom form builder, we can draw inspiration from platforms like BoloForms for the approval form builder. However, it's crucial that we develop our own unique UI design rather than directly copying any existing interfaces. Consider looking at form builders such as Typeform and Paperform for design inspiration. No need to replicate the exact feature set of BoloForms; we should focus on the core requirements.

## Key Features

1. **Image Support for Questions:**

   - Our form builder should allow users to enrich their questions by adding images. These images can provide visual context and clarity to the questions.

2. **Header Image:**

   - We'll include an option for users to set a header image at the top of the form. This header image can serve as a banner or identifier for the form.

3. **Unique Question Types:**
   - In this project, we'll implement three unique question types inspired by Auto Proctor (Categorize, Cloze, Comprehension). However, we'll put our own innovative twist on these question types to make them stand out.

## Task Deliverables

1. **Custom Form Editor UI:**

   - Create an intuitive and user-friendly interface for form creation and editing.
   - Ensure that users can easily add images to questions and set a header image.
   - Implement a flexible form editor capable of handling our unique question types (Categorize, Cloze, Comprehension).

2. **Database Integration:**

   - Develop the backend functionality to save forms, questions, and images into a MongoDB database.
   - Define and implement MongoDB schemas that will help structure our data efficiently.

3. **Form Preview and Fill:**
   - Allow users to preview their created forms, including the header image and questions with images.
   - Implement a form-filling feature that allows users to provide responses to the forms.
   - Make sure that user responses are securely stored in the MongoDB backend.

## Project Structure

### Frontend (React)

- The `client` directory contains the frontend components of our application.
- In this section, we'll create components for the form editor, form preview, and form-filling features.
- Styling will be done using Tailwind CSS to ensure a clean and modern user interface.

### Backend (Node.js and Express)

- The `server` directory is home to the backend of our application, built with Node.js and Express.js.
- We will set up routes and controllers to handle CRUD operations for forms, questions, and images.
- Proper MongoDB schemas will be defined to ensure a well-structured database.

### Database (MongoDB)

- MongoDB will serve as our database for storing form data, questions, images, and user responses.
- We will create collections for forms, questions, images, and responses while establishing the necessary relationships between them.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-url.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project-directory
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Configure the database connection in the server's `.env` file.

5. Run the development server for both the frontend and backend:

   ```bash
   cd client
   npm start
   cd ../server
   npm start
   ```

6. Access the application in your web browser at `http://localhost:3000`.

By following these steps, you should be able to create a custom form builder with a unique design, support for various question types, and the ability to save data in a MongoDB database using the MERN stack.

## Personal analysis for this project

### **Frontend**

1. **Create a new form**
   - Form title
   - Form description
   - Form header image
   - Form field
     - label
     - name
     -
