import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import PageNotFound from '@/components/PageNotFound'
// import * as VueRouter from 'vue-router'
import {createRouter, createWebHistory} from  'vue-router'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', 
  //name the route
  name: 'Home',
  component: PageHome
 },
 { 
  //dynamic route with params 
  path: '/thread/:id', 
  //name the route
  name: 'ThreadShow',
  component: PageThreadShow,
  props: true
 },
 { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound, props: true},


]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default   createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(), //remove #
  routes, // short for `routes: routes`
})