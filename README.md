## WeCare - Hospital Management System

WeCare is a Hospital Management System built with **React.js** for the frontend and **Laravel** for the backend APIs.
There are three different kinds of users with different privileges.

- **Doctors** -- Doctors can see patients' health records and a list of apointments that they have with patients includng the ward number.
- **Nurses** -- Nurses can take health records of patients.
- **Front-Desk Staff** -- They have two roles:
  1. To register new patients
  2. To schedule appointments between doctors and patients.

There exists a general patient module available to all users on the platform.

### Technologies

- React
- [Material UI](https://mui.com/)
- Context API for Application-wide State Management,
- PHP/Laravel

The frontend is hosted on Netlify and the backend on Heroku PaaS.

### Project Setup

- clone the project using `git clone git@github.com:PraiseDelia/WeCare.git`
- Install project dependencies by running `npm install or yarn install` on your terminal depending on the package manager of your choice.
- Start the development server using `npm start or yarn start`.
- Run `npm run build or yarn build` to generate a dist folder.
- Run `npm run test or yarn test` to run test files.
