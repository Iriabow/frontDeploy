import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Index.vue'
import ArtistsList from './views/ArtistsList.vue'
import OffersList from './views/OffersList.vue'
import DateSelection from './views/DateSelection.vue'
import TimeSelection from './views/TimeSelection.vue'
import OfferDetails from './views/OfferDetails.vue'
import AddressInput from './views/AddressInput.vue'
import EventInput from './views/EventInput.vue'
import TypeOfHiring from './views/TypeOfHiring.vue'
import PaymentSelector from './views/PaymentSelector.vue'
import Payment from './views/Payment.vue'
import AcceptedOffer from './views/AcceptedOffer.vue'
import Portfolio from './views/Portfolio.vue'
import SentOffer from './views/SentOffer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/home",
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },    
    {
      path: '/artist_search',
      name: 'artist_search',
      component: ArtistsList
    },
    {
      path: '/offers',
      name: 'offers',
      component: OffersList
    },
    {
      path: '/dateSelection',
      name: 'dateSelection',
      component: DateSelection
    },
    {
      path: '/timeSelection',
      name: 'timeSelection',
      component: TimeSelection
    },
    {
      path: '/offerDetails',
      name: 'offerDetails',
      component: OfferDetails
    },
    {
      path: '/addressInput',
      name: 'addressInput',
      component: AddressInput
    },
    {
      path: '/eventInput',
      name: 'eventInput',
      component: EventInput
    },
    {
      path: '/hiringType',
      name: 'hiringType',
      component: TypeOfHiring
    },
    {
      path: '/paymentSelector',
      name: 'paymentSelector',
      component: PaymentSelector
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/acceptedOffer',
      name: 'acceptedOffer',
      component: AcceptedOffer
    },
    {
      path: '/showPortfolio',
      name: 'showPortfolio',
      component: Portfolio
    },
    {
      path: '/sentOffer',
      name: 'sentOffer',
      component: SentOffer
    },

  ]
})
