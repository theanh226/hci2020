import React from "react";
import LayoutMain from "../../layouts/index";
import { Row, Col, Layout, Menu } from "antd";
import { CloudOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

const PersonalInfo = () => {
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                <a href="/personal-info">Personal Info</a>      
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
                <a href="/personal-group-manage">Manage Study Group</a>
            </Menu.Item>
            <Menu.Item key="3" icon={<CloudOutlined />}>
                <a href="/personal-inbox">Inbox</a>
            </Menu.Item>
            <Menu.Item key="4" icon={<CloudOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200, background: "unset" }}>
          <Content style={{ margin: "0px 16px 0", padding: "4em" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center", background: "#f0f2f5" }}
            >
              <Row>
                <Col span={16}>
                  <Row style={{ textAlign: "left", lineHeight: "3", fontSize: "1.2em" }}>
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
                  <img src="https://a2.tvspielfilm.de/imedia/2748/10132748,h9mG+u3sBHexzIGgTqt6rWCk3asDJWPD6CWmzekVslQIkikfIsktlRkjOerP_1olW_iOZWnEXchssqyRkZG7Wg==.jpg" width="200" height="160"></img>
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
