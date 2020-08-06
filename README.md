# XT Coding Assignment

## Prerequisites :

## Code:

- Deployed stg Env : [http://poc9.herokuapp.com](http://poc9.herokuapp.com/)
- Code: [https://github.com/kunalverma94/POC](https://github.com/kunalverma94/POC)
- Video: [https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/32ewd.mp4](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/32ewd.mp4)
- Document: [https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/XT Coding Assignment.docx](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/XT Coding Assignment.docx)

## Requirements

- Angular 9
- Node JS : Tested on 12v

## How to Run ? # Please run following commands in solution folder.

1. npm install
2. npm run build:ssr –production
3. npm start

# Angular Stack

- UI
  - Custom Reusable Components
  - Generic component for Filter.
  - List Items
  - Lazy loading images to improve page load performance
  - Day/Night Mode
  - Organized project structure
  - Custom Pipe for boolean representation
  - Was going for pagination / lazy loading on scroll but not sure, if it defeats the purpose of assignment to render large amount of data?

- Style
  - Responsive App All manages in SCSS Breakpoint
  - Managed most of style using variable for maintainability Scss variables :colors ,measurements , variables
  - Custom Loading animation
  - CSS Grid Layout/Flex Used for maintaining responsiveness

- PWA
  - Service Worker for caching request/Resources
  - BaseService Implementation with Retry Strategy 5 time with interval of 5s

- Deployment
  - Continuous build pipeline on Heroku into staging
  - [http://poc9.herokuapp.com](http://poc9.herokuapp.com/)
  - [https://github.com/kunalverma94/POC](https://github.com/kunalverma94/POC)

- SSR
  - Angular Universal for SSR

# TO-DO- Limited by Time

- Implementation much more efficient Service Worker
- Refactoring
- Added more testcases
- Modularizing
- Notifications /User Friendly Error messages

# Responsive

-
## Mobiles Less than 700

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/700.jpg)

-
## Tablets: 700-1024

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/1024.jpg)

-
## PC wide Screen 1024-1440

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/1440.jpg)

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/night.jpg)

## Deployment

- Heroku :CI /CD

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/heroku1.jpg)

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/heroklog.jpg)

## Testing

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/test.jpg)

## LightHouse Test

The test showed better performance on local than on heroku server.

On Heroku varies from 66 -88 % ..avg :74%

Local

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/lhl.jpg)

Staging Heroku

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/lhh.jpg)

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/lhh2.jpg)

#Angular Stack


	-UI
		-Custom Reusable Components
		-Generic component for Filter.
		-List Items
		-Lazy loading images to improve page load performance
		-Day/Night Mode
		-Organized project structure
    -Custom Pipe for boolean representation
		-Was going for pagination / lazy loading on scroll but 
		not sure,If it defeats the purpose of assignment to render large amount of data?
		
	-Style
		-Responsive App All manages in SCSS Breakpoint
		-Managed most of style using variable for maintainability Scss variables :colors ,measurements , variables
		-Custom Loading animation
		-CSS Grid Layout/Flex  Used for maintaing reponsiveness
		
	-PWA
		-Service Worker for caching request/Resources
		-BaseService Implementation with Retry Stratergy 5 time with interval of 5s 
		
	-Deployment
		-Continuous build pipeline on Heroku into staging
		-http://poc9.herokuapp.com/
		-https://github.com/kunalverma94/POC

	-SSR
		-Angular Universal for SSR

	-TO-DO- Limited By Time 
		-Implementation much more efficient Service Worker
		- Refactoring
		- Added testcases 
		- Modularizing
		- Notifications /User Friendly Error messages




# POC

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
