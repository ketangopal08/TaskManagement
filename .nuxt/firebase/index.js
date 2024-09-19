import createApp from './app.js'

import authService from './service.auth.js'

const appConfig = {"apiKey":"AIzaSyBNbs_4_Lq1EbEpU1snW3avqIOjaPpVZxk","authDomain":"todotasking.firebaseapp.com","databaseURL":"https:\u002F\u002Ftodotasking-default-rtdb.firebaseio.com","projectId":"todotasking","storageBucket":"todotasking.appspot.com","messagingSenderId":"559697227355","appId":"1:559697227355:web:667e4ee467c373d54cd97e","measurementId":"G-KN6PJY24W4"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}