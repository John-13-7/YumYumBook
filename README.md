# Running the Project
npm install node express shortid react enzyme
npm i react-lazy-load
npm i framer-motion --legacy-peer-dep
npm install
npm i react-icons
npm install --save-dev  jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer jest-environment-jsdom

# Frontend
Website based interface built using Javascript. Frameworks used was ReactJs

### Landing Page
Simple introduction

### FAQ Page
Frequently asked questions. 

### Lookup Page
Recipe lookup page. Can search cuisines by calories, ethnicities, or food titles

Try the following inputs: "Mexican", "American", "Chinese", "1000", "300", or "700"

### Database Simulation Page
Only renders when the admin is logged in. 
User: admin
Password: admin

Simulates the commands of what a database does using a list of created recipes. Like CREATE, READ, UPDATE, SELECT, and DELETE. 

# Backend 
Everything is written to json files. All headers are kept in one file. Three json files are used to keep collections of: users, recipes, and the currently logged in user
