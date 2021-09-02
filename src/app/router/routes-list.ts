import CompLogin from "app/pages/auth/login";
import CompRegister from "app/pages/auth/register";
import CompForgot from "app/pages/auth/forgot";
import Career from "app/pages/career";
import CareerDetail from "app/pages/career/detail";
import CareerApply from "app/pages/career/apply";
import AdminDashboard from "app/pages/admin/dashboard";
import AdminWelcome from "app/pages/admin/welcome";
import VacancyAdmin from "app/pages/admin/vacancys/dashboard";
import CreateVacancy from "app/pages/admin/vacancys/create";

interface IRoutes {
  exact?: boolean;
  path: string;
  component: any;
}

const guestroutes: IRoutes[] = [
  { path: "/ga-login", component: CompLogin },
  { path: "/ga-register", component: CompRegister },
  { path: "/ga-forgot", component: CompForgot },
];

const userroutes: IRoutes[] = [
  { path: "/", component: Career, exact: true },
  { path: "/career/detail", component: CareerDetail },
  { path: "/career/apply", component: CareerApply },
];

const adminroutes: IRoutes[] = [
  { path: "/admin/welcome", component: AdminWelcome },
  { path: "/admin/dashboard", component: AdminDashboard },
  { path: "/admin/vacancy", component: VacancyAdmin, exact: true },
  { path: "/admin/vacancy/create", component: CreateVacancy },
];

export { adminroutes, guestroutes, userroutes };
