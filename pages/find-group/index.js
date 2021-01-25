import React from "react";
import LayoutMain from "../../layouts/index";
import Sider from "../../components/sider/Sider";
import { Layout, Button, Table, Input, Space } from "antd";

import { SearchOutlined } from "@ant-design/icons";

// for hc part
import data from "../../components/data/group.json";
import { toast } from "react-toastify";

const { Content } = Layout;

const FindGroupPage = () => {
  const notify = () =>
    toast.success("Join request send successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Member",
      dataIndex: "member",
      key: "member",
      width: "20%",
      ...getColumnSearchProps("member"),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      ...getColumnSearchProps("subject"),
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      ...getColumnSearchProps("time"),
    },
    {
      title: "Option",
      dataIndex: "",
      key: "",
      render: () => <Button onClick={() => notify()}>Join</Button>,
    },
  ];
  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider highlight={"1"} />
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
              <h2>Find Group</h2>
              <p></p>
              {/* FILTER */}
              <Table
                columns={columns}
                expandable={{
                  expandedRowRender: (record) => (
                    <p style={{ margin: 0 }}>{record.intro}</p>
                  ),
                  rowExpandable: (record) => record.intro !== "",
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

export default FindGroupPage;
