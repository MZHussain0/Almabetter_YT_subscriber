# Project Title

### Almabetter-yt-subscribers-API

## Demo Link

Access the live demo at https://almabetter-yt-subscribers.netlify.app

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [Approach](#approach)

## About The App

Almabetter-yt-subscribers-API is an backend application that uses MongoDb and displays the data of the subscribers.
## Screenshots

<img src="https://user-images.githubusercontent.com/37292226/221525682-6815d919-704b-4b53-b423-83448ee022d2.png" alt="home" width="250" >
  <img src="https://user-images.githubusercontent.com/37292226/221525927-71d3c37c-1607-4ce5-958d-c227495300fd.png" alt="/subscribers" width="250" >
 <img src="https://user-images.githubusercontent.com/37292226/221526088-ee423dc1-b7a1-4972-81f4-2052e2ec8768.png" alt="/subscribers/names" width="250">
 <img src="https://user-images.githubusercontent.com/37292226/221526216-0aa4758c-ca95-4e0a-b92a-268f174c43c7.png" alt="/subscribers/:id" width="250">
 
## Technologies

I used `React`, `Node`, `MongoDb`, `Express`, `Axios`.

## Installation and Setup

Clone down this repository. You will need `node` and `npm` installed globally on your machine. Go to both the base directories and the following commands.

Installation:

`npm install`

To Start Server:

`npm run dev`

To Visit App:

`localhost:5173/`

## Approach

This was a capstone project built during AlmaBetter training. Project goals included using backend technologies learned up until this point and familiarizing myself with documentation for new features.

I was supposed to build an API which return the proper data from the mongodb database. I started this process by using the `express` framework then adding `mongoose` for communicating with the database.

One of the main challenges i ran into was setting up the routes properly.

## HTTP request methods used in the project
1. GET https://almabetter-yt-subscribers.netlify.app/ → The client will see the “Home Page with all the endpoints” message which is used to verify that application is working properly.

2. GET https://almabetter-yt-subscribers.netlify.app/subscribers → When the user hit this, **endpoint /subscribers**, the client will **get an array of all subscribers in JSON format** from the database where the data is stored in MongoDB database.

3. GET https://almabetter-yt-subscribers.netlify.app/subscribers/names →When the user hit this, endpoint **/subscribers/names** the client will to get an array of all subscribers in JSON format with **only name and subscribed Channel fields** from the database.

4. GET https://almabetter-yt-subscribers.netlify.app/subscribers/:id → When the user hit this, endpoint **/subscribers/:id** in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular **user’s details like name, subscribed Channel and subscribed Date** from the database.

5. GET https://almabetter-yt-subscribers.netlify.app/subscribers/:id → When the client gives **incorrect USER’S ID instead of correct USER’S ID** (where the ID does not match) which is stored in database, the **Client will get an Error message like“ Subscriber doesn't exist with the given _id: sdijvrbv” in JSON format with 400 error status code.**

6. GET https://almabetter-yt-subscribers.netlify.app/something → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.
