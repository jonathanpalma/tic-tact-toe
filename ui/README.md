# tic-tac-toe-ui

User Interface (UI) is an application designed using a component-based architecture with which a person may interact.

## Language

* Javascript

## Frameworks / Libs

* React
* Redux

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Project structure

Inside the `src` folder there are some folders for non-feature code that can be shared across different parts of the app (actions, components, constants, containers, helpers, images, reducers, selectors, services). 

### actions

The `actions` folder contains all the Redux action creators for the project.

### components

The `components` folder contains shared React components that can be used anywhere in the application.

### constants

The `constants` folder contains all of the redux action type constants used by redux action creators and reducers. It could be used for any other constants in the project as well, it doesn't have to be only for redux action types.

### containers

The `containers` folder contains React components that are connected to the redux store.

### helpers

The `helpers` folder contains all the bits and pieces that don't fit into other folders but don't justify having a folder of their own.

### images

The `images` folder contains all the image assets that can be imported from js and be used anywhere in the application.

### reducers

The `reducers` folder contains all the Redux reducers for the project, each reducer updates a different part of the application state in response to dispatched redux actions.

### selectors

The `selectors` folder contains all the selectors that encapsulate knowledge of where to find a particular subset of data inside of the redux store.

### services

The `services` folder contains a layer that handles all http communication with backend APIs for the application, each service encapsulates the api calls for a content type (e.g. users) and exposes methods for performing various operations (e.g. CRUD operations). Services can also have methods that don't wrap http calls, for example the userService.logout() method just removes an item from local storage. This approach provides a clean separation of concerns and simplifies the redux actions (and other modules) that use the services.
