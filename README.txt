--------------------------------------

Welcome to a site designed and created by WEI for WineGoofs, a small startup 
with a mission of "Good wine pleasure for everyone, every occasion, everytime!". Their goal
is to make wine less "snobby" and more accesable for the normal consumer

Components[
    Mlab.com - for database storage
    Mongoose - for sharding router
    MongoDB - for the databse server
    Mongo - database shell (uses interactive JavaScript)
    Express - handels webserver features
    Bodyparser - translates requests into JSON (which our Database uses)
    Bootstrap - easy setup of the front-end
    Jquary - easier use of JavaScript
    Node - required to run a program written in JavaScript
]

Getting the project up and running locally[

    *prerequisites are a texteditor, Git and then Node,Mongo etc via Git downloaded before starting*

    Creat a new folder ("mkdir <name>" in the command promt is recommended).

    Clone down projecty by using "git clone https://github.com/Testo12/WineGoofs-WEI.git" in the command prompt.

    Type "node app.js" in the command prompt to start the server.

    Browse to "http://localhost:4242/" on a web browser of your choice.

]

Structure explained [

The application is build with MVC in mind. Model, View, Controller.
The Model part manages the data of the application and recives input from the Controller.
View gives you the view.... the UX, GUI where the input is made and then sent away via routes.
Controller performs actions on the model object depending on the input.

Files are named after which type of function they serve. The controller for the wine is winecontroller.js

app.js sets up the conection between the webclient and the database at Mlab.com

www folder contains everything related to the design of the website.


]






