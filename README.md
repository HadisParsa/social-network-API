# <Social-Network-API>

# Social Network API

## Summery 
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data.

In this project an API for a social network web application is created, where users can share their thoughts, react to friends’ thoughts, and create a friend list.
Express.js for routing, a MongoDB database, and the Mongoose ODM were used.



## Link
 [Click here to access to The Note Taker with node](http://localhost:3001).

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock-Up
The following images show the web application's appearance and functionality:


## Installation

Be sure to have MongoDB installed on your machine. Follow the [MongoDB installation guide on The Full-Stack Blog](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) to install MongoDB locally.

Install add all the necessary dependencies from json file.

```md
npm i
```
Once everything is installed to connect to the server run the following code in the command line:

```md
node index.js
```
then when you see the "Connected on localhost:3001" comment, you have successfully connected to Insomnia and can begin to use the applicatio. 