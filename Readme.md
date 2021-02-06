
  # Project Title: Social Media API 
  ### [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  ## Table of contents:
  1. [Title](#Project-Title)
  1. [License](#License)
  1. [Project Description](#Project-Description)
  1. [Installation](#Installation-Instructions)
  1. [Useage](#How-To-Use)
  1. [How to Contribute](#How-to-Contribute)
  1. [Test Instructions](#Test-Instructions)
  1. [Questions](#Questions)

  ## License: 
  ### This project is licensed under MIT (click on icon near the top):
  or here: [MIT](https://opensource.org/licenses/MIT)
 

  ## Project Description:
  MongoDB based backend for a social media app, with users, thought messages and reactions to thought messages.

  ### Features
  * Full CRUD api using mongoose for two main documents: Users and Thoughts (messages). 
  * Users can have followers which is a list of references to other users.
  * Users have Thoughths which on the user is a list of references to Thought documents. 
    * If a user is deleted, so are the associated thoughts for that user.
  * Thoughts can have reactions associated with them.  
    * Reactions are implemented as subdocuments on Thoughts, reactions can be added or deleted.  
  * Created At timestamps are formatted using moment.js

  ## Installation Instructions:
  Fork on github and, npm install packages and run server.js
  ## How To Use
  This is a REST api backend with no front end, GET POST PUT and DELETE http requests can be made.  
  
  ## How to Contribute:
  * Bug fixes and comments and suggestions are welcome
  * Checkout the github repo and please raise any issues with Social Media API you come across 
  * Even better - help with bugfixes and features by submitting your solutions in pull requrets for the repo
  * Follow the code of coduct for contribution outlined in [Contributor Covenant](https://www.contributor-covenant.org/) 
  ## Test Instructions
  ### The testing strategy is as follows
  #### No tests are currently implemented 

  ## Questions
  Feel free to reach out either in the projects GitHub page or send an email to the address below
  ### Github page:
  [GitHub](https://github.com/KJWesthoff/SocialNetworkAPI)
  ### email:
  [karl.johan.westhoff@gmail.com](mailto:karl.johan.westhoff@gmail.com) 
