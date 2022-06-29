# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## ABOUT THE RESOLUTION OF THE CHALLENGE
### Functional Requirements.
"**As** an user, **I want** to search by name Rick and Morty's characters **fpr** watch the results"
### Non Functional Requirements.
Nothing was said about the end device where the application will run. Because the app is for searching and I think in the company the one that could use the app are researchers from their desktop PC, no many optimization for running on mobile where done. Even dough some breakpoints and good practices for responsiveness where done, is not optimizated.
There basics non functional requirements that are related to performance, mantainability, etc. are tried to be achieved by software practices and patterns into the code.
### The Process
#### Prerequisites
Apart from the requiremets also for frontend development the suer experience and user interface is needed. For the UI a basic design was done in AdobeXD and then exported to Zeplin. In case of UX (overflow)
As a frontend developer is really important to pay attention and be part of this process for many reasons:
1. Designers also split the application in small components and you get a first impression of how many components will have the app, first approach to reusability, etc.
2. Basic behaiviour.
3. Early identify undoable stuff.
#### Organizing stuff, planning and estimating.
Once we have the functional requirements and the ux/ui we need to organize the stuff and have a plan. In this case, this small challenge could be seen as one user story "**As** an user, **I want** to search by name Rick and Morty's characters **fpr** watch the results". The acceptance criterias of the story was defined by the challenge and basically are:
  - When user types something into the searchbar they should be presented with suggeste character names.
  - If pressing enter, the character results should be display.
  - If user click on the suggestion, the result should be shown.
It seems to be short and easy user story, but anyway needs some work and planning. A Trello board was created to manage the proyect. Task were created, tagged by type, prioritazed, etc.
### Hands on mud
#### React project.
##### Version
To solve the challenge I decided to start with create-react-app tool. The project was created in the 18 version, but after some weird behaivours that I didn't want to handle it (because of time) I had to downgrade the version to the most known by me.  
##### Project structure
The project have a basic structre:
-src
--apollo <- for configuring apollo client, fragments and mutations
--common <- basic common stuff like utils, constans and route history
--components <- components that be reused
--hooks <- hooks. I always check on [react-use](https://github.com/streamich/react-use) and sometimes copy all and sometimes take as starting point
--state <- The redux store and state management
--stories <- default stortbook folder.
--style-helpers <- basic styling for share, mixins, etc
--widgets <- litle piece of code with no state such as buttons, etc.

##### Unit testing
Normally every component should have a unit testing and also there are metrics to achieve regarding test coverage. For this challenge I wrote just one test for the [MessageComponent](https://github.com/ezehurt/rick-and-morty/blob/main/src/components/layout/message/Mesage.test.jsx)

##### The states
There many ways to manage the state of one app. Always trying to avoid complexity. For this case I decided to mantain the state in 3 differents ways.
- The url state
This is something desirable when you try to have a consistency between the app state and the url. In some, sometimes is good for users to share directly the link with other users. When others users paste the url on their browsers, the parameters are got and the app will start loading and requesting all the necesary stuff to show the user the same. e.g If you pase this on your browser, you will se the same search term and results(if anything on the search response change) [DEMO APP LINK](https://bayer-challenge-eh.web.app/q?q=rick). Pay attention that the search term is "rick" and remains on the url 
- The redux state
The application have the redux-toolkit for managing the store, with slices, action creators, selectos. You can see an example [search state](https://github.com/ezehurt/rick-and-morty/blob/main/src/state/search.js). Where the "paginationInfo" is used in the [SearchComponent](https://github.com/ezehurt/rick-and-morty/blob/main/src/components/pages/search/PageSearch.jsx)
- Component state (useState)
#### Github with "git flow"
For source control versioning, I used github basically with a main branch, a development branch and "features" branches.
#### Storybook
Storybook is great and is one of the tools that are really close tu ux/ui. Trying to be the "design system source of truth", small components with no other logic than the behaviour are displayed there. Developers can access the storybook, see how components works, change styles and directly copy code to paste on their IDE. You can see the storybook for this project here
#### Cypress
#### Styling, scss, grid-flexbox combination
In the project I installed node-sass to get all it benefits of variables and functions. Also a combination of flexbox and grid where done. You can check for example [here](https://github.com/ezehurt/rick-and-morty/blob/main/src/components/searchbar/autosuggestion-searchbar/autosuggestion-searchbar.scss) where the background is setted on the same "place" of the autosuggestionbar. 


### Restrictions of the challenge.
#### The API.
One of the acceptance criteria of the app if to show suggestions by character names to the user. Those suggestions can more or less be done but I personally don't like how is it. Normally it should be a grapqhl query to get suggestions. You send the term and depending on the type of search you choose(for this example only by name) you get the suggestions. Or going further, maybe you can write a term and you get suggestions of many types, e.g. If you write "rick", you can get suggestions of name, episodes, locations and in the suggestions menu showed in the app, diff them with icons, etc. Doing more likely a fulltext search with differents suggestions types.



### Tools
#### Chrome Developers tool 
#### Extensions
#### Css Grid
#### Visual Studio Code
#### SourceTree


