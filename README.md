# CareerDevs Capstone Scraper Project
## scraper_view - this ReactJS project is the UI front-end for yahoo_scraper


to run this app, follow these steps:

1. start mongodb

2. java -jar target/Scraper.jar

3. yarn start

4. browser routes
	/rest/api/findAllStocks
	/rest/api/findBySymbol/{symbol}
	/rest/api/findByTimeStamp/{timeStamp}
	/rest/api/findLastScrape

##### To run this project, first run mongod
1. start mongodb
cd /Users/melocal/workspace/CareerDevs/ScraperProject/yahoo_scraper/data-mongodb

mongod --dbpath=.

##### then run yahoo_scraper rest api
2. java -jar target/Scraper.jar
cd /Users/melocal/workspace/CareerDevs/ScraperProject/yahoo_scraper

3. yarn start
inside of eclipse, click on App.java and 
press 
#### alt+shift+x then b

http://localhost:8081

#### thirdly, start this react app in terminal


cd /Users/melocal/workspace/CareerDevs/ScraperProject/scraper_view

yarn start

4. browser routes
	/rest/api/findAllStocks
	/rest/api/findBySymbol/{symbol}
	/rest/api/findByTimeStamp/{timeStamp}
	/rest/api/findLastScrape


--- 
### Some resources I found helpful in creating this react app

[Acedemind ReactJS Getting Started Tutorial](https://www.youtube.com/watch?v=pgAvVxowaYU)

[Traversy ReactJS Crash Course](https://www.youtube.com/watch?v=sBws8MSXN7A)


##### Note: content below this line is boiler-plate from create-react-app left in for its value.
---





---

##### the content below is legacy content from create-react-app
>>>>>>> add-components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
