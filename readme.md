# Github Actions and SonarQube integration

This repository contains an example of [SonarQube](https://docs.sonarsource.com/sonarqube/10.3/) integration with [Github Actions](https://docs.github.com/en/actions). Running SonarQube locally and publishing it to the world using [ngrok](https://ngrok.com/)

## Other languages / Otros idiomas
[![en](https://img.shields.io/badge/en-english-blue.svg)](https://github.com/brainsDevopsOrg/sq-github-actions/blob/main/readme.md)
[![es](https://img.shields.io/badge/es-español-yellow.svg)](https://github.com/brainsDevopsOrg/sq-github-actions/blob/main/readme-es.md)

## Context
This repository is part of my Udemy course:
* [SonarQube Mastery](https://www.udemy.com/course/sonarqube-mastery/?referralCode=EF59257E7D8DC3026D6D)

If you're interested in learning more about SonarQube or Github Actions, you can check for discount coupons in the course section of [devopsbrains.com](https://devopsbrains.com/cursos/)

# Usage
* Fork this repository on your Github account
* You can run SonarQube and ngrok locally following the instructions in this  [repository](https://github.com/BrainsDevOps/sonarqube-udemy-docker-compose)
* Create a token for the projects analysis in your [SonarQube](http://localhost:9000/account/security) local server
* Create secrets for your sonar server url and token in your Github repository
    * SONAR_TOKEN - The token you've generated in your SonarQube server
    * SONAR_HOST_URL - Your Ngrok domain, where you're exposing SonarQube to the Internet
* Run the action in the "Actions" tab of your Github repository. Manually or with a push to the main branch
* If everything goes well, you should see the result of your analysis in your [SonarQube server](http://localhost:9000/dashboard?id=github-actions)