# README

This is a simple boilerplate project to allow you to use react-rails' `<%= react_component 'ComponentName' %>` mounter, but still have webpack control your javascript bundling. This removes react and other libraries from the main scope and allows you to import what you need when you need it. 

#Usage
    1. Clone the project
    2. npm install from root of project
    3. rails s 
    4. visit localhost:3000

    All components should go into the components folder within app/assets/javascript/components
    Be sure to also list add your component to the object literal in components.js after creating and exporting it.


#Rails version : 5.0.1
#Database: Postgres
#React Version: 15.4.1

