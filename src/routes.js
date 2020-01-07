/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Users from "views/Users/Users.js";
import Alerts from "views/Alerts/Alerts.js";
import Booking from "views/Booking/Booking.js";
import Doormans from "views/Doormans/Doormans.js";
import Maps from "views/Maps/Maps.js";
import EstateAgents from "views/EstateAgents/EstateAgents.js";
import Doubts from "views/Doubts/Doubts.js";
import Properties from "views/Properties/Properties.js";
import Settings from "views/Settings/Settings.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
// // core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/properties",
    name: "Propriedades",
    rtlName: "لوحة القيادة",
    icon: "home",
    component: Properties,
    layout: "/admin"
  },
  {
    path: "/booking",
    name: "Agendamentos",
    rtlName: "لوحة القيادة",
    icon: "event",
    component: Booking,
    layout: "/admin"
  },
  {
    path: "/alerts",
    name: "Alertas",
    rtlName: "لوحة القيادة",
    icon: "report",
    component: Alerts,
    layout: "/admin"
  },
  {
    path: "/doubts",
    name: "Dúvidas",
    rtlName: "لوحة القيادة",
    icon: "help",
    component: Doubts,
    layout: "/admin"
  },
  {
    path: "/estate-agents",
    name: "Corretores",
    rtlName: "قائمة الجدول",
    icon: "work",
    component: EstateAgents,
    layout: "/admin"
  },
  {
    path: "/doorman",
    name: "Porteiros Parceiros",
    rtlName: "لوحة القيادة",
    icon: "perm_contact_calendar",
    component: Doormans,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Usuários",
    rtlName: "قائمة الجدول",
    icon: "group",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Localização",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/settings",
    name: "Configurações",
    rtlName: "خرائط",
    icon: "settings_applications",
    component: Settings,
    layout: "/admin"
  }
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: Person,
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "content_paste",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: LibraryBooks,
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notificações",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin"
  // }
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Upgrade To PRO",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
