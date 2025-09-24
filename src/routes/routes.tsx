import Main from "@/components/common/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/Home";
import Layout from "@/components/common/Layout";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ResetPassword from "@/pages/auth/ResetPassword";
import VerifyOtp from "@/pages/auth/VerifyOtp";
import Categories from "@/pages/categories/Categories";
import Contact from "@/pages/contact";
import MyPost from "@/pages/post/MyPost";
import PostJob from "@/pages/post/PostJob";
import GardenLandscaping from "@/pages/services/exterior-garden/GardenLandscaping";
import MasonryConcrete from "@/pages/services/exterior-garden/MasonryConcrete";
import Renovation from "@/pages/services/renovation/Renovation";
import SolarHeater from "@/pages/services/exterior-garden/SolarHeater";
import WindowDoors from "@/pages/services/exterior-garden/WindowDoors";
import Trades from "@/pages/services/trades";
import Electrician from "@/pages/services/trades/Electrician";
import Handyman from "@/pages/services/trades/Handyman";
import Locksmith from "@/pages/services/trades/Locksmith";
import Painter from "@/pages/services/trades/Painter";
import Plumber from "@/pages/services/trades/Plumber";
import Bathrooms from "@/pages/services/renovation/Bathrooms";
import FloorLaying from "@/pages/services/renovation/FloorLaying";
import Profile from "@/pages/profile/Profile";
import RegisterCompany from "@/pages/registerCompany/RegisterCompany";
import ServiceLayout from "@/components/common/ServiceLayout";
import Working from "@/pages/ServiceProvider/serviceHome/Working";
import ServiceHome from "@/pages/ServiceProvider/serviceHome/ServiceHome";
import BusinessProfile from "@/pages/ServiceProvider/myBusiness/BusinessProfile";
import ServiceLayoutMain from "@/components/common/ServiceLayoutMain";
import MessagePage from "@/pages/ServiceProvider/messageComponentNotInUse/Message/MessagePage";
import MyBusinessPage from "@/pages/ServiceProvider/myBusiness/MyBusinessPage";
import CompanyPage from "@/pages/ServiceProvider/myBusiness/CompanyPage";
import GraphicsPage from "@/pages/ServiceProvider/myBusiness/GraphicsPage";
import NotificationsPage from "@/pages/ServiceProvider/myBusiness/NotificationsPage";
import EmployeesPage from "@/pages/ServiceProvider/myBusiness/EmployeesPage";
import ManageEmployeesPage from "@/pages/ServiceProvider/myBusiness/ManageEmployeesPage";
import HomePage from "@/pages/ServiceProvider/MessageUpdate/HomePage";
import JobSetting from "@/pages/ServiceProvider/myBusiness/jobSetting/JobSetting";
import MyBids from "@/pages/ServiceProvider/myBusiness/myBids/MyBids";
import ProfileLayout from "@/components/common/ProfileLayout";
import StatusPage from "@/components/common/StatusPage";
import FindCompany from "@/pages/loggedInUserFindCompany/FindCompany";
import FindCompanyResult from "@/pages/loggedInUserFindCompany/FindCompanyResult";
import CompanyProfileHome from "@/pages/companyPorfile/CompanyProfileHome";
import RequestQuoteCategory from "@/pages/requestAQuoteFromCompany/RequestQuoteCategory";
import LayoutRegisterCompany from "@/pages/registerCompany/LayoutRegisterCompany";
import HelpCenter from "@/pages/helpCenterArticle/HelpCenter";
import HowSwishWorks from "@/pages/helpCenterArticle/HowSwishWorks";
import HowChooseRightCompany from "@/pages/helpCenterArticle/HowChooseRightCompany";
import ProblemResolution from "@/pages/helpCenterArticle/ProblemResolution";
import reviewsOnSwishma from "@/pages/helpCenterArticle/ReviewsOnSwishma";
import WriteGoodJobDescription from "@/pages/helpCenterArticle/WriteGoodJobDescription";
import HelpCenterFaq from "@/pages/helpCenterArticle/HelpCenterFaq";
import MessagePageUpdated from "@/pages/home/Messages/MessagePageUpdated";
import ReviewsOnSwishma from "@/pages/helpCenterArticle/ReviewsOnSwishma";
import BuisinessHome from "@/pages/ServiceProvider/myBusiness/BusinessHome";
import BusinessHome from "@/pages/ServiceProvider/myBusiness/BusinessHome";

export interface Route {
  path: string;
  element: JSX.Element;
  layout?: JSX.Element;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },

      {
        path: "/my-post",
        element: <MyPost />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/help-center",
        element: <HelpCenter />,
      },
      {
        path: "/articles/help-center/how-swish-works",
        element: <HowSwishWorks />,
      },
      {
        path: "/articles/help-center/choose-company",
        element: <HowChooseRightCompany />,
      },

      {
        path: "/articles/help-center/problem-resolution",
        element: <ProblemResolution />,
      },
      {
        path: "/articles/help-center/reviews-swishma",
        element: <ReviewsOnSwishma />,
      },
      {
        path: "/articles/help-center/write-good-job-description",
        element: <WriteGoodJobDescription />,
      },
      {
        path: "/articles/help-center/faq",
        element: <HelpCenterFaq />,
      },

      // trades
      {
        path: "/trades",
        element: <Trades />,
      },
      {
        path: "/trades/electrician",
        element: <Electrician />,
      },
      {
        path: "/trades/plumber",
        element: <Plumber />,
      },

      {
        path: "/trades/painter",
        element: <Painter />,
      },
      {
        path: "/trades/locksmith",
        element: <Locksmith />,
      },
      {
        path: "/trades/handyman",
        element: <Handyman />,
      },
      {
        path: "/trades/air-conditioning",
        element: <SolarHeater />,
      },

      // exterior-garden
      {
        path: "/exterior-garden/solar-heater-ac-installation",
        element: <SolarHeater />,
      },
      {
        path: "/exterior-garden/masonry-concrete-work",
        element: <MasonryConcrete />,
      },
      {
        path: "/exterior-garden/window-doors",
        element: <WindowDoors />,
      },
      {
        path: "/indoor-renovation/floor-laying",
        element: <FloorLaying />,
      },
      {
        path: "/exterior-garden/garden-landscaping",
        element: <GardenLandscaping />,
      },

      // indoor-renovation
      {
        path: "/indoor-renovation/full-renovation-buildout",
        element: <Renovation />,
      },
      {
        path: "/indoor-renovation/renovating-bathrooms",
        element: <Bathrooms />,
      },

      // AFTER LOGIN
      {
        path: "/company-search",
        element: <FindCompany />,
      },
      {
        path: "/company-search/results",
        element: <FindCompanyResult />,
      },
    ],
  },

  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "profile/login-security",
        element: <Profile />,
      },
      {
        path: "profile/notifications",
        element: <Profile />,
      },
      {
        path: "profile/customer-service",
        element: <Profile />,
      },

      // MESSAGE
      {
        path: "message/:id",
        element: <MessagePageUpdated />,
      },

      // COMPANY PROFILE REGISTER COMPANY
      {
        path: "company-search/:id",
        element: <CompanyProfileHome />,
      },
      {
        path: "request-quote/:id",
        element: <RequestQuoteCategory />,
      },
    ],
  },

  // PROVIDER
  {
    path: "/provider",
    element: <ServiceLayout />,
    children: [
      {
        path: "/provider",
        element: <ServiceHome />,
      },
      {
        path: "message",
        element: <HomePage />,
      },
      // {
      //   path: "/provider/message",
      //   element: MessagePage,
      //>/
      // },
      {
        path: "/provider/my-business",
        element: <BusinessHome />,
      },
      {
        path: "/provider/my-business/profile",
        element: <BusinessProfile />,
      },
      {
        path: "/provider/my-business/profile/company",
        element: <CompanyPage />, // if using common layout
      },
      {
        path: "/provider/my-business/profile/graphics",
        element: <GraphicsPage />,
      },
      {
        path: "/provider/my-business/profile/notifications",
        element: <NotificationsPage />,
      },
      {
        path: "/provider/my-business/profile/employees",
        element: <EmployeesPage />,
      },
      {
        path: "/provider/my-business/employees/manage",
        element: <ManageEmployeesPage />,
      },

      //job setting
      {
        path: "/provider/my-business/job-setting",
        element: <JobSetting />,
      },
      //my bids
      {
        path: "/provider/my-business/my-bids",
        element: <MyBids />,
      },
    ],
  },

  {
    path: "/register-company",
    element: <LayoutRegisterCompany />,
    children: [
      {
        path: "/register-company",
        element: <RegisterCompany />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <StatusPage />,
  },
]);
