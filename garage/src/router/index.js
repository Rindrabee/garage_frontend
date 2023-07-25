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
import Listegarage from '../views/Listegarage.vue'
import Listegarage2 from '../views/Listegarage2.vue'
import adminMECANICIEN from '../views/adminMECANICIEN.vue'
import urgencepage from '../views/urgencepage.vue'
import modificationmecanicien from '../views/modificationmecanicien.vue'
import modificationgarage from '../views/modificationgarage.vue'
import conseilpage from '../views/conseilpage.vue'
import conseilaccident from '../views/conseilaccident.vue'
import showadmingarage from '../views/showadmingarage.vue'
import showadminmecanicien from '../views/showadminmecanicien.vue'
import showadminclient from '../views/showadminclient.vue'
import rendezvous from '../views/rendezvous.vue'
import showurgence from '../views/showurgence.vue'
import garageurgence from '../views/garageurgence.vue'
import showurgence2 from '../views/showurgence2.vue'
import garageMECANICIEN from '../views/garageMECANICIEN.vue'
import showgaragemeca from '../views/showgaragemeca.vue'
import showurgence3 from '../views/showurgence3.vue'
import garageclient from '../views/garageclient.vue'
import showgaragecli from '../views/showgaragecli.vue'


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
      component: garagepage,
      meta: {
        middleware: auth
      }
      
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
      component: adminGARAGE,
      meta: {
        middleware: auth2
      }
    },
    {
      path: '/modificationadmin',
      name: 'modificationadmin',
      component: modificationadmin
    },
    {
      path: '/adminMECANICIEN',
      name: 'adminMECANICIEN',
      component: adminMECANICIEN,
      meta: {
        middleware: auth2
      }
    },
    {
      path: '/adminCLIENT',
      name: 'adminCLIENT',
      component: adminCLIENT,
      meta: {
        middleware: auth2
      }
    },
    {
      path: '/GARAGEshow',
      name: 'GARAGEshow',
      component: GARAGEshow
    },
    {
      path: '/Listegarage',
      name: 'Listegarage',
      component: Listegarage,
      meta: {
        middleware: auth
      }
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
    {
      path: '/modificationgarage',
      name: 'modificationgarage',
      component: modificationgarage
    },
    {
      path: '/conseilpage',
      name: 'conseilpage',
      component: conseilpage
    },
    {
      path: '/conseilaccident',
      name: 'conseilaccident',
      component: conseilaccident
    },
    {
      path: '/showadmingarage',
      name: 'showadmingarage',
      component: showadmingarage
    },
    {
      path: '/showadminmecanicien',
      name: 'showadminmecanicien',
      component: showadminmecanicien
    },
    {
      path: '/showadminclient',
      name: 'showadminclient',
      component: showadminclient
    },
    {
      path: '/Listegarage2',
      name: 'Listegarage2',
      component: Listegarage2
    },
    {
      path: '/rendezvous',
      name: 'rendezvous',
      component: rendezvous
    },
    {
      path: '/showurgence',
      name: 'showurgence',
      component: showurgence
    },
    {
      path: '/garageurgence',
      name: 'garageurgence',
      component: garageurgence
    },
    {
      path: '/showurgence2',
      name: 'showurgence2',
      component: showurgence2
    },
    {
      path: '/garageMECANICIEN',
      name: 'garageMECANICIEN',
      component: garageMECANICIEN
    },
    {
      path: '/showgaragemeca',
      name: 'showgaragemeca',
      component: showgaragemeca
    },
    {
      path: '/showurgence3',
      name: 'showurgence3',
      component: showurgence3
    },
    {
      path: '/garageclient',
      name: 'garageclient',
      component: garageclient
    },
    {
      path: '/showgaragecli',
      name: 'showgaragecli',
      component: showgaragecli
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
