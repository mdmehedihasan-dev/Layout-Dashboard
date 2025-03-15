/* eslint-disable no-undef */
import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";

function Roles() {
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
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
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
      title: "Palliative care",
      description: "Only show professionals specialising in palliative care",
    },
    {
      key: "2",
      no: "2",
      title: "Qualified carer",
      description: "Only show professionals specialising in palliative care",
    },
    {
      key: "3",
      no: "3",
      title: "Business profiles",
      description: "Only show professionals specialising in palliative care",
    },
    {
      key: "4",
      no: "4",
      title: "Driving licence",
      description: "Only show professionals specialising in palliative care",
    },
    {
      key: "5",
      no: "5",
      title: "Palliative care",
      description: "Only show professionals specialising in palliative care",
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

  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h1 className="text-[#0D0D0D] text-2xl font-bold">All Roles</h1>
        <button
          onClick={showModal2}
          className="bg-[#00c0b5] text-white font-semibold px-5 py-2 rounded transition duration-200"
        >
          Add Role
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
              <label className="text-[#0D0D0D] text-xl mb-3">Title</label>
              <input
                type="text"
                className="border-2 border-[#e5eaf2] p-2 w-full rounded transition duration-200 mt-3"
                placeholder="Enter your question"
              />
            </div>
            <div className="mt-5">
              <label className="text-[#0D0D0D] text-xl mb-3">Description</label>
              <input
                type="text"
                className="border-2 border-[#e5eaf2] p-2 w-full rounded transition duration-200 mt-3"
                placeholder="Enter your answer"
              />
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
              <label className="text-[#0D0D0D] text-xl mb-3">Title</label>
              <input
                type="text"
                className="border-2 border-[#e5eaf2] p-2 w-full rounded transition duration-200 mt-3"
                placeholder="Enter your question"
              />
            </div>
            <div className="mt-5">
              <label className="text-[#0D0D0D] text-xl mb-3">Description</label>
              <input
                type="text"
                className="border-2 border-[#e5eaf2] p-2 w-full rounded transition duration-200 mt-3"
                placeholder="Enter your answer"
              />
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

export default Roles;