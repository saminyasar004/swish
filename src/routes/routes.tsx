// src/routes.tsx
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
import GraphicsPage from "@/pages/ServiceProvider/companyProfile/GraphicsPage";
import NotificationsPage from "@/pages/ServiceProvider/myBusiness/NotificationsPage";
import EmployeesPage from "@/pages/ServiceProvider/myBusiness/EmployeesPage";
import ManageEmployeesPage from "@/pages/ServiceProvider/myBusiness/ManageEmployeesPage";
import HomePage from "@/pages/ServiceProvider/ServiceProviderMessage/HomePage";
import JobSetting from "@/pages/ServiceProvider/myBusiness/jobSetting/JobSetting";
import MyBids from "@/pages/ServiceProvider/myBusiness/myBids/MyBids";
import ProfileLayout from "@/components/common/ProfileLayout";
import StatusPage from "@/components/common/StatusPage";
import FindCompany from "@/pages/loggedInUserFindCompany/FindCompany";
import FindCompanyResult from "@/pages/loggedInUserFindCompany/FindCompanyResult";
import CompanyProfileHome from "@/pages/ServiceProvider/companyProfile/CompanyProfileHome";
import RequestQuoteCategory from "@/pages/requestAQuoteFromCompany/RequestQuoteCategory";
import LayoutRegisterCompany from "@/pages/registerCompany/LayoutRegisterCompany";
import HelpCenter from "@/pages/helpCenterArticle/HelpCenter";
import HowSwishWorks from "@/pages/helpCenterArticle/HowSwishWorks";
import HowChooseRightCompany from "@/pages/helpCenterArticle/HowChooseRightCompany";
import ProblemResolution from "@/pages/helpCenterArticle/ProblemResolution";
import ReviewsOnSwishma from "@/pages/helpCenterArticle/ReviewsOnSwishma";
import WriteGoodJobDescription from "@/pages/helpCenterArticle/WriteGoodJobDescription";
import HelpCenterFaq from "@/pages/helpCenterArticle/HelpCenterFaq";
import MessagePageUpdated from "@/pages/home/Messages/MessagePageUpdated";
import BuisinessHome from "@/pages/ServiceProvider/myBusiness/BusinessHome";
import BusinessHome from "@/pages/ServiceProvider/myBusiness/BusinessHome";
import CompanyProfileFromUser from "@/pages/companyPorfile/CompanyProfileFromUser";
import SwitchAccount from "@/pages/ServiceProvider/myBusiness/jobSetting/SwitchAccount";
import HelpGuidSetting from "@/pages/ServiceProvider/myBusiness/jobSetting/helpGuid/HelpGuidSetting";
import FilterSavedSearch from "@/pages/ServiceProvider/myBusiness/jobSetting/helpGuid/FilterSavedSearch";
import PrivacyPolicy from "@/pages/PrivacyTerm/PrivacyPolicy";
import TermsConditions from "@/pages/PrivacyTerm/TermsConditions";
import { SeeTheJob } from "@/pages/home/Messages/SeeTheJob";
import { Evaluation } from "@/pages/home/Messages/Evaluation";
import { CreateAppointment } from "@/pages/home/Messages/TheJob/CreateAppointment";

export interface Route {
  path: string;
  element: JSX.Element;
  layout?: JSX.Element;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
        children: [
          { index: true, element: <Home /> },
          { path: "categories", element: <Categories /> },
          { path: "post-job", element: <PostJob /> },
          { path: "post-job/create", element: <PostJob /> },
          { path: "post-job/complete", element: <PostJob /> },
          { path: "my-post", element: <MyPost /> },
          { path: "contact", element: <Contact /> },
          { path: "help-center", element: <HelpCenter /> },
          {
            path: "articles/help-center/how-swish-works",
            element: <HowSwishWorks />,
          },
          {
            path: "articles/help-center/choose-company",
            element: <HowChooseRightCompany />,
          },
          {
            path: "articles/help-center/problem-resolution",
            element: <ProblemResolution />,
          },
          {
            path: "articles/help-center/reviews-swishma",
            element: <ReviewsOnSwishma />,
          },
          {
            path: "articles/help-center/write-good-job-description",
            element: <WriteGoodJobDescription />,
          },
          { path: "articles/help-center/faq", element: <HelpCenterFaq /> },
          { path: "trades", element: <Trades /> },
          { path: "trades/electrician", element: <Electrician /> },
          { path: "trades/plumber", element: <Plumber /> },
          { path: "trades/painter", element: <Painter /> },
          { path: "trades/locksmith", element: <Locksmith /> },
          { path: "trades/handyman", element: <Handyman /> },
          { path: "trades/air-conditioning", element: <SolarHeater /> },
          {
            path: "exterior-garden/solar-heater-ac-installation",
            element: <SolarHeater />,
          },
          {
            path: "exterior-garden/masonry-concrete-work",
            element: <MasonryConcrete />,
          },
          { path: "exterior-garden/window-doors", element: <WindowDoors /> },
          { path: "indoor-renovation/floor-laying", element: <FloorLaying /> },
          {
            path: "exterior-garden/garden-landscaping",
            element: <GardenLandscaping />,
          },
          {
            path: "indoor-renovation/full-renovation-buildout",
            element: <Renovation />,
          },
          {
            path: "indoor-renovation/renovating-bathrooms",
            element: <Bathrooms />,
          },
          { path: "company-search", element: <FindCompany /> },
          { path: "company-search/results", element: <FindCompanyResult /> },
          { path: "switch-account", element: <SwitchAccount /> },
          { path: "privacy-policy", element: <PrivacyPolicy /> },
          { path: "terms-and-conditions", element: <TermsConditions /> },
        ],
      },
    ],
  },
  {
    path: "/profile",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProfileLayout>
            <Profile />
          </ProfileLayout>
        ),
      },
      {
        path: "login-security",
        element: (
          <ProfileLayout>
            <Profile />
          </ProfileLayout>
        ),
      },
      {
        path: "notifications",
        element: (
          <ProfileLayout>
            <Profile />
          </ProfileLayout>
        ),
      },
      {
        path: "customer-service",
        element: (
          <ProfileLayout>
            <Profile />
          </ProfileLayout>
        ),
      },
      { path: "message/inbox/:id", element: <MessagePageUpdated /> },
      {
        path: "message/job/:id",
        element: <MessagePageUpdated />,
        children: [
          { index: true, element: <SeeTheJob /> },
          { path: "job-details", element: <SeeTheJob /> },
          { path: "appointment", element: <CreateAppointment /> },
          { path: "evaluation", element: <Evaluation /> },
        ],
      },
      { path: "message/job/:id/job-details", element: <SeeTheJob /> },
      { path: "company-search/:id", element: <CompanyProfileFromUser /> },
      { path: "request-quote/:id", element: <RequestQuoteCategory /> },
    ],
  },
  {
    path: "/provider",
    element: <Layout />,
    children: [
      { index: true, element: <ServiceHome /> }, // Use index for default route
      { path: "message", element: <HomePage /> },
      { path: "my-business", element: <BusinessHome /> },
      { path: "my-business/profile", element: <CompanyProfileHome /> },
      {
        path: "my-business/profile/company-info-update",
        element: <CompanyProfileHome />,
      },
      { path: "my-business/profile/graphics", element: <CompanyProfileHome /> },
      { path: "my-business/profile/pictures", element: <CompanyProfileHome /> },
      {
        path: "my-business/profile/notifications",
        element: <NotificationsPage />,
      },
      { path: "my-business/profile/employees", element: <EmployeesPage /> },
      {
        path: "my-business/employees/manage",
        element: <ManageEmployeesPage />,
      },
      { path: "my-business/job-setting/company-info", element: <JobSetting /> },
      {
        path: "my-business/job-setting/notifications",
        element: <JobSetting />,
      },
      { path: "my-business/job-setting/job-search", element: <JobSetting /> },
      {
        path: "my-business/job-setting/customer-service",
        element: <JobSetting />,
      },
      { path: "my-business/job-setting/help-guide", element: <JobSetting /> },
      { path: "my-business/job-setting/receipts", element: <JobSetting /> },
      {
        path: "my-business/job-setting/help-guide/filters",
        element: <JobSetting />,
      },
      {
        path: "my-business/job-setting/help-guide/how-clips-work",
        element: <JobSetting />,
      },
      {
        path: "my-business/job-setting/help-guide/answers-win-jobs",
        element: <JobSetting />,
      },
      {
        path: "my-business/job-setting/help-guide/work-types-areas",
        element: <JobSetting />,
      },
      {
        path: "my-business/job-setting/help-guide/cut-free-jobs",
        element: <JobSetting />,
      },
      {
        path: "my-business/job-setting/help-guide/standard-response",
        element: <JobSetting />,
      },
      {
        path: "my-business/job-setting/help-guide/profile-page",
        element: <JobSetting />,
      },
      {
        path: "my-business/job-setting/help-guide/get-jobs-directly",
        element: <JobSetting />,
      },
      {
        path: "my-business/job-setting/help-guide/evaluations",
        element: <JobSetting />,
      },
      { path: "my-business/my-bids", element: <MyBids /> },
    ],
  },
  {
    path: "/register-company",
    element: <Layout />,
    children: [
      { path: "", element: <RegisterCompany /> }, // Use empty string for default
    ],
  },
  {
    path: "/register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Layout>
        <ForgotPassword />
      </Layout>
    ),
  },
  {
    path: "/verify-otp",
    element: (
      <Layout>
        <VerifyOtp />
      </Layout>
    ),
  },
  {
    path: "/reset-password",
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
  },
  {
    path: "*",
    element: (
      <Layout>
        <StatusPage />
      </Layout>
    ),
  },
]);
