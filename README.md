# Registration Form

A dynamic User Registration Form built with React, utilizing async/await and promises for seamless data handling. Users can register with their name and email, and view a real-time list of registered users, showcasing modern front-end development practices.

# Overview Of What I Built

The User Registration Form is a React application designed to allow users to register by entering their name and email. The application captures user data asynchronously, leveraging promises and async/await for a smooth user experience. It provides immediate feedback on registration success and displays a list of registered users.

# App Features

- _User Registration_: Users can enter their name and email to register.
- _Asynchronous Submission_: The registration process simulates a delay, ensuring that users can see a loading indicator while their data is processed.
- _Success Message_: Upon successful registration, a confirmation message is displayed.
- _User List_: Registered users can be viewed dynamically without page reloads.
- _Responsive Design_: The application is designed to work seamlessly across various devices.

# Implementations

# _Asynchronous Data Handling_

The app uses asynchronous JavaScript to handle form submissions effectively. The main components that enable this functionality are:

1. _Promises_: The handleSubmit function uses a promise to simulate a network request when submitting user data. This mimics real-world scenarios where data is often sent to a server and awaits a response.
2. _Async/Await_: The async keyword is used in the handleSubmit function, allowing the code to pause execution until the promise resolves. This creates a more readable and manageable way to handle asynchronous operations compared to traditional callback methods.

# _User Form Component_

The UserForm component handles user input and form submission. It manages the form state (name and email) using React's useState hook.

- _Input Handling_: The component captures user input in real-time and updates the state accordingly.
- _Form Submission_: On submission, the user data is processed, and a success message is displayed if registration is successful.

# _User List Component_

The UserList component displays a list of registered users. It receives the users' data as props and dynamically renders them based on the state in the parent App component.

# _Main Application Logic_

The App component is the central hub of the application. It maintains the state of registered users and controls the visibility of the user list.

- _State Management_: The app uses useState to manage user data and the visibility of the user list.
- _Add User Functionality_: When a new user is added, the app updates the state and toggles the visibility of the user list.

# How the App Works

1. _User Input_: The user fills out the registration form with their name and email.
2. _Form Submission_: Upon clicking the submit button, the handleSubmit function is invoked.
   - The function prevents the default form submission behavior and sets a loading state.
   - A promise simulates the processing of user data, mimicking a network request.
   - Once the promise resolves successfully, the user data is captured and added to the user list.
   - A success message is displayed, and the input fields are cleared for new entries.
3. _View Registered Users_: The user can click the "View Registered Users" button to toggle the visibility of the registered users list.

# Thank You

Thank you for exploring my User Registration Form app! I hope this documentation provides a clear understanding of its features and the underlying technologies used to build it. If you have any questions or feedback, feel free to reach out!
