/* eslint-disable react/prop-types */
import { FiTrash2 } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import DatePicker from "./DatePicker";
import { useState } from "react";
import { Modal } from "antd";

const petContent = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/qOi6kVvuCcs?si=LY7TGGHqorkxoBs_",
    date: "25-04-2025",
    author: "Jacob",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/duTZ3AG8W6c?si=UAz7vsOgUvKP_d3Y",
    date: "25-04-2025",
    author: "Jacob",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/jXHOHOYkbYc?si=59ufXvjIPCDsbHjM",
    date: "26-04-2025",
    author: "Emma",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/pWepfJ-8XU0?si=iWLT-FTwiNstONDZ",
    date: "27-04-2025",
    author: "Lucas",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/PRAMFqh49b0?si=Qpsdt87gv3UWjzFl",
    date: "28-04-2025",
    author: "Olivia",
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/embed/S1nUMsPC1-0?si=D7tlxlBhfkmF4njo",
    date: "29-04-2025",
    author: "Sophia",
  },
];

export default function VideoList() {
  return (
    <div className="mb-5">
      <div className="flex flex-col md:flex-row justify-end md:gap-5 items-center">
        <div className="relative w-full md:w-[320px]">
          <input
            type="text"
            placeholder="Search..."
            className="border border-[#e5eaf2] py-3 pl-10 pr-[65px] outline-none w-full md:w-full rounded-md"
          />
          <span className="text-gray-500 absolute top-0 left-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer">
            <IoSearch className="text-[1.3rem]" />
          </span>
        </div>
        <DatePicker />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {petContent.map((content) => (
          <PetVideoCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
}

function PetVideoCard({ content }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md bg-[#F2F2F2] h-full">
      {/* Dynamically setting the video URL */}
      <div className="relative pb-[56.25%] w-full">
        {" "}
        {/* Aspect ratio container */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={content.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="p-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 border border-gray-200 rounded-full">
            <img
              src="https://avatar.iran.liara.run/public/14"
              alt={content.author}
              width={36}
              height={36}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold text-sm">{content.author}</p>
            <p className="text-xs text-gray-500">{content.date}</p>
          </div>
        </div>
        <button className="text-red-500 hover:text-red-700 transition-colors">
          <FiTrash2 onClick={showModal} className="h-5 w-5" />
        </button>
        <Modal
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          footer={null}
        >
          <div className="flex flex-col justify-center items-center py-12">
            <h1 className="text-3xl text-center text-[#0D0D0D]">
              Are you sure you want to delete?
            </h1>

            <div className="text-center py-6 w-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#FF0000] text-white font-semibold w-full py-3 px-5 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="border-2 border-[#FF0000] text-[#FF0000] font-semibold w-full py-3 px-5 rounded-lg mt-5"
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
