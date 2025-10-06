import ChatContainer from "../../home/Messages/ChatContainer";
import NoChatSelected from "../MessageUpdate/NoChatSelected";
import { ChatContainerInProvider } from "./ChatContainerInProvider";
import Sidebar from "./Sidebar";

const HomePage = () => {
  // const { selectedUser } = useChatStore();

  const selectedUser = {
    id: "2",
    fullName: "Jane Cooper",
    profilePic: "/avatar2.png",
  };

  return (
    <div className="h-screen bg-base-200 w-full fixed">
      <div className="flex items-center justify-center  px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full  ">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {/* {!selectedUser ? <NoChatSelected /> : <ChatContainer />} */}
            {!selectedUser ? <NoChatSelected /> : <ChatContainerInProvider />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
