import React from "react";
import Link from "next/link";
import LayoutMain from "../../layouts/index";
import Mail from "../../components/mail/Mail";
import { Row, Col, Layout, Menu } from "antd";
import {
  CloudOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;

const PersonalInbox = () => {
  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["3"]}>
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
          style={{ marginLeft: 200, background: "unset" }}
        >
          <Content style={{ margin: "0px 16px 0", padding: "4em" }}>
            <div
              className="site-layout-background"
              style={{
                padding: "12px 24px 24px",
                textAlign: "center",
                background: "#f0f2f5",
              }}
            >
              <h2>Inbox</h2>
              <Row style={{ background: "white", fontWeight: "bold", textAlign: "left", paddingLeft: "0.5em" }}>
                <Col span={5}>Name</Col>
                <Col span={14}>Content</Col>
                <Col span={5}>Date</Col>
              </Row>
              <Mail />
              <Mail />
              <Mail />
              <Mail />
              <Mail />
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutMain>
  );
};
export default PersonalInbox;
