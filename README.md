# Would You Rather

A web app built with React and Redux that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Users are able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

# App Functionality

There is simple login box that appears at the root of the application that lets the user select a name from the list of existing users. Information about the logged in user appears on the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in.

Once the user logs in, can toggle between his/her answered and unanswered polls on the home page, which is located at the root. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The unanswered questions are shown by default, and the name of the logged in user is visible on the page.

When a poll is clicked on the home page, the following is shown: 1. Text “Would You Rather” 2.Avatar of the user who posted the polling question; 3.Two options.
For answered polls, each of the two options contains the following: 1. Text of the option 2. number of people who voted for that option 3. Percentage of people who voted for that option. 4. The option selected by the logged-in user is marked.

The form for posting new polling questions are available at the /add route. The application has a leaderboard that’s available at the /leaderboard route.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

# Resources

- Redux Middleware - https://redux.js.org/advanced/middleware
- Asynchronicity in Redux - https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
- Presentational and Container Components - https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
- Redux FAQ: Organizing State - https://redux.js.org/faq/organizing-state
- How to choose between Redux's store and React's state? - https://github.com/reduxjs/redux/issues/1287
- The Perils of Using a Common Redux Anti-Pattern - https://itnext.io/the-perils-of-using-a-common-redux-anti-pattern-344d778e59da
