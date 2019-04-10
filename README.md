# FriendFinder

## Goal of the Assignment
  For this assignment, our goal was to create a friend-finding application. The application had to feature a survey that would take the user's inputs and match them with the friend in the friends.js file whose answers were the closest. Then, the user needed to be shown the name and image of that friend as their new best friend.

## Technological Requirements
  In order to build this application, a variety of different elements had to be included. The application and server are built with JavaScript/jQuery and information is passed back and forth from the client and server in the form of GET and POST requests. Additionally, the server is initiated via Node.js and incorporates both the path and express modules.
  
## How It Works
  When the server is initiated, the home page loads via a GET request that is passed to the server on the server.js file. When the user clicks on the "Survey" button that acts as a link to the survey, they are then routed to the survey page via the corresponding route on the htmlRoutes.js file. Once the user inputs all of their information and submits the survey, the information is saved into a new object and is passed to the apiRoutes.js file via a POST request to be scored against the existing friends. After the scoring function has run, the server then responds to the POST request and sends back the object of the friend whose answers most closely match the answers of the user. Finally, the script on the survey.html file inserts the name and photo of the best friend match into a modal and displays it to the user. 
  
## Link to the Deployed Site
https://sjr-friendfinder.herokuapp.com/survey.html
