import Hero from "@/pages/home/Hero";
import Process from "@/pages/home/Process";
import Services from "./Services";
import Feature from "./Feature";
import SearchBusiness from "./SearchBusiness";
import BusinessSignup from "./BusinessSignup";
import { useAppSelector } from "@/redux/hooks";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "@/redux/features/auth/authSlice";
import LoggedServices from "./AfterLoggedIn/LoggedServices";
import MyJobs from "./AfterLoggedIn/MyJobs";
import PrevUsedCompany from "./AfterLoggedIn/PrevUsedCompany";
import { useGetUserProfileQuery } from "@/redux/features/users/user.category.api";
import { useSelector } from "react-redux";

export default function Home() {
  const token = useSelector(selectCurrentToken);
  // GET PROFILE
  const { data: loggedInUser, isLoading: isUserProfileLoading } =
    useGetUserProfileQuery(undefined, {
      skip: !token,
    });
  console.log({ loggedInUser });
  return (
    <>
      {loggedInUser ? (
        <>
          <MyJobs />
          {/* <Hero /> */}
          {/* <Process /> */}
          <PrevUsedCompany />
          <LoggedServices />
          <Feature />
          <SearchBusiness />
          <BusinessSignup />
        </>
      ) : (
        <>
          <Hero />
          <Process />
          <Services />
          <Feature />
          <SearchBusiness />
          <BusinessSignup />
        </>
      )}
    </>
  );
}
