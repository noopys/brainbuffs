# Brain Buffs Tutoring 

**See the deployed site at https://www.brainbuffstutoring.com**

## Overview 

This will serve as a basic architecture overview of this site. I will outline the technologies used for each portion and point to relevant files to learn more. 


## AWS 
The site is run on top of AWS Services. It uses AWS Amplify for CI/CD, as well as hosting. The backend uses AWS Lambda functions. Lambdas are used in the following locations 

#Contact Us Form: Uses AWS Lambdas to integrate with AWS Simple Email Service and dispatch an email letting us know we have been contacted 

## React 

The majority of the code is ReactJS. Most of the components are in the location
./src/components. The components are nested React components with lots of in-component styling as well as the use of React hooks.

## Bootstrap

The styling of the components is done using bootstrap. Most styles are in the className's of React components


## Version Control and Package Management   

The version control system used is Git. The Git repository is linked to an AWS Amplify CI/CD pipeline so any commits to the repository automatically deploy to the website. NPM is used for package management. 

## Adaptive Homework System 

The logic for the adapative homework system Lambda is in ~/amplify/backend/function/createHomework folder. It is on the homework grading branch and is not yet integrated into the main branch. 

## Meta Spark  

The site uses Meta Spark for ad analytics with triggers set up to track certain actions by users to gain insight on ad effectiveness and business goals. 

