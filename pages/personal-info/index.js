import React from "react";
import Sider from "../../components/sider/Sider";
import LayoutMain from "../../layouts/index";
import { Row, Col, Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PersonalInfoEdit from "../../components/personal-info-edit/personal-info-edit";

const { Content } = Layout;

const PersonalInfo = () => {
  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider highlight="3" />
        <Layout className="site-layout" style={{ background: "unset" }}>
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
                    <Col span={16}>SampleUser</Col>
                    {/* Mail */}
                    <Col span={8}>Mail:</Col>
                    <Col span={16}>sample_user_mail@gmail.com</Col>
                    {/* Interest */}
                    <Col span={8}>Interest:</Col>
                    <Col span={16}>None</Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Avatar shape="square" size={144} icon={<UserOutlined />} />
                </Col>
              </Row>
            </div>
            <div style={{ textAlign: "Right", marginTop: "1em" }}>
              <PersonalInfoEdit />
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutMain>
  );
};
export default PersonalInfo;
