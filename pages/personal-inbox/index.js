import React from "react";
import LayoutMain from "../../layouts/index";
import Sider from "../../components/sider/Sider";
import { Popconfirm, Layout, Button, Table, Input, Space } from "antd";

import {
  UserAddOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";

// for hc part
import data from "../../components/data/inbox.json";

const { Content } = Layout;

const PersonalInbox = () => {
  const [searchedColumn, setSearchColumn] = "";

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
      }
    },
    render: (text) => (searchedColumn === dataIndex ? <></> : text),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };

  const handleReset = (clearFilters) => {
    clearFilters();
  };

  const columns = [
    {
      title: "Sender",
      dataIndex: "sender",
      key: "sender",
      width: "20%",
      ...getColumnSearchProps("sender"),
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
      width: "30%",
      ...getColumnSearchProps("content"),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      ...getColumnSearchProps("time"),
    },
    {
      title: "Option",
      dataIndex: "option",
      key: "option",
      render: (option) => (
        <>
          {option == "Accept" ? (
            <div>
              <Popconfirm
                title="Do you want delete this mail?"
                okText="Yes"
                cancelText="No"
              >
                <Button type="danger">
                  <DeleteOutlined />
                </Button>
              </Popconfirm>
              <Popconfirm
                title="Do you want this user join your group?"
                okText="Yes"
                cancelText="Cancel"
              >
                <Button style={{marginLeft: "0.5em"}} type="primary">
                  <UserAddOutlined />
                </Button>
              </Popconfirm>
            </div>
          ) : (
            <Popconfirm
              title="Do you want delete this mail?"
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger">
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          )}
        </>
      ),
    },
  ];
  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider highlight={"5"} />
        <Layout className="site-layout" style={{ background: "unset" }}>
          <Content style={{ margin: "0px 16px 0", padding: "4em" }}>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                textAlign: "center",
                background: "#f0f2f5",
              }}
            >
              <h2>Inbox</h2>
              <p></p>
              {/* FILTER */}
              <Table
                columns={columns}
                expandable={{
                  expandedRowRender: (record) => (
                    <p style={{ margin: 0 }}>{record.detail}</p>
                  ),
                  rowExpandable: (record) => record.detail !== "",
                }}
                pagination={{
                  defaultPageSize: 7,
                  showSizeChanger: true,
                  pageSizeOptions: ["7", "14", "21"],
                }}
                dataSource={data}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutMain>
  );
};

export default PersonalInbox;
