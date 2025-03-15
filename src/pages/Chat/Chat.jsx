import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiSendPlane2Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoImagesOutline } from "react-icons/io5";

const users = [
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/28",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/27",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/29",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/30",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/31",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/32",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/33",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/31",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/32",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/33",
  },
];

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [activeTab, setActiveTab] = useState("User");
  const [messages, setMessages] = useState([
    {
      text: "Don't worry, the pain will pass soon",
      sender: "me",
      time: "20-Apr-2024",
    },
    { text: "Thank you Dr.", sender: "them", time: "20-Apr-2024" },
    {
      text: "Don't worry, the pain will pass soon",
      sender: "me",
      time: "20-Apr-2024",
    },
    { text: "Thank you Dr.", sender: "them", time: "20-Apr-2024" },
    {
      text: "Don't worry, the pain will pass soon",
      sender: "me",
      time: "20-Apr-2024",
    },
    { text: "Thank you Dr.", sender: "them", time: "20-Apr-2024" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { text: newMessage, sender: "me", time: "Just now" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white ">
      <div className="p-5">
        <h1 className="text-[#0D0D0D] text-start text-3xl font-bold">
          Messages
        </h1>
        {/* Tab Navigation Section */}
        <div className="flex justify-start items-center gap-5 text-md md:text-xl font-semibold my-5">
          <p
            onClick={() => setActiveTab("User")}
            className={`cursor-pointer pb-1 ${
              activeTab === "User"
                ? "text-[#00C0B5] border-b-4 border-[#00C0B5] font-bold"
                : "text-[#575757] font-bold"
            }`}
          >
            User{" "}
          </p>
          <p
            onClick={() => setActiveTab("Professional")}
            className={`cursor-pointer pb-1 ${
              activeTab === "Professional"
                ? "text-[#00C0B5] border-b-4 border-[#00C0B5] font-bold"
                : "text-[#575757] font-bold"
            }`}
          >
            Professional
          </p>
        </div>
      </div>

      {/* Header for Mobile */}
      <div className="flex items-center justify-between p-5 bg-[#00c0b5] text-white md:hidden">
        <FiMenu
          className="text-2xl cursor-pointer"
          onClick={() => setShowSidebar(!showSidebar)}
        />
        <h1 className="text-xl font-bold">Messages</h1>
      </div>

      <div className="flex flex-1">
        {/* Sidebar - User List */}
        <div
          className={`absolute md:relative top-0 left-0 w-64 md:w-96 h-full bg-white md:flex flex-col p-4 transition-all duration-300 z-50 mb-10 ${
            showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <button
            className="md:hidden self-end mb-4 text-gray-500"
            onClick={() => setShowSidebar(false)}
          >
            ✖
          </button>
          <div className="relative mb-5">
            <AiOutlineSearch
              className="absolute left-3 top-4 text-[#4F4F59] w-6 h-6"
              size={20}
            />
            <input
              type="text"
              className="w-full pl-10 py-4 bg-[#F2F2F2] focus:outline-none"
            />
          </div>
          <div className="overflow-y-auto space-y-2 flex-1">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-3 p-4 cursor-pointer bg-gray-100 rounded-md"
                onClick={() => setSelectedUser(user)}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1 ">
                  <h3 className="text-lg font-medium mb-8">{user.name}</h3> 
                </div>
                <p className="text-xs text-gray-500 mb-8">{user.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col mb-10 md:border-l-[10px] md:border-white">
          <div className="px-5 py-2 bg-[#00C0B5] text-white flex items-center gap-3 md:rounded-lg">
            <img
              src="https://avatar.iran.liara.run/public/28"
              alt={selectedUser.name}
              className="h-20 w-20 rounded-full object-cover"
            />
            <h2 className="text-xl font-medium mb-8">{selectedUser.name}</h2>
          </div>
          <div className="flex-1 overflow-auto bg-[#E6FAF9] p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="bg-white rounded-xl p-5 max-w-sm">
                  <p className="text-xl text-[#4F4F59]  text-left">
                    {msg.text}
                  </p>
                  <p className="text-lg text-[#4F4F59]  text-right">
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative p-5 bg-[#E6FAF9] flex gap-2 text-[#4F4F59]">
            <input
              type="text"
              placeholder="Type your message"
              className="flex-1 px-2 py-5 border rounded-full focus:outline-none bg-white placeholder:pl-5"
            />
            <button className="p-3 bg-gray-100 absolute right-22 bottom-7 rounded-full">
              <IoImagesOutline  size={20} className="w-5 h-5"  />

            </button>
            <button
              onClick={sendMessage}
              className="p-3.5 bg-teal-500 hover:bg-teal-600 text-white absolute right-8 bottom-7 rounded-full"
            >
              <RiSendPlane2Fill size={20} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:flex flex-col border-l-[10px] border-white mb-10">
          <div className="w-[350px]   p-2 bg-[#E6FAF9] rounded-lg h-full">
            <h3 className="text-xl text-[#4F4F59] font-medium mb-2 mt-5">
              Media(1)
            </h3>
            <img
              src="/3.jpg"
              alt="Media"
              className="rounded w-20 h-20 object-cover"
            />
            <div className="flex flex-col justify-center items-center py-3 bg-white mt-[300px]">
              <h3 className="text-xl text-[#4F4F59] font-medium">
                Attachments(1)
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center bg-white py-3 mt-2">
              <p className="text-sm truncate">document.pdf</p>
              <p className="text-xs text-[#4F4F59]">2.00 MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;