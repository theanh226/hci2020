import React from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";
import {
  CloudOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
  SearchOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons";

const { Sider } = Layout;

const PersonalGroupManage = (key) => {
  return (
        <Sider
          style={{
            overflow: "auto",
            minHeight: "100vh",
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={key.highlight}>
            <Menu.Item key="1" icon={<SearchOutlined />}>
              <Link href="/find-group">Find Group</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
              <Link href="/create-group">Create Group</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link href="/personal-info">Personal Info</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />}>
              <Link href="/personal-group-manage">Manage Study Group</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              <Link href="/personal-inbox">Inbox</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<LogoutOutlined />}>
              <Link href="/login">Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
  );
};
export default PersonalGroupManage;
