import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ChatContainer from "../../home/Messages/ChatContainer";
import NoChatSelected from "../MessageUpdate/NoChatSelected";
import { ChatContainerInProvider } from "./ChatContainerInProvider";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import CompanyProfileHomeInMsg from "@/pages/companyPorfile/companyPorfileInMsg/CompanyProfileHomeInMsg";
import CompanyJobInProviderMessage from "./CompanyJobInProviderMessage";

const HomePage = () => {
  // const { selectedUser } = useChatStore();

  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(1);
  const [selectedProfilePage, setSelectedProfilePage] = useState(false);
  const [activeTab, setActiveTab] = useState("Inbox");

  // 🔄 Sync tab with URL
  useEffect(() => {
    if (location.pathname.includes("job")) {
      setActiveTab("The Job");
    } else {
      setActiveTab("Inbox");
    }
  }, [location.pathname]);

  // 🧭 When tab changes, navigate
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(
      tab === "Inbox"
        ? "/profile/message/inbox/1"
        : "/profile/message/job/1/job-details"
    );
  };

  // const selectedUser = {
  //   id: "2",
  //   fullName: "Jane Cooper",
  //   profilePic: "/avatar2.png",
  // };

  return (
    <div className="flex w-full h-screen overflow-hidden rounded-xl fixed justify-center items-center bg-[#F4F4F4]">
      <div className="flex h-[100%] rounded-lg overflow-hidden  container mx-auto w-full">
        <Sidebar
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          onSelectUser={setSelectedUser}
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />
        {/* {!selectedUser ? <NoChatSelected /> : <ChatContainer />} */}
        {/* {!selectedUser ? <NoChatSelected /> : <ChatContainerInProvider />} */}

        {!selectedUser ? (
          <NoChatSelected />
        ) : activeTab === "Inbox" ? (
          <ChatContainerInProvider
            selectedUser={selectedUser}
            setSelectedProfilePage={setSelectedProfilePage}
          />
        ) : (
          // <TheJobMessageTab />
          <Outlet />
        )}

        {selectedProfilePage && (
          // container mx-auto w-full
          <div className="flex h-[100%] rounded-lg overflow-hidden max-w-[23%] ">
            <CompanyJobInProviderMessage
              setSelectedProfilePage={setSelectedProfilePage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

// export function MessagePageUpdated() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(1);
//   const [selectedProfilePage, setSelectedProfilePage] = useState(false);
//   const [activeTab, setActiveTab] = useState("Inbox");

//   // 🔄 Sync tab with URL
//   useEffect(() => {
//     if (location.pathname.includes("job")) {
//       setActiveTab("The Job");
//     } else {
//       setActiveTab("Inbox");
//     }
//   }, [location.pathname]);

//   // 🧭 When tab changes, navigate
//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     navigate(
//       tab === "Inbox"
//         ? "/profile/message/inbox/1"
//         : "/profile/message/job/1/job-details"
//     );
//   };

//   return (
//     <div className="flex w-full h-screen overflow-hidden rounded-xl fixed justify-center items-center">
//       {/* Left Sidebar */}
//       <div className="flex h-[100%] rounded-lg overflow-hidden  container mx-auto w-full">
//         <MessageSidebar
//           onClose={() => setIsOpen(false)}
//           isOpen={isOpen}
//           onSelectUser={setSelectedUser}
//           activeTab={activeTab}
//           setActiveTab={handleTabChange}
//         />

//         {!selectedUser ? (
//           <NoChatSelected />
//         ) : activeTab === "Inbox" ? (
//           <ChatContainer
//             selectedUser={selectedUser}
//             setSelectedProfilePage={setSelectedProfilePage}
//           />
//         ) : (
//           // <TheJobMessageTab />
//           <Outlet />
//         )}
//         {selectedProfilePage && (
//           // container mx-auto w-full
//           <div className="flex h-[100%] rounded-lg overflow-hidden max-w-[23%] ">
//             <CompanyProfileHomeInMsg
//               setSelectedProfilePage={setSelectedProfilePage}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// export default function MessagePageUpdated() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(1);
//   const [selectedProfilePage, setSelectedProfilePage] = useState(false);
//   const [activeTab, setActiveTab] = useState("Inbox");

//   // 🔄 Sync tab with URL
//   useEffect(() => {
//     if (location.pathname.includes("job")) {
//       setActiveTab("The Job");
//     } else {
//       setActiveTab("Inbox");
//     }
//   }, [location.pathname]);

//   // 🧭 When tab changes, navigate
//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     navigate(
//       tab === "Inbox"
//         ? "/profile/message/inbox/1"
//         : "/profile/message/job/1/job-details"
//     );
//   };

//   return (
//     <div className="flex w-full h-screen overflow-hidden rounded-xl fixed justify-center items-center">
//       {/* Left Sidebar */}
//       <div className="flex h-[100%] rounded-lg overflow-hidden  container mx-auto w-full">
//         <MessageSidebar
//           onClose={() => setIsOpen(false)}
//           isOpen={isOpen}
//           onSelectUser={setSelectedUser}
//           activeTab={activeTab}
//           setActiveTab={handleTabChange}
//         />

//         {!selectedUser ? (
//           <NoChatSelected />
//         ) : activeTab === "Inbox" ? (
//           <ChatContainer
//             selectedUser={selectedUser}
//             setSelectedProfilePage={setSelectedProfilePage}
//           />
//         ) : (
//           // <TheJobMessageTab />
//           <Outlet />
//         )}
//         {selectedProfilePage && (
//           // container mx-auto w-full
//           <div className="flex h-[100%] rounded-lg overflow-hidden max-w-[23%] ">
//             <CompanyProfileHomeInMsg
//               setSelectedProfilePage={setSelectedProfilePage}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// const HomePage = () => {
//   // const { selectedUser } = useChatStore();

//   const location = useLocation();
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);
//   // const [selectedUser, setSelectedUser] = useState(1);
//   const [selectedProfilePage, setSelectedProfilePage] = useState(false);
//   const [activeTab, setActiveTab] = useState("Inbox");

//   // 🔄 Sync tab with URL
//   useEffect(() => {
//     if (location.pathname.includes("job")) {
//       setActiveTab("The Job");
//     } else {
//       setActiveTab("Inbox");
//     }
//   }, [location.pathname]);

//   // 🧭 When tab changes, navigate
//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     navigate(
//       tab === "Inbox"
//         ? "/profile/message/inbox/1"
//         : "/profile/message/job/1/job-details"
//     );
//   };

//   const selectedUser = {
//     id: "2",
//     fullName: "Jane Cooper",
//     profilePic: "/avatar2.png",
//   };

//   return (
//     <div className="h-screen bg-base-200 w-full fixed">
//       <div className="flex items-center justify-center  px-4">
//         <div className="bg-base-100 rounded-lg shadow-cl w-full  ">
//           <div className="flex h-full rounded-lg overflow-hidden">
//             <Sidebar />
//             {/* {!selectedUser ? <NoChatSelected /> : <ChatContainer />} */}
//             {!selectedUser ? <NoChatSelected /> : <ChatContainerInProvider />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
