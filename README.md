# test project for Angular 1.x Development

It's using Angular 1.5 with material

## Features
* Live reload
* Organised folder structure
* Minified CSS, HTML and JS build files
* Minified images.
* SASS support
* Responsive layout
* Mobile ready
* [Material Design Icons](https://material.io/icons/) icons
* Support for Unit & E2E Testing
* Unit Test reporting
* [ESLint](http://eslint.org/) code analysis tool.
* [Jasmine](http://jasmine.github.io/2.3/introduction.html) testing framework
* [Karma](http://karma-runner.github.io/0.13/index.html) test runner
* [Protractor](https://angular.github.io/protractor/#/)  end-to-end test framework

## Setup
1. Install [Git](https://git-scm.com/downloads) and [NodeJS](http://nodejs.org/)
2. `git clone https://github.com/freshmangos/todolist-app.git myApp`
3. `cd myApp`
4. `npm install`

## Quick Usage
* `npm start` : Creates a development build folder called `public` and serves it on: [`http://localhost:3000/`](http://localhost:3000/)
* `npm start --production` : Creates a production ready folder called `production` and serves it on: [`http://localhost:4000/`](http://localhost:4000/)
* `npm test` : Runs code checks, unit tests and E2E tests.
* `npm run unit` : Runs unit tests only.
* `npm run e2e` : Runs E2E tests only. 
* `npm run eslint` : Runs an ESLint code check only.
* `npm run coverage` : Creates and serves the unit test coverage reports on: [`http://localhost:5000/`](http://localhost:5000/)
* `npm run build` : Creates the `public` build folder but doesn't serve it.
* `npm run build --production` : Creates the `production` build folder but doesn't serve it.

## Project Structure
This project follows a **"Folders-by-Feature"** structure very similar to [John Papa's Styleguide](https://github.com/johnpapa/angular-styleguide#application-structure). From the screenshot below you can see that there are 6 separate features, a folder for each one.
Each feature is treated as a mini Angular app. This structure allows us developers to easily locate code and identify what each file represents at a glance.
By retaining this structure the project is much more manageable as it grows.

![alt text](http://i.imgur.com/9jYKIoi.png "Folders-by-Feature structure")

* The `app` folder contains the following individual features:
    * `about`: Contains the about page related files.
    * `layout`: The high level layout container which stitches it all together.
    * `shared`: Contains all shared services, directives, styles etc. used across the entire app.
    * `sidenav`: Contains the sidenav related files.
    * `todo`: Contains the todo page related files.
    * `toolbar`: Contains the toolbar related files.

* The `assets` folder contains all globally used images.
