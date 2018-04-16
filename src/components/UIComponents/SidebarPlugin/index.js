/* eslint-disable */
import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: "Dashboard",
      icon: "ti-panel",
      path: "/admin/dashboard"
    },
    {
      name: "Pending",
      icon: "ti-time",
      path: "/admin/pending"
    },
    {
      name: "Appointment",
      icon: "ti-calendar",
      path: "/admin/appointment"
    },
    {
      name: "Information",
      icon: "ti-pencil-alt",
      path: "/admin/information"
    },
    {
      name: "Schedule",
      icon: "ti-write",
      path: "/admin/schedule"
    },
    {
      name: "Time Slots",
      icon: "ti-pin-alt",
      path: "/admin/timeslots"
    }
  ],
  displaySidebar(value) {
    this.showSidebar = value;
  }
};

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
