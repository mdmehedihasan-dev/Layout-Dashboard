import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/auth/SignInPage";
import ForgetPassword from "../pages/auth/ForgetPassword";
import VerificationCode from "../pages/auth/VerificationCode";
import ResetPassword from "../pages/auth/ResetPassword";
import MainLayout from "../layout/MainLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
// import ProfilePage from "../pages/profilePage/ProfilePage";
import AboutUs from "../pages/settings/AboutUs";
import Settings from "../pages/settings/Settings";
import PrivacyPolicy from "../pages/settings/PrivacyPolicy";
import TermsCondition from "../pages/settings/TermsCondition";
// import FAQ from "../pages/settings/FAQ";
import UserDetails from "../pages/userDetails/UserDetails";
import ProfilePage from "../pages/profile/ProfilePage";
import VideoList from "../pages/videoList/VideoList";
import FAQ from "../pages/settings/Faq";
import Services from "../pages/Services/Services";
import Roles from "../pages/Roles/Roles";
import Chat from "../pages/Chat/Chat";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/verification-code",
    element: <VerificationCode />,
  },
  {
    path: "/new-password",
    element: <ResetPassword />,
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/videoList",
        element: <VideoList />,
      },

      {
        path: "/user-details",
        element: <UserDetails />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/roles",
        element: <Roles />,
      },

      // settings
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/setting/about-us",
        element: <AboutUs />,
      },
      {
        path: "/setting/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/setting/terms-and-condition",
        element: <TermsCondition />,
      },
      {
        path: "/setting/faq",
        element: <FAQ />,
      },

      //  navbar profile

      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
