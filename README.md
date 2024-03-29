<img src="https://github.com/gpfurlaneto/buzzvel-holidays-app/blob/main/public/logo-light.svg">

**Frontend - APP**



This is Buzzvel - Holidays: is a user-friendly interface to perform create and to manage operations on holiday plans. This is the frontend project built using [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[Here you can see a video with a short explanation about how to run the application.](https://www.loom.com/share/db88db208d954fb6832d96be5ebae514?sid=81bbe36b-d64d-400a-85e1-ee7880c4e1d5)

## Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [Tests](#tests)
- [TODO](#todo)

## Requirements
Buzzvel - Holidays is built in two repositories, api (backend) and app (frontend). So in order to make the app to work, we must first of all to run the backend app, which can be found [here](https://github.com/gpfurlaneto/buzzvel-holidays-app/).

Here are all the projeject dependencies:
    
- [Backend API](https://github.com/gpfurlaneto/buzzvel-holidays-api)
- [NodeJs](https://nodejs.org)
- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)


## Setup

1 - Setup the api (backend) following the instructions [here](https://github.com/gpfurlaneto/buzzvel-holidays-app/), and then come back to the step 2 of this setup.

2 - Install the libraries dependencies with the command:
```npm install```

3 - Copy `enc.example` file with the name `.env`, this files has the base url for the api.

4 - Run the command `npm run dev` and then open the app in the url: [http://localhost:3000](http://localhost:3000)


## Tests
- `npm run test`


## TODO
- To finish, create tests for ConfirmationDialog. Due to the time required for researching how to test components of Headless UI, it hasn't been implemented yet.
- To fix tests for HomePage (pages/index.tsx): The PDF library doesn't seem to work well in the test environment. The test is functioning properly, although it throws an error due to a dependency that is not present during the tests.
- To deploy the application, both back end and front end;
- To setup prettier/eslint;
- To setup git actions to ensure the code quality, validating the code and running tests.
