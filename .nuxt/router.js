import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0377315e = () => interopDefault(import('../pages/sign.vue' /* webpackChunkName: "pages/sign" */))
const _58431304 = () => interopDefault(import('../pages/wander/index.vue' /* webpackChunkName: "pages/wander/index" */))
const _314f18c9 = () => interopDefault(import('../pages/callback/auth-error.vue' /* webpackChunkName: "pages/callback/auth-error" */))
const _5f4427ab = () => interopDefault(import('../pages/callback/auth-redirect.vue' /* webpackChunkName: "pages/callback/auth-redirect" */))
const _527cab04 = () => interopDefault(import('../pages/callback/auth-success.vue' /* webpackChunkName: "pages/callback/auth-success" */))
const _48a59587 = () => interopDefault(import('../pages/tag/tree.vue' /* webpackChunkName: "pages/tag/tree" */))
const _64a47f26 = () => interopDefault(import('../pages/wander/cosplay.vue' /* webpackChunkName: "pages/wander/cosplay" */))
const _30aed12c = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _75622ab4 = () => interopDefault(import('../pages/tag/_slug/index.vue' /* webpackChunkName: "pages/tag/_slug/index" */))
const _0513205a = () => interopDefault(import('../pages/user/_slug.vue' /* webpackChunkName: "pages/user/_slug" */))
const _1ef87b5d = () => interopDefault(import('../pages/user/_slug/index.vue' /* webpackChunkName: "pages/user/_slug/index" */))
const _3bf0ccac = () => interopDefault(import('../pages/user/_slug/draft.vue' /* webpackChunkName: "pages/user/_slug/draft" */))
const _315d47a9 = () => interopDefault(import('../pages/user/_slug/emotion/index.vue' /* webpackChunkName: "pages/user/_slug/emotion/index" */))
const _04c5815c = () => interopDefault(import('../pages/user/_slug/message.vue' /* webpackChunkName: "pages/user/_slug/message" */))
const _2a5f011b = () => interopDefault(import('../pages/user/_slug/setting.vue' /* webpackChunkName: "pages/user/_slug/setting" */))
const _356f075e = () => interopDefault(import('../pages/user/_slug/setting/index.vue' /* webpackChunkName: "pages/user/_slug/setting/index" */))
const _0049a4ba = () => interopDefault(import('../pages/user/_slug/setting/basic.vue' /* webpackChunkName: "pages/user/_slug/setting/basic" */))
const _e22709c2 = () => interopDefault(import('../pages/user/_slug/setting/oauth2.vue' /* webpackChunkName: "pages/user/_slug/setting/oauth2" */))
const _26fb10f2 = () => interopDefault(import('../pages/user/_slug/social.vue' /* webpackChunkName: "pages/user/_slug/social" */))
const _37df99f5 = () => interopDefault(import('../pages/user/_slug/social/index.vue' /* webpackChunkName: "pages/user/_slug/social/index" */))
const _1c793e38 = () => interopDefault(import('../pages/user/_slug/social/followers.vue' /* webpackChunkName: "pages/user/_slug/social/followers" */))
const _2ed4a298 = () => interopDefault(import('../pages/user/_slug/social/following.vue' /* webpackChunkName: "pages/user/_slug/social/following" */))
const _010bea78 = () => interopDefault(import('../pages/user/_slug/social/friends.vue' /* webpackChunkName: "pages/user/_slug/social/friends" */))
const _2b682689 = () => interopDefault(import('../pages/user/_slug/timeline/index.vue' /* webpackChunkName: "pages/user/_slug/timeline/index" */))
const _3b948330 = () => interopDefault(import('../pages/user/_slug/emotion/bangumi.vue' /* webpackChunkName: "pages/user/_slug/emotion/bangumi" */))
const _1dc26c6b = () => interopDefault(import('../pages/user/_slug/emotion/game.vue' /* webpackChunkName: "pages/user/_slug/emotion/game" */))
const _0a8f4d54 = () => interopDefault(import('../pages/user/_slug/emotion/notebook.vue' /* webpackChunkName: "pages/user/_slug/emotion/notebook" */))
const _78a57586 = () => interopDefault(import('../pages/user/_slug/emotion/topic.vue' /* webpackChunkName: "pages/user/_slug/emotion/topic" */))
const _d3605bd0 = () => interopDefault(import('../pages/tag/_slug/edit.vue' /* webpackChunkName: "pages/tag/_slug/edit" */))
const _5ce5d46e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/sign",
      component: _0377315e,
      props: false,
      name: "sign"
    }, {
      path: "/wander",
      component: _58431304,
      props: false,
      name: "wander"
    }, {
      path: "/callback/auth-error",
      component: _314f18c9,
      props: false,
      name: "callback-auth-error"
    }, {
      path: "/callback/auth-redirect",
      component: _5f4427ab,
      props: false,
      name: "callback-auth-redirect"
    }, {
      path: "/callback/auth-success",
      component: _527cab04,
      props: false,
      name: "callback-auth-success"
    }, {
      path: "/tag/tree",
      component: _48a59587,
      props: false,
      name: "tag-tree"
    }, {
      path: "/wander/cosplay",
      component: _64a47f26,
      props: false,
      name: "wander-cosplay"
    }, {
      path: "/pin/:slug?",
      component: _30aed12c,
      props: true,
      name: "pin-slug"
    }, {
      path: "/tag/:slug?",
      component: _75622ab4,
      props: true,
      name: "tag-slug"
    }, {
      path: "/user/:slug?",
      component: _0513205a,
      props: true,
      children: [{
        path: "",
        component: _1ef87b5d,
        props: true,
        name: "user-slug"
      }, {
        path: "draft",
        component: _3bf0ccac,
        props: true,
        name: "user-slug-draft"
      }, {
        path: "emotion",
        component: _315d47a9,
        props: true,
        name: "user-slug-emotion"
      }, {
        path: "message",
        component: _04c5815c,
        props: true,
        name: "user-slug-message"
      }, {
        path: "setting",
        component: _2a5f011b,
        props: true,
        children: [{
          path: "",
          component: _356f075e,
          name: "user-slug-setting"
        }, {
          path: "basic",
          component: _0049a4ba,
          name: "user-slug-setting-basic"
        }, {
          path: "oauth2",
          component: _e22709c2,
          name: "user-slug-setting-oauth2"
        }]
      }, {
        path: "social",
        component: _26fb10f2,
        props: true,
        children: [{
          path: "",
          component: _37df99f5,
          name: "user-slug-social"
        }, {
          path: "followers",
          component: _1c793e38,
          name: "user-slug-social-followers"
        }, {
          path: "following",
          component: _2ed4a298,
          name: "user-slug-social-following"
        }, {
          path: "friends",
          component: _010bea78,
          name: "user-slug-social-friends"
        }]
      }, {
        path: "timeline",
        component: _2b682689,
        props: true,
        name: "user-slug-timeline"
      }, {
        path: "emotion/bangumi",
        component: _3b948330,
        props: true,
        name: "user-slug-emotion-bangumi"
      }, {
        path: "emotion/game",
        component: _1dc26c6b,
        props: true,
        name: "user-slug-emotion-game"
      }, {
        path: "emotion/notebook",
        component: _0a8f4d54,
        props: true,
        name: "user-slug-emotion-notebook"
      }, {
        path: "emotion/topic",
        component: _78a57586,
        props: true,
        name: "user-slug-emotion-topic"
      }]
    }, {
      path: "/tag/:slug?/edit",
      component: _d3605bd0,
      props: true,
      name: "tag-slug-edit"
    }, {
      path: "/",
      component: _5ce5d46e,
      props: false,
      name: "index"
    }],

    fallback: false
  })
}
