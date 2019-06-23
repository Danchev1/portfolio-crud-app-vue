# portfolio-crud-app-vue

# My Portfolio

Task that tests candidate's skills for the opened front-end position

_Approximate time to complete the task: 4 hours (if you know what you're doing)_

#### Assignment description

Develop a small portfolio (SPA) that presents your projects and contains information about you.

The structure that should be used: 

**Home page**

- Header that contains Title and Slogan
- Navigation to navigate over the pages
- Projects component which should include the possibility of adding a project, a search engine (search by project name), and a list of projects. In addition, any project on the list should be able to be deleted

_Example:_

![](docs/home.png) 

**About page**

- Information about you

_Example:_

![](docs/about.png) 

KEEP IT SIMPLE! Focus on a minimal usable interface. Functionality takes priority over design.

#### Requirements

- Use [VueJS 2.x](https://vuejs.org/) for JavaScript framework
- Use [Vue Router](https://github.com/vuejs/vue-router) to manage routing
- Use [Axios](https://github.com/axios/axios) to consume API. The public folder contains a JSON file (**projects.json**) that you can use for requests.
- Use [Bootstrap-Vue](https://bootstrap-vue.js.org/) to create the UI
- Use [JSDoc](http://usejsdoc.org/) for the comments in the code


Documentation & notes:
------

* Used latest vue.js with vue-router, excluding vuex since app was small
and state management was not needed nor required
* Besides needed routes, there is a wildcard route, in case of misspelling
* Bootstrap vue - only used components were added to the project, not the 
whole framework

* Was not sure to mock data the whole crude approach (add/delete portfolio on
 response and so on) but if you like i a can implement it.
* Home view has some additional documentation in a custom tag :)

