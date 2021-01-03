import React from "react";
import Link from "next/link";
import LayoutMain from "../../layouts/index";
import { Row, Col, Layout, Menu } from "antd";
import { CloudOutlined, TeamOutlined, UserOutlined, LogoutOutlined} from "@ant-design/icons";

const { Content, Sider } = Layout;

const PersonalInfo = () => {
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
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
          <Content style={{ padding: "4em 17em" }}>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                textAlign: "center",
                background: "#f0f2f5",
              }}
            >
              <h2>Personal Info</h2>
              <Row>
                <Col span={16}>
                  <Row
                    style={{
                      textAlign: "left",
                      lineHeight: "3",
                      fontSize: "1.2em",
                    }}
                  >
                    {/* Name */}
                    <Col span={8}>Name:</Col>
                    <Col span={16}>Max Musteruserman</Col>
                    {/* Mail */}
                    <Col span={8}>Mail:</Col>
                    <Col span={16}>mustermail@mmm</Col>
                    {/* Interest */}
                    <Col span={8}>Interest:</Col>
                    <Col span={16}>Programming, Math</Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <img
                    src="https://a2.tvspielfilm.de/imedia/2748/10132748,h9mG+u3sBHexzIGgTqt6rWCk3asDJWPD6CWmzekVslQIkikfIsktlRkjOerP_1olW_iOZWnEXchssqyRkZG7Wg==.jpg"
                    width="200"
                    height="160"
                  ></img>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutMain>
  );
};
export default PersonalInfo;
