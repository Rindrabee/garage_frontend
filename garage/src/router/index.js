import { createRouter, createWebHistory } from 'vue-router'

import adminpage from '../views/adminpage.vue'
import auth from '../middleware/auth';
import auth2 from '../middleware/auth2';

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
import decouvrir from '../views/decouvrir.vue'
import modificationclient from '../views/modificationclient.vue'
import mdpoublier from '../views/mdpoublier.vue'
import vldoublie from '../views/vldoublie.vue'
import nouveaucode from '../views/nouveaucode.vue'
import loginadm from '../views/loginadm.vue'
import mdboublieradm from '../views/mdboublieradm.vue'
import mdpoublier2 from '../views/mdpoublier2.vue'
import vldoublie2 from '../views/vldoublie2.vue'
import nouveaucode2 from '../views/nouveaucode2.vue'
import mdpoublier3 from '../views/mdpoublier3.vue'
import vldoublie3 from '../views/vldoublie3.vue'
import nouveaucode3 from '../views/nouveaucode3.vue'
import adminGARAGE from '../views/adminGARAGE.vue'
import modificationadmin from '../views/modificationadmin.vue'
import adminCLIENT from '../views/adminCLIENT.vue'
import GARAGEshow from '../views/GARAGEshow.vue'
import Ajoutervoiture from '../views/Ajoutervoiture.vue'
import adminMECANICIEN from '../views/adminMECANICIEN.vue'
import urgencepage from '../views/urgencepage.vue'
import modificationmecanicien from '../views/modificationmecanicien.vue'



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
      component: adminpage,
      meta: {
        middleware: auth2
      }
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
      component: mecanicienaccueil,
      meta: {
        middleware: auth
      }
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
    {
      path: '/decouvrir',
      name: 'decouvrir',
      component: decouvrir
    },
    {
      path: '/modificationclient',
      name: 'modificationclient',
      component: modificationclient
    },
    {
      path: '/mdpoublier',
      name: 'mdpoublier',
      component: mdpoublier
    },
    {
      path: '/vldoublie',
      name: 'vldoublie',
      component: vldoublie
    },
    {
      path: '/nouveaucode',
      name: 'nouveaucode',
      component: nouveaucode
    },
    {
      path: '/loginadm',
      name: 'loginadm',
      component: loginadm
    },
    {
      path: '/mdboublieradm',
      name: 'mdboublieradm',
      component: mdboublieradm
    },
    {
      path: '/mdpoublier2',
      name: 'mdpoublier2',
      component: mdpoublier2
    },
    {
      path: '/vldoublie2',
      name: 'vldoublie2',
      component: vldoublie2
    },
    {
      path: '/nouveaucode2',
      name: 'nouveaucode2',
      component: nouveaucode2
    },
    {
      path: '/mdpoublier3',
      name: 'mdpoublier3',
      component: mdpoublier3
    },
    {
      path: '/vldoublie3',
      name: 'vldoublie3',
      component: vldoublie3
    },
    {
      path: '/nouveaucode3',
      name: 'nouveaucode3',
      component: nouveaucode3
    },
    {
      path: '/adminGARAGE',
      name: 'adminGARAGE',
      component: adminGARAGE
    },
    {
      path: '/modificationadmin',
      name: 'modificationadmin',
      component: modificationadmin
    },
    {
      path: '/adminMECANICIEN',
      name: 'adminMECANICIEN',
      component: adminMECANICIEN
    },
    {
      path: '/adminCLIENT',
      name: 'adminCLIENT',
      component: adminCLIENT
    },
    {
      path: '/GARAGEshow',
      name: 'GARAGEshow',
      component: GARAGEshow
    },
    {
      path: '/Ajoutervoiture',
      name: 'Ajoutervoiture',
      component: Ajoutervoiture
    },
    {
      path: '/urgencepage',
      name: 'urgencepage',
      component: urgencepage
    },
    {
      path: '/modificationmecanicien',
      name: 'modificationmecanicien',
      component: modificationmecanicien
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
