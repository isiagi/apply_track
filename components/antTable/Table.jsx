import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const App = ({ data, handleDelete, handleEdit, submitting }) => {
  const columns = [
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Date Of Applying",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <div>
          {<Tag color={`${tagColor(status)}`}>{status.toUpperCase()}</Tag>}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            className="text-green-400 hover:text-green-600 flex items-center gap-1 cursor-pointer"
            onClick={() => handleEdit(record._id)}
          >
            <p>Edit</p>
            <EditOutlined /> {record.name}
          </div>
          <div
            className="text-red-400 hover:text-red-600 flex items-center gap-1 cursor-pointer"
            onClick={() => handleDelete(record._id)}
          >
            Delete
            <DeleteOutlined />
          </div>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        pagination={{
          position: ["bottomLeft"],
        }}
        dataSource={data}
      />
    </div>
  );
};
export default App;

const tagColor = (tag) => {
  let color = "";
  switch (tag) {
    case "Pending":
      return (color = "geekblue");
    case "Short-Listed":
      return (color = "pink");
    case "Interviewed":
      return (color = "orange");
    case "Got Hired":
      return (color = "green");
    case "Rejected":
      return (color = "volcano");

    default:
      return (color = "purple");
  }
};
