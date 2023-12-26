# Brain Buffs Tutoring 

**See the deployed site at https://www.brainbuffstutoring.com**

## Overview 

This will serve as a basic architecture overview of this site. I will outline the technologies used for each portion and point to relevant files to learn more. 


## AWS 
The site is run on top of AWS Services. It uses the following AWS Services 
#### Amplify 
For hosting and CI/CD of React app. Manages builds and deploys them to production 
#### DynamoDB
Used to store User Data about students, the kinds of questions they miss, our question database and many other items. 
#### Lambda Serverless Functions 
Used to execute backend logic. Source for each lambda can be found in /amplify/backend/function. Do a variety of functions including fetching questions for users, updating their profile, dispatching emails, doing adapative homework logic to customized questions to student
#### Cognito 
Used for user authentication and management. Sign in/Sign up etc. 
#### Simple Email Service 
Used for the Contact US form to dispatch an email to the team as well as to send confirmation emails on account sign up 
#### S3 
Used to store larger videos on site, question images, and other resources
### API Gateway 
Used to create an API for the requests. A centralized place to receive all receive all requests and dispatch them to the correct lambda functions 


## React 

The majority of the code is ReactJS. Most of the components are in the location
./src/components. The components are nested React components with lots of in-component styling as well as the use of React hooks.

## UI Design 

The styling of the components is done using tailwind. Figma is used to design


## Version Control and Package Management   

The version control system used is Git. The Git repository is linked to an AWS Amplify CI/CD pipeline so any commits to the repository automatically deploy to the website. NPM is used for package management. 

## Adaptive Homework System 

The logic for the adapative homework system Lambda is in ~/amplify/backend/function/createHomework folder. It is on the homework grading branch and is not yet integrated into the main branch. 

## Meta Spark  

The site uses Meta Spark for ad analytics with triggers set up to track certain actions by users to gain insight on ad effectiveness and business goals. 

