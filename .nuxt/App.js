import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/global.scss'

import '../node_modules/normalize.css/normalize.css'

const _6f6c098b = () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)
const _78187f67 = () => import('../layouts/trend.vue'  /* webpackChunkName: "layouts/trend" */).then(m => m.default || m)
const _1a3b339e = () => import('../layouts/web.vue'  /* webpackChunkName: "layouts/web" */).then(m => m.default || m)

const layouts = { "_default": _6f6c098b,"_trend": _78187f67,"_web": _1a3b339e }

let resolvedLayouts = {}

export default {
  head: {"title":"咔哩吧","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"},{"name":"theme-color","content":"#f06595"},{"name":"format-detection","content":"telephone=no"},{"name":"applicable-device","content":"mobile"},{"name":"renderer","content":"webkit|ie-comp|ie-stand"},{"name":"force-rendering","content":"webkit"},{"http-equiv":"X-UA-Compatible","content":"IE=edge,chrome=1"},{"hid":"description","name":"description","content":"calibur - 二次元社区"},{"hid":"keywords","name":"keywords","content":"C站,calibur,咔哩吧,ACG,二次元,社区"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-capable","name":"apple-mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-status-bar-style","name":"apple-mobile-web-app-status-bar-style","content":"default"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"咔哩吧"},{"hid":"author","name":"author","content":"冰淤"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"咔哩吧"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"咔哩吧"},{"hid":"og:description","name":"og:description","property":"og:description","content":"咔哩吧 - 二次元社区"},{"hid":"og:image","name":"og:image","property":"og:image","content":"https:\u002F\u002Ffile.calibur.tv\u002Fweb\u002Ficons\u002Ficon_512.a9a872.png"},{"hid":"og:image:width","name":"og:image:width","property":"og:image:width","content":512},{"hid":"og:image:height","name":"og:image:height","property":"og:image:height","content":512},{"hid":"og:image:type","name":"og:image:type","property":"og:image:type","content":"image\u002Fpng"}],"link":[{"rel":"dns-prefetch","href":"https:\u002F\u002Ffile.calibur.tv"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.calibur.tv"},{"rel":"preconnect","href":"https:\u002F\u002Fapi.calibur.tv"},{"rel":"icon","type":"image\u002Fx-icon","href":"https:\u002F\u002Ffile.calibur.tv\u002Ffavicon.ico"},{"rel":"apple-touch-startup-image","href":"https:\u002F\u002Ffile.calibur.tv\u002Fimages\u002Fsplash\u002Flaunch-640x1136.png","media":"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{"rel":"apple-touch-startup-image","href":"https:\u002F\u002Ffile.calibur.tv\u002Fimages\u002Fsplash\u002Flaunch-750x1294.png","media":"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{"rel":"apple-touch-startup-image","href":"https:\u002F\u002Ffile.calibur.tv\u002Fimages\u002Fsplash\u002Flaunch-1242x2148.png","media":"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},{"rel":"apple-touch-startup-image","href":"https:\u002F\u002Ffile.calibur.tv\u002Fimages\u002Fsplash\u002Flaunch-1125x2436.png","media":"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"},{"rel":"apple-touch-startup-image","href":"https:\u002F\u002Ffile.calibur.tv\u002Fimages\u002Fsplash\u002Flaunch-1536x2048.png","media":"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{"rel":"apple-touch-startup-image","href":"https:\u002F\u002Ffile.calibur.tv\u002Fimages\u002Fsplash\u002Flaunch-1668x2224.png","media":"(device-width: 834px) and (device-height: 834px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{"rel":"apple-touch-startup-image","href":"https:\u002F\u002Ffile.calibur.tv\u002Fimages\u002Fsplash\u002Flaunch-2048x2732.png","media":"(device-width: 1024px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{"rel":"manifest","href":"https:\u002F\u002Ffile.calibur.tv\u002Fweb\u002Fmanifest.16853349.json"},{"rel":"shortcut icon","href":"https:\u002F\u002Ffile.calibur.tv\u002Fweb\u002Ficons\u002Ficon_64.a9a872.png"},{"rel":"apple-touch-icon","href":"https:\u002F\u002Ffile.calibur.tv\u002Fweb\u002Ficons\u002Ficon_512.a9a872.png","sizes":"512x512"}],"bodyAttrs":{"id":"calibur"},"script":[{"innerHTML":"var _hmt=_hmt||[];(function (){var hm=document.createElement(\"script\");hm.src=\"https:\u002F\u002Fhm.baidu.com\u002Fhm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","type":"text\u002Fjavascript","async":true},{"innerHTML":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https:\u002F\u002Fzz.bdstatic.com\u002Flinksubmit\u002Fpush.js'}else{bp.src='http:\u002F\u002Fpush.zhanzhang.baidu.com\u002Fpush.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();","type":"text\u002Fjavascript","async":true},{"innerHTML":"(function(){var iOS=\u002FiPad|iPhone|iPod\u002F.test(navigator.userAgent)&&!window.MSStream;var ratio=window.devicePixelRatio||1;var screen={width:window.screen.width*ratio,height:window.screen.height*ratio};if(iOS&&screen.width===1125&&screen.height===2436){document.querySelector('meta[name=viewport]').content=document.querySelector('meta[name=viewport]').content+',viewport-fit=cover'}}());","type":"text\u002Fjavascript"},{"src":"\u002F\u002Fqzonestyle.gtimg.cn\u002Fqzone\u002Fqzact\u002Fcommon\u002Fshare\u002Fshare.js","type":"text\u002Fjavascript"},{"src":"\u002F\u002Fres2.wx.qq.com\u002Fopen\u002Fjs\u002Fjweixin-1.4.0.js","type":"text\u002Fjavascript"}],"__dangerouslyDisableSanitizers":"script","style":[],"htmlAttrs":{"lang":"zh-CN"}},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout(layout) {
      const undef = !layout
      const nonexistent = !(layouts['_' + layout] || resolvedLayouts['_' + layout])
      let _layout = '_' + ((undef || nonexistent) ? 'default' : layout)
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
        .then((Component) => {
          resolvedLayouts[_layout] = Component
          delete layouts[_layout]
          return resolvedLayouts[_layout]
        })
        .catch((e) => {
          if (this.$nuxt) {
            return this.$nuxt.error({ statusCode: 500, message: e.message })
          }
        })
    }
  },
  components: {
    NuxtLoading
  }
}
