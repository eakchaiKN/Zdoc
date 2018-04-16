import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Dashboard from 'src/components/Dashboard/Views/Dashboard.vue'
import Pending from 'src/components/Dashboard/Views/Pending.vue'
import Appointment from 'src/components/Dashboard/Views/Appointment.vue'
import Information from 'src/components/Dashboard/Views/Information.vue'
import Schedule from 'src/components/Dashboard/Views/Schedule.vue'
import TimeSlots from 'src/components/Dashboard/Views/TimeSlots.vue'

import Test from 'src/components/Dashboard/Views/Test.vue'

const routes = [
  {
    path: '/',
    component: Dashboard,
    redirect: '/admin/dashboard'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/stats',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'pending',
        name: 'pending',
        component: Pending
      },
      {
        path: 'appointment',
        name: 'appointment',
        component: Appointment
      },
      {
        path: 'information',
        name: 'information',
        component: Information
      },
      {
        path: 'schedule',
        name: 'schedule',
        component: Schedule
      },
      {
        path: 'timeslots',
        name: 'timeslots',
        component: TimeSlots
      },
      {
        path: 'test',
        name: 'test',
        component: Test
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
