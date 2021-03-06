import React from "react";
import LayoutMain from "../../layouts/index";
import Sider from "../../components/sider/Sider";
import { Popconfirm, Layout, Button, Table, Input, Space } from "antd";
import ButtonEdit from "../../components/group-card-edit/group-card-edit-modal.js";

import { SearchOutlined } from "@ant-design/icons";

// for hc part
import data from "../../components/data/group-manage.json";

const { Content } = Layout;

const PersonalGroupManage = () => {
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
      dataIndex: "option",
      key: "option",
      render: (option) => (
        <>
          {option == "own" ? (
            <ButtonEdit />
          ) : (
            <Popconfirm
              title="Do you want to leave this group?"
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger">Leave</Button>
            </Popconfirm>
          )}
        </>
      ),
    },
  ];
  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider highlight={"4"} />
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
              <h2>Study Group Manage</h2>
              <p></p>
              {/* FILTER */}
              <Table
                columns={columns}
                expandable={{
                  expandedRowRender: (record) => (
                    <div>
                      <p style={{ margin: 0 }}>{record.intro}</p>
                      <p style={{ margin: 0 }}>Member:</p>
                      {record.option == "own" ? (
                        <Popconfirm
                          title="Do you want to kick yourself and disband this group?"
                          okText="Yes"
                          cancelText="No"
                        >
                          <Button style={{marginTop: '1em'}}>{record.detail_member[0]}</Button>
                        </Popconfirm>
                      ) : (
                        <div>
                          <Button style={{marginTop: '1em'}} disabled>{record.detail_member[0]}</Button>
                          <Button style={{marginTop: '1em', marginLeft:'0.5em'}} disabled>{record.detail_member[1]}</Button>
                          <Button style={{marginTop: '1em', marginLeft:'0.5em'}} disabled>{record.detail_member[2]}</Button>
                          <Button style={{marginTop: '1em', marginLeft:'0.5em'}} disabled>{record.detail_member[3]}</Button>
                        </div>
                      )}
                    </div>
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

export default PersonalGroupManage;
