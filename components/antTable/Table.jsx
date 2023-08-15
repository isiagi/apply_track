import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const handleEdit = (id) => {
    router.push(`/edit?id=${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/action/${id.toString()}`, { method: "DELETE" });
      const newData = applys.filter((res) => res._id !== id);

      setApplys(newData);
    } catch (error) {
      return new Response(error.message, { status: 500 });
    }
  };

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
      <>
      
        <Tag>
          {status.toUpperCase()}
        </Tag>
      </>
      //   <span>
      //     {tags.map((tag) => {
      //       let color = tag.length > 5 ? "geekblue" : "green";
      //       if (tag === "loser") {
      //         color = "volcano";
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <div onClick={() => handleEdit(record._id)}>
          Edit
          <EditOutlined /> {record.name}
        </div>
        <div onClick={() => handleDelete(record._id)}>
          Delete
          <DeleteOutlined />
        </div>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const App = ({ data, handleDelete, handleEdit, submitting }) => {
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
