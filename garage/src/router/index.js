import { createRouter, createWebHistory } from 'vue-router'

import adminpage from '../views/adminpage.vue'
import auth from '../middleware/auth';
import clientpage from '../views/clientpage.vue'
import garagepage from '../views/garagepage.vue'
import homepage from '../views/homepage.vue'
import loginpage from '../views/loginpage.vue'
import mecanicienaccueil from '../views/mecanicienaccueil.vue'
import mecanicienpageapropos from '../views/mecanicienpageapropos.vue'
import register from '../views/register.vue'
import registergarage from '../views/registergarage.vue'
import registermecanicien from '../views/registermecanicien.vue'
import validationcode from '../views/validationcode.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: loginpage
    },
    {
      path: '/registermecanicien',
      name: 'registermecanicien',
      component: registermecanicien
    },
    {
      path: '/registergarage',
      name: 'registergarage',
      component: registergarage
    },
    {
      path: '/adminpage',
      name: 'adminpage',
      component: adminpage
    },
    {
      path: '/clientpage',
      name: 'clientpage',
      component: clientpage,
      meta: {
        middleware: auth
      }
    },
    {
      path: '/mecanicienpageapropos',
      name: 'mecanicienpageapropos',
      component: mecanicienpageapropos
    },
    {
      path: '/mecanicienaccueil',
      name: 'mecanicienaccueil',
      component: mecanicienaccueil
    },
    {
      path: '/garagepage',
      name: 'garagepage',
      component: garagepage
    },
    {
      path: '/validationcode',
      name: 'validationcode',
      component: validationcode
    },
  ]
})

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}
  
router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});
  
export default router
