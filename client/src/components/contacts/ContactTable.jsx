import React from "react";
import { Table, Tag } from "antd";

const ContactTable = () => {
  // Mock data for contacts
  const dataSource = [
    {
      key: "1",
      name: "John Doe",
      phone_number: "123-456-7890",
      agent_id: 1,
      agent_name: "Agent Smith",
    },
    {
      key: "2",
      name: "Jane Smith",
      phone_number: "987-654-3210",
      agent_id: 2,
      agent_name: "Agent Johnson",
    },
    {
      key: "3",
      name: "Alice Johnson",
      phone_number: "555-123-4567",
      agent_id: null,
      agent_name: null, // No agent assigned
    },
  ];

  // Table columns definition
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
      title: "Assigned Agent",
      dataIndex: "agent_name",
      key: "agent_name",
      render: (agentName) =>
        agentName ? (
          <Tag color="blue">{agentName}</Tag>
        ) : (
          <Tag color="red">Unassigned</Tag>
        ),
    },
  ];

  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Contacts</h1>
      <Table
        dataSource={dataSource}
        columns={columns}
        bordered
        pagination={false}
      />
    </div>
  );
};

export default ContactTable;
