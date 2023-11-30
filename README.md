# Project Title

### Almabetter-yt-subscribers-API

## Demo Link

Access the live demo at https://yt-subscriber-almabetter-frontend.vercel.app

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [Approach](#approach)

## About The App

Almabetter-yt-subscribers-API is a backend application that uses MongoDB. It stores and fetches data of the subscribers on demand.
## Screenshots

![Screenshot 2023-11-30 211829](https://github.com/AntonioErdeljac/twitter-clone/assets/37292226/480d84d8-e035-43a5-bf56-1a99cf6cf43a)
![Screenshot 2023-11-30 211858](https://github.com/AntonioErdeljac/twitter-clone/assets/37292226/875d9942-86b8-44e2-9be0-29dc66dc66ad)
![Screenshot 2023-11-30 211918](https://github.com/AntonioErdeljac/twitter-clone/assets/37292226/757f192f-4cb5-408e-9a59-113cdda322c3)
![Screenshot 2023-11-30 211940](https://github.com/AntonioErdeljac/twitter-clone/assets/37292226/5cbc3173-e651-49bd-b52f-2692a345f9a1)
![Screenshot 2023-11-30 212014](https://github.com/AntonioErdeljac/twitter-clone/assets/37292226/f60d3f9d-1a18-4589-a038-9f848201f570)


## Technologies

I used `React`, `Node`, `MongoDB`, `Express`, `Axios`.

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

I was supposed to build an API that returned the proper data from the Mongodb database. I started this process by using the `express` framework and then adding `Mongoose` for communicating with the database.

One of the main challenges I ran into was setting up the routes properly.

## HTTP request methods used in the project
1. `GET` `/`  → The client will see the “Home Page with all the endpoints” message which is used to verify that the application is working properly.

2. `GET` `/subscribers` → When the user hits this, **endpoint /subscribers**, the client will **get an array of all subscribers in JSON format** from the database where the data is stored in MongoDB database.

3. `GET` `/subscribers/names` →When the user hits this, endpoint **/subscribers/names** the client will get an array of all subscribers in JSON format with **only name and subscribed Channel fields** from the database.

4. `GET` `/subscribers/:id` → When the user hits this, endpoint **/subscribers/:id** in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular **user’s details like name, subscribed Channel and subscribed Date** from the database.
   
