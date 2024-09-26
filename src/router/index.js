import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

import EstatesView from "@/views/Estates/EstatesView.vue";
import EstateDetails from "@/views/Estates/EstateDetails.vue";

// Admin
// Home
import AdminHome from "@/views/DashBoards/AdminDashboard/AdminHome.vue";
//
// Users
import AdminUsers from "@/views/DashBoards/AdminDashboard/Users/AdminUsers.vue";
//
// Companies
// All companies
import AdminCompanies from "@/views/DashBoards/AdminDashboard/Companies/AdminCompanies.vue";
//
// Requests
import AdminRequests from "@/views/DashBoards/AdminDashboard/Companies/AdminRequests.vue";
//
//
// Citys
// All citys
import AdminCitys from "@/views/DashBoards/AdminDashboard/Citys/AdminCitys.vue";
//
// Add City
import AddCity from "@/views/DashBoards/AdminDashboard/Citys/AddCity.vue";
//
// Edit city
import EditCity from "@/views/DashBoards/AdminDashboard/Citys/EditCity.vue";
//
// Places
// Add Places
import AddPlaces from "@/views/DashBoards/AdminDashboard/Citys/Places/AddPlaces.vue";
//
// Add Places
import EditPlace from "@/views/DashBoards/AdminDashboard/Citys/Places/EditPlace.vue";
//
//
//
// Estates
import AdminReal from "@/views/DashBoards/AdminDashboard/RealEstates/AdminReal.vue";
//
//

// Company
// Home
import CompanyHome from "@/views/DashBoards/CompanyDashboard/CompanyHome.vue";
//
// Agents
// Home
import CompanyAgents from "@/views/DashBoards/CompanyDashboard/Agents/CompanyAgents.vue";
//
// Add Agent
import AddAgent from "@/views/DashBoards/CompanyDashboard/Agents/AddAgent.vue";
//
//
// Real estates
// Home
import CompanyRealestates from "@/views/DashBoards/CompanyDashboard/Estates/CompanyRealestate.vue";
//
// Add real
import CompanyAddestate from "@/views/DashBoards/CompanyDashboard/Estates/CompanyAddestate.vue";
//
//
//

// Agent
// Home
import AgentHome from "@/views/DashBoards/AgentDashboard/AgentHome.vue";
// Real estates
import AgentRealestate from "@/views/DashBoards/AgentDashboard/Estates/AgentRealestate.vue";
// Add estate
import AgentAddestate from "@/views/DashBoards/AgentDashboard/Estates/AgentAddestate.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },

  {
    path: "/real-estates",
    name: "EstatesView",
    component: EstatesView,
  },

  {
    path: "/estate",
    name: "EstateDetails",
    component: EstateDetails,
  },

  // Admin
  // Home
  {
    path: "/admin-home",
    name: "AdminHome",
    component: AdminHome,
  },
  //
  // Users
  {
    path: "/admin-users",
    name: "AdminUsers",
    component: AdminUsers,
  },
  //
  // Companies
  // All companies
  {
    path: "/admin-companies",
    name: "AdminCompanies",
    component: AdminCompanies,
  },
  //
  // Requests
  {
    path: "/admin-companies-requests",
    name: "AdminRequests",
    component: AdminRequests,
  },
  //
  //
  // Citys
  // All citys
  {
    path: "/admin-citys",
    name: "AdminCitys",
    component: AdminCitys,
  },
  //
  // Add city
  {
    path: "/admin-add-city",
    name: "AddCity",
    component: AddCity,
  },
  //
  // Edit city
  {
    path: "/admin-edit-city",
    name: "EditCity",
    component: EditCity,
  },
  //
  // Places
  // Add Places
  {
    path: "/admin-add-places",
    name: "AddPlaces",
    component: AddPlaces,
  },
  //
  // Add Places
  {
    path: "/admin-edit-place",
    name: "EditPlace",
    component: EditPlace,
  },
  //
  //
  //
  // Estates
  {
    path: "/admin-estates",
    name: "AdminReal",
    component: AdminReal,
  },
  //
  //

  // Company
  // Home
  {
    path: "/company-home",
    name: "CompanyHome",
    component: CompanyHome,
  },
  //
  // Agents
  {
    path: "/company-agents",
    name: "CompanyAgents",
    component: CompanyAgents,
  },
  //
  // add agent
  {
    path: "/company-add-agent",
    name: "AddAgent",
    component: AddAgent,
  },
  //
  // real estates
  {
    path: "/company-estates",
    name: "CompanyRealestates",
    component: CompanyRealestates,
  },
  //
  // add real estates
  {
    path: "/company-add-realestate",
    name: "CompanyAddestate",
    component: CompanyAddestate,
  },
  //
  //

  // Agent
  // Home
  {
    path: "/agent-home",
    name: "AgentHome",
    component: AgentHome,
  },
  // Estates
  {
    path: "/agent-estates",
    name: "AgentRealestate",
    component: AgentRealestate,
  },
  // add real estates
  {
    path: "/Agent-add-realestate",
    name: "AgentAddestate",
    component: AgentAddestate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
