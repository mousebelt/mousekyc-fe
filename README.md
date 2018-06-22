# Project Description

This project is to process KYC by User token

User can upload their passport and ID card image from their local PC or taking photo using web camera so that Admin can check it

User will get KYC status from admin

# How to run project
It is easy to run project

First, You should install NodeJS on your local environment

1. Install dependencies

    * ```npm install```

2. Run project

    * ```npm start```

# Project Structure

### src
*   assets
    * img
    * styles
*   components
    * DocumentSelect
    * DropdownSelect
    * List
    * PrivateRoute
    * UploadDocument
*   containers
    * MatchContainer
    * RoutesContainer
    * SigninContainer
    * TakePhotoContainer
    * UploadDocContainer
    * UploadSelfieContainer
    * ValidationContainer
*   core
    * modules
    * store
    * index.js
*   services
    * common.js
    * constant.js
    * index.js
    * localStorage.js
    * restService.js
*   utilities
    * index.js
    * promisify.js
*   App.test.js
*   config.js
*   index.js
*   registerServiceWorker.js

Core includes redux structure(redux store, redux saga)

# Configuration
### How to config .env file

```
    REACT_APP_NODE_PTH=src/
    NODE_PATH=src/
```
### API Endpoint
you can change api endpoint in services/constants.js
```
    export const apiEndpoint = 'YOUR API ENDPOINT';
```
