import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9186a26e = () => interopDefault(import('..\\pages\\bar\\index.vue' /* webpackChunkName: "pages_bar_index" */))
const _446a1ebd = () => interopDefault(import('..\\pages\\bonus\\index.vue' /* webpackChunkName: "pages_bonus_index" */))
const _6bdf9bb3 = () => interopDefault(import('..\\pages\\feedback\\index.vue' /* webpackChunkName: "pages_feedback_index" */))
const _31810eb9 = () => interopDefault(import('..\\pages\\promotion\\index.vue' /* webpackChunkName: "pages_promotion_index" */))
const _4d6eb64e = () => interopDefault(import('..\\pages\\some-page.vue' /* webpackChunkName: "pages_some-page" */))
const _0dd22084 = () => interopDefault(import('..\\pages\\start-page.vue' /* webpackChunkName: "pages_start-page" */))
const _9d53181e = () => interopDefault(import('..\\pages\\bar\\_id\\index.vue' /* webpackChunkName: "pages_bar__id_index" */))
const _90feebfe = () => interopDefault(import('..\\pages\\promotion\\_id\\index.vue' /* webpackChunkName: "pages_promotion__id_index" */))
const _e689a896 = () => interopDefault(import('..\\pages\\bar\\_id\\_page_name\\index.vue' /* webpackChunkName: "pages_bar__id__page_name_index" */))
const _daf02d50 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bar",
    component: _9186a26e,
    name: "bar"
  }, {
    path: "/bonus",
    component: _446a1ebd,
    name: "bonus"
  }, {
    path: "/feedback",
    component: _6bdf9bb3,
    name: "feedback"
  }, {
    path: "/promotion",
    component: _31810eb9,
    name: "promotion"
  }, {
    path: "/some-page",
    component: _4d6eb64e,
    name: "some-page"
  }, {
    path: "/start-page",
    component: _0dd22084,
    name: "start-page"
  }, {
    path: "/bar/:id",
    component: _9d53181e,
    name: "bar-id"
  }, {
    path: "/promotion/:id",
    component: _90feebfe,
    name: "promotion-id"
  }, {
    path: "/bar/:id/:page_name",
    component: _e689a896,
    name: "bar-id-page_name"
  }, {
    path: "/",
    component: _daf02d50,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
