# Threads_Posts application with Vue JS

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Threads_Posts_VUE.JS-APP
# github-search-tool

### What is the app about
This is a thread application that utilizes json data from a rest API. It queries the data object properties and renders the data into Vue JS components dynamically. Display data list as threads coming from the data JSON. And applying styles to the vue components.
![alt text](https://github.com/Alamin-Juma/Threads_Posts_VUE.JS-APP/blob/main/src/assets/threads.png)

### Adding router tothe application
On clicking a particularthread,it routes one to that thread with a unique id and displays allposts available onthe thread.  This improves SPA as no reloading occurs from the page (static page)
- The routes are matched matched dynamically with routs paramas
- extracting route configurations
- mapping routes with specific components
- pageNotFound fromVue router with redirect 
- redirect without url change 
![alt text](https://github.com/Alamin-Juma/Threads_Posts_VUE.JS-APP/blob/main/src/assets/posts.png)

## How to navigate this project
- Somewhat complex stateful logic: [https://github.com/Alamin-Juma/Threads_Posts_VUE.JS-APP]
- Responsive CSS using styled-components:
- The application fetches data from the Firebase using cloud functions: Examples for the request []

## HowI built the project
- used Vue JS for building front end components
- Vue router to route static pages with dynamics routes 
- styling components dynamically to enhance SEO on an SPA  

## If I had more time I would change this
- Implementing Vuex and State Management for fetching authenticated users and build a user profile and authID to create new posts from a user
- Higher order functions in Vue like dynamic vuex getters and mutations
- worked with cloud firestore for storing and retrieveing data
- user authentication
- loaders 
- Navigation guards on Vue Router
- custom directives
- implementing vuex store
- pagination and notification system
- form validation
- and deployment
