import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import {  MdBlockFlipped } from "react-icons/md";

const RecentUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const dataSource = [
    {
      key: "1",
      no: "1",
      name: "John Doe",
      date: "05/03/2025",
      phone: "+1 9876543210",
      email: "johndoe@example.com",
      location: "New York, USA",
    },
    {
      key: "2",
      no: "2",
      name: "Jane Smith",
      date: "10/04/2025",
      phone: "+44 1234567890",
      email: "janesmith@example.com",
      location: "London, UK",
    },
    {
      key: "3",
      no: "3",
      name: "Ali Khan",
      date: "15/02/2025",
      phone: "+92 3345678901",
      email: "alikhan@example.com",
      location: "Karachi, Pakistan",
    },
    {
      key: "4",
      no: "4",
      name: "Emily Davis",
      date: "20/05/2025",
      phone: "+33 6789012345",
      email: "emilydavis@example.com",
      location: "Paris, France",
    },
    {
      key: "5",
      no: "5",
      name: "Michael Brown",
      date: "25/06/2025",
      phone: "+61 4567890123",
      email: "michaelbrown@example.com",
      location: "Sydney, Australia",
    },
    {
      key: "6",
      no: "6",
      name: "Linda Wilson",
      date: "30/07/2025",
      phone: "+49 3216549870",
      email: "lindawilson@example.com",
      location: "Berlin, Germany",
    },
    {
      key: "7",
      no: "7",
      name: "David Lee",
      date: "12/08/2025",
      phone: "+82 7654321098",
      email: "davidlee@example.com",
      location: "Seoul, South Korea",
    },
    {
      key: "8",
      no: "8",
      name: "Sophia Martinez",
      date: "18/09/2025",
      phone: "+34 6543219870",
      email: "sophiamartinez@example.com",
      location: "Madrid, Spain",
    },
    {
      key: "9",
      no: "9",
      name: "William Johnson",
      date: "22/10/2025",
      phone: "+1 3120987654",
      email: "williamjohnson@example.com",
      location: "Chicago, USA",
    },
    {
      key: "10",
      no: "10",
      name: "Hiroshi Tanaka",
      date: "05/11/2025",
      phone: "+81 9876543210",
      email: "hiroshitanaka@example.com",
      location: "Tokyo, Japan",
    },
    {
      key: "11",
      no: "11",
      name: "Fatima Ahmed",
      date: "14/12/2025",
      phone: "+971 501234567",
      email: "fatimaahmed@example.com",
      location: "Dubai, UAE",
    },
    {
      key: "12",
      no: "12",
      name: "Carlos Rodriguez",
      date: "19/01/2025",
      phone: "+52 9988776655",
      email: "carlosrodriguez@example.com",
      location: "Mexico City, Mexico",
    },
    {
      key: "13",
      no: "13",
      name: "Elena Petrova",
      date: "23/02/2025",
      phone: "+7 9054321987",
      email: "elenapetrova@example.com",
      location: "Moscow, Russia",
    },
    {
      key: "14",
      no: "14",
      name: "Mohammed Hassan",
      date: "28/03/2025",
      phone: "+20 1122334455",
      email: "mohammedhassan@example.com",
      location: "Cairo, Egypt",
    },
    {
      key: "15",
      no: "15",
      name: "Olivia Thompson",
      date: "06/04/2025",
      phone: "+27 601234567",
      email: "oliviathompson@example.com",
      location: "Cape Town, South Africa",
    },
    {
      key: "16",
      no: "16",
      name: "Lucas Kim",
      date: "12/05/2025",
      phone: "+82 1098765432",
      email: "lucaskim@example.com",
      location: "Busan, South Korea",
    },
    {
      key: "17",
      no: "17",
      name: "Isabella Rossi",
      date: "17/06/2025",
      phone: "+39 5556667778",
      email: "isabellarossi@example.com",
      location: "Rome, Italy",
    },
    {
      key: "18",
      no: "18",
      name: "Nathan Scott",
      date: "24/07/2025",
      phone: "+1 4156789012",
      email: "nathanscott@example.com",
      location: "San Francisco, USA",
    },
    {
      key: "19",
      no: "19",
      name: "Emma White",
      date: "29/08/2025",
      phone: "+61 412345678",
      email: "emmawhite@example.com",
      location: "Melbourne, Australia",
    },
    {
      key: "20",
      no: "20",
      name: "Sebastian Müller",
      date: "10/09/2025",
      phone: "+49 1712345678",
      email: "sebastianmuller@example.com",
      location: "Munich, Germany",
    },
  ];
  
  

  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Phone Number", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Location", dataIndex: "location", key: "location" },
    {
      title: "Action",
      key: "action",
      render: () => (
        <button onClick={showModal}>
          <MdBlockFlipped  className="text-[#00c0b5] w-8 h-8" />
        </button>
      ),
    },
  ];

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "#00c0b5",
            },
            Pagination: {
              colorPrimaryBorder: "#00c0b5",
              colorBorder: "#00c0b5",
              colorPrimaryHover: "#00c0b5",
              colorTextPlaceholder: "#00c0b5",
              itemActiveBgDisabled: "#00c0b5",
              colorPrimary: "#00c0b5",
            },
            Table: {
              headerBg: "#00c0b5",
              headerColor: "rgb(255,255,255)",
              cellFontSize: 16,
              headerSplitColor: "#00c0b5",
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

        {/* Modal */}
        <Modal
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          footer={null}
        >
          <div className="flex flex-col justify-center items-center py-10">
            <h1 className="text-3xl text-center text-[#00c0b5]">
              Are you sure!
            </h1>
            <p className="text-xl text-center mt-5">
              Do you want to block this user profile?
            </p>
            <div className="text-center py-5 w-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#00c0b5] text-white font-semibold w-1/3 py-3 px-5 rounded-lg"
              >
                CONFIRM
              </button>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default RecentUsers;
