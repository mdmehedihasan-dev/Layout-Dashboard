/* eslint-disable no-undef */
import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdUploadFile } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (image) => (
        <img
          src={image}
          alt="User"
          className="w-12 h-12 rounded-full object-cover mx-auto"
        />
      ),
    },
    {
      title: "Other Required Tasks",
      dataIndex: "tasks",
      key: "tasks",
    },
    {
      title: "Show Specialists In",
      dataIndex: "specialists",
      key: "specialists",
      render: (specialists) => (
        <div>
          {specialists?.map((specialist, index) => (
            <span key={index} className="mr-1">
              {specialist}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: () => (
        <div className="flex justify-center gap-2">
          <button onClick={showModal} className="text-red-500">
            <RiDeleteBin5Line className="w-6 h-6" />
          </button>
          <button onClick={showModal3} className="text-[#00C0B5]">
            <BiSolidEdit className="w-6 h-6" />
          </button>
        </div>
      ),
    },
  ];
  const dataSource = [
    {
      key: "1",
      no: "1",
      image: "https://avatar.iran.liara.run/public/1",
      tasks: "Verify Email, Complete Profile",
      specialists: ["Cardiology", "Neurology"],
    },
    {
      key: "2",
      no: "2",
      image: "https://avatar.iran.liara.run/public/2",
      tasks: "Upload Documents",
      specialists: ["Dermatology", "Pediatrics"],
    },
    {
      key: "3",
      no: "3",
      image: "https://avatar.iran.liara.run/public/3",
      tasks: "Set Appointment",
      specialists: ["Psychology", "Orthopedics"],
    },
    {
      key: "4",
      no: "4",
      image: "https://avatar.iran.liara.run/public/4",
      tasks: "Confirm Phone Number",
      specialists: ["General Medicine", "Oncology"],
    },
    {
      key: "8",
      no: "8",
      image: "https://avatar.iran.liara.run/public/8",
      tasks: "Verify Email, Complete Profile",
      specialists: ["Cardiology", "Neurology"],
    },
    {
      key: "5",
      no: "5",
      image: "https://avatar.iran.liara.run/public/5",
      tasks: "Upload Documents",
      specialists: ["Dermatology", "Pediatrics"],
    },
    {
      key: "6",
      no: "6",
      image: "https://avatar.iran.liara.run/public/6",
      tasks: "Set Appointment",
      specialists: ["Psychology", "Orthopedics"],
    },
    {
      key: "7",
      no: "7",
      image: "https://avatar.iran.liara.run/public/7",
      tasks: "Confirm Phone Number",
      specialists: ["General Medicine", "Oncology"],
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const showModal2 = () => {
    setAddModalOpen(true);
  };
  const handleOk2 = () => {
    setAddModalOpen(false);
  };
  const handleCancel2 = () => {
    setAddModalOpen(false);
  };
  const showModal3 = () => {
    setEditModalOpen(true);
  };
  const handleOk3 = () => {
    setEditModalOpen(false);
  };
  const handleCancel3 = () => {
    setEditModalOpen(false);
  };
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h1 className="text-[#0D0D0D] text-2xl font-bold">All Service</h1>
        <button
          onClick={showModal2}
          className="bg-[#00c0b5] text-white font-semibold px-5 py-2 rounded transition duration-200"
        >
          Add Service
        </button>
      </div>
      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "rgb(19,194,194)",
            },
            Pagination: {
              colorPrimaryBorder: "rgb(19,194,194)",
              colorBorder: "rgb(19,194,194)",
              colorPrimaryHover: "rgb(19,194,194)",
              colorBgTextActive: "rgb(19,194,194)",
              colorTextDisabled: "rgb(19,194,194)",
              colorTextPlaceholder: "rgb(19,194,194)",
              itemActiveBgDisabled: "rgb(255,255,255)",
              colorPrimary: "rgb(19,194,194)",
            },

            Table: {
              headerBg: "rgb(19,194,194)",
              headerColor: "rgb(255,255,255)",
              cellFontSize: 20,
              headerSplitColor: "rgb(19,194,194)",
            },
          },
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
          scroll={{ x: "max-content" }}
        />
        <Modal
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          footer={null}
        >
          <div className="p-5">
            <h1 className="text-4xl text-center text-[#0D0D0D]">
              Are you sure you want to delete ?
            </h1>

            <div className="text-center py-5">
              <button
                onClick={handleOk}
                className="bg-[#00c0b5] text-white font-semibold w-full py-2 rounded transition duration-200"
              >
                YES,DELETE
              </button>
            </div>
            <div className="text-center pb-5">
              <button
                onClick={handleOk}
                className="text-[#00c0b5] border-2 border-[#00c0b5] bg-white font-semibold w-full py-2 rounded transition duration-200"
              >
                NO,DON’T DELETE
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          open={addModalOpen}
          centered
          onCancel={handleCancel2}
          footer={null}
        >
          <div className="p-5">
            <div>
              <label className="text-[#0D0D0D] text-xl mb-3">
                Other required tasks
              </label>
              <input
                type="text"
                className="border-2 border-[#e5eaf2] p-2 w-full rounded transition duration-200 mt-3"
                placeholder="Enter your question"
              />
            </div>
            <div className="mt-5">
              <label className="text-[#0D0D0D] text-xl mb-3">
                Show specialists in
              </label>
              <input
                type="text"
                className="border-2 border-[#e5eaf2] p-2 w-full rounded transition duration-200 mt-3"
                placeholder="Enter your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label className="text-[#0D0D0D] text-xl mb-3">Image</label>
              <div className="border border-[#e5eaf2] rounded-lg p-2 flex items-center justify-start w-full max-w-md">
                <label
                  htmlFor="image-upload"
                  className="flex items-start gap-2 cursor-pointer text-[#0D0D0D]"
                >
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <MdUploadFile className="w-5 h-5" />
                      <span>Browse Image</span>
                    </>
                  )}
                </label>
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>

            <div className="text-center py-5">
              <button
                onClick={handleOk2}
                className="bg-[#00c0b5] text-white font-semibold w-full py-2 rounded transition duration-200"
              >
                SAVE
              </button>
            </div>
          </div>
        </Modal>
        <Modal
          open={editModalOpen}
          centered
          onCancel={handleCancel3}
          footer={null}
        >
          <div className="p-5">
            <div>
              <label className="text-[#0D0D0D] text-xl mb-3">
                Other required tasks
              </label>
              <input
                type="text"
                className="border-2 border-[#e5eaf2] p-2 w-full rounded transition duration-200 mt-3"
                placeholder="Enter your question"
              />
            </div>
            <div className="mt-5">
              <label className="text-[#0D0D0D] text-xl mb-3">
                Show specialists in
              </label>
              <input
                type="text"
                className="border-2 border-[#e5eaf2] p-2 w-full rounded transition duration-200 mt-3"
                placeholder="Enter your answer"
              />
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label className="text-[#0D0D0D] text-xl mb-3">Image</label>
              <div className="border border-[#e5eaf2] rounded-lg p-2 flex items-center justify-start w-full max-w-md">
                <label
                  htmlFor="image-upload"
                  className="flex items-start gap-2 cursor-pointer text-[#0D0D0D]"
                >
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  ) : (
                    <>
                      <MdUploadFile className="w-5 h-5" />
                      <span>Browse Image</span>
                    </>
                  )}
                </label>
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>

            <div className="text-center py-5">
              <button
                onClick={handleOk3}
                className="bg-[#00c0b5] text-white font-semibold w-full py-2 rounded transition duration-200"
              >
                SAVE
              </button>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
}

export default Services;