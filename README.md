# XT Coding Assignment

## Prerequisites :

## Code:

- Deployed stg Env : [http://poc9.herokuapp.com](http://poc9.herokuapp.com)
- Deployed Prod Env : [http://poc7.herokuapp.com](http://poc7.herokuapp.com)
- Code: [https://github.com/kunalverma94/POC](https://github.com/kunalverma94/POC)
- Video: [Link](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/32ewd.mp4)
- Document:[Link](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/XT%20Coding%20Assignment.docx)

## Requirements

- Angular 9
- Node JS : Tested on 12v

## How to Run ? # Please run following commands in solution folder.

1. npm install
2. npm run build:ssr –production
3. npm start

█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█

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
  - **App work offline mode once loaded**.
  - BaseService Implementation with Retry Strategy 5 time with interval of 5s

- Deployment
  - Continuous build pipeline on Heroku into staging
  - [http://poc9.herokuapp.com](http://poc9.herokuapp.com/)
  - [https://poc7.herokuapp.com/](https://poc7.herokuapp.com/)
  - [https://github.com/kunalverma94/POC](https://github.com/kunalverma94/POC)
- SSR
  - Angular Universal for SSR
  

█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█


# TO-DO- Limited by Time

- Style cdn
- Refactoring
- Added more testcases
- Modularizing Filter Module
- Notifications /User Friendly Error messages


█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█

## Functionality

- Client Side
  1. User is able to Filter the results with help of provided Filters.
  2. Applying any Filter reflect the below changes:
    - Selected filter change to selected state as shown in the visual comp.
    - Applied filters change the URL and update the Page with latest records without refreshing the page.
    - If the page is refreshed with the applied filters in the URL – the resulting page is server side rendered &amp; subsequent filters are again applied on client side rendered.
- Server Side
  1. The initial launch programs landing page has to be server side rendered.
  
  ![Server Side Code](https://raw.githubusercontent.com/kunalverma94/just4gag/master/ssr.jpg)

█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█

## Responsive Design

Mobiles View

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/700.jpg)

Tablets View

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/1024.jpg)

PC View

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/1440.jpg)

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/night.jpg)


█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█


## Deployment Build and Packaging

On deployment linting is performed that ensures quality .By extending build with ng lint. Build have basic set of static code quality checks and fail the build if there is any error.Heroku :CI /CD


![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/heroku1.jpg)


![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/poc/heroklog.jpg)


█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█


## Testing

  Added 19 testcases to test basic functionality of components


█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█■█


## LightHouse Test

The test showed better performance on local than on heroku server.

Local 90+

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/ll.jpg)

Heroku: On Heroku varies from 66 -88 % ..avg :74%

  Staging
  
![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/ls.jpg)

![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/lss.jpg)

  Production
  
  ![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/lp.jpg)

 ![](https://raw.githubusercontent.com/kunalverma94/just4gag/master/lpp.jpg)
