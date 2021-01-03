import React from "react";
import Link from "next/link";
import LayoutMain from "../../layouts/index";
import GroupCard from "../../components/group-card/group-card.js";
import { Layout, Menu } from "antd";
import {
  CloudOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;

const PersonalGroupManage = () => {
  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider
          style={{
            overflow: "auto",
            minHeight: "100vh",
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link href="/personal-info">Personal Info</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
              <Link href="/personal-group-manage">Manage Study Group</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CloudOutlined />}>
              <Link href="/personal-inbox">Inbox</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />}>
              <Link href="/login">Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{ background: "unset" }}
        >
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
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutMain>
  );
};
export default PersonalGroupManage;
