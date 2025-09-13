<!-- # NetflicAI Project

![React](https://img.shields.io/badge/React-17.0.2-blue)
![Firebase](https://img.shields.io/badge/Firebase-Auth-yellow)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-green)

## Table of Contents
1. [Project Setup](#1-project-setup)
2. [Install Tailwind CSS](#2-install-tailwind-css)
3. [Create Pages](#3-create-pages)
4. [Routing Setup](#4-routing-setup)
5. [Login Page](#5-login-page)
6. [Sign Up Page & Form Validation](#6-sign-up-page--form-validation)
7. [Authentication with Firebase](#7-authentication-with-firebase)
8. [Firebase Hosting](#8-firebase-hosting-optional)
9. [Sign Up User](#9-sign-up-user-firebase)
10. [Sign In User](#10-sign-in-user-firebase)
11. [Features](#features)

---

## 1. Project Setup
Created the project using Create React App:

```bash
npx create-react-app netflicai
```
2. Installed Tailwind CSS with Create React App link:https://v3.tailwindcss.com/docs/guides/create-react-app

3. Create Pages like Login.js, Browse.js,.....

4. Install react router dom using npm i -D react-router-dom to setUp Routing in Body.js 

5. Created Login page as in netflix https://www.netflix.com/in/login

6. Created SignUp page in login page itself by toggling isNewUser State Variable.
if yes Sign Up elements are loaded,
else Sign In elements are loaded.

Validating Form Field values

7. created a utils folder with validate.js file inside src folder, this file checks if fields are valid one or not.

    -  I used Email regex with test() to check whether email Id is valid one or not. [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/.test(email);]

    - I used Password regex with test() to check whether password is valid one or not - [/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(password);]

    -  To pass email and password to isDataValidate(), first we need have access to email and password.
    
    -  There are 2 ways,

        - Either using State Variables for email and password.
        -  or using useRef() hook (I used it)

Authentication 

8. For authentication i used firebase [https://firebase.google.com/]
    - Goto [https://console.firebase.google.com/u/0/]
    - Create New Project
    - After Completion, Add an app to get started (ios, Andriod, web).
    - choose web, and proceed with following steps,
        - Step1: Register App - Give name for App
        - Step2: Add Firebase SDK to project 
            - Run npm install firebase
            - Added SDK in firebase.js of utils folder.
        - Step3: Install Firebase CLI 
            - Run npm install -g firebase-tools
            - To host your site with Firebase Hosting, we need the Firebase CLI (a command line tool)

 9. after completing,
    - Click on Build Dropdown in the left sidebar.
    - then click Authentication
    - you will see lot of sign-in methods
    - choose what do you want, i selected Email/Password
    - after that go to users,  you will see nothing for now.

10. try firebase hosting if want
    - Step1: Already Done (npm install -g firebase-tools)
    - Step2: firebase login
    - Step3: firebase init hosting, it've some questions
    - Step4: npm run build then firebase deploy
    - Deploy complete!, we will get Hosting URL


11. Lets Sign Up User using firebase
    - Create a password-based account - [https://firebase.google.com/docs/auth/web/password-auth?hl=en#create_a_password-based_account]

12. Lets Sign In User using firebase 
    - Sign in a user with an email address and password - [https://firebase.google.com/docs/auth/web/password-auth?hl=en#sign_in_a_user_with_an_email_address_and_password]


13. We got the user, so add that user to store.
    - npm i -D @reduxjs/toolkit 
    - npm i react-redux
    - create appstore folder inside utils and add store and slices here
    - provide store to App.js using Provider

14. Add user to store at the time of signIn/signUp.
15. Add Logout to the header in the Browse Page.
16. Lets Logout using Firebase 
    - scroll down for SignOut - [https://firebase.google.com/docs/auth/web/password-auth#next_steps]

17. also update display name from "" to name that we enter during signUp.
18. for that update user profile by adding display name during signUp using updateProfile() api given by firebase.
19. also add to store.  -->