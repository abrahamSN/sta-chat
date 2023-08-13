# Technical Test - Fullstack Dev

## Description

Technical test for a fullstack developer position.

## Submission Guidelines

- Date of submission: 2023-08-13
- Instructions to run the project:
  - Clone the repository
  - Run `pnpm run install` in the root folder it will install all the dependencies in each package monorepo
  - For local
    - Run `pnpm run start:backend` in the root folder
  - For docker
    - Run `pnpm run start:backend:docker` in the root folder
  - Open `http://localhost:3000` in your postman
- Time spent
  - 15 hours (Backend only) have not much time to do the frontend part
- Assumptions made
  - at first I want to make the backend with gRPC but I am not confident with it so I use REST API instead
  - I use MongoDB as the database
  - I use JWT for authentication
  - I use pnpm as the package manager
  - I use expressJs as the framework
  - I use TypeScript for the language, because I love Type
- Compromises made
  - I have not much time to do the frontend part
  - I have not much time to do all unit test, at least you can see my poor unit test
  - The docker only handle the backend part
- Assume your application will go into production
  - I will use kubernetes to deploy the application so it will be easy to scale
  - I will add load balancer to handle the traffic
  - I will change the languange to GoLang because it is faster than NodeJs (because of the concurrency)
  - I will use Redis as the cache
  - I will add gRPC to handle the communication between services
  - I will add CI/CD to the project
  - I will add more unit test and integration test
  - I will add more logging
  - I will use env variable secret manager to handle the secret
- What did I not include in mysolution
  - If I have more time I will add more unit test and integration test
- Other information about your submission that you feel it's important that we know if applicable
  - I use pnpm as the package manager because it is faster than npm and yarn
  - Ofc pnpm can handle monorepo
- Your feedback on this technical challenge
  - I think this is a good challenge, I learn a lot from this challenge
  - But it takes a lot of time to do this challenge
  - You can use hackerank or leetcode to make the challenge more simple
  - I think the challenge is too much for a technical test