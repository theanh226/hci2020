import React from "react";
import Sider from "../../components/sider/Sider";
import LayoutMain from "../../layouts/index";
import Mail from "../../components/mail/Mail";
import { Row, Col, Layout, Button } from "antd";

const { Content } = Layout;

const PersonalInbox = () => {
  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider highlight={"5"} />
        <Layout className="site-layout" style={{ background: "unset" }}>
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
              <Row
                style={{
                  background: "white",
                  fontWeight: "bold",
                  textAlign: "left",
                  paddingLeft: "0.5em",
                }}
              >
                <Col span={5}>Name</Col>
                <Col span={7}>Content</Col>
                <Col span={5}>Date</Col>
                <Col span={7}>Option</Col>
              </Row>
              <Mail />
              <Row
                style={{
                  background: "white",
                  marginTop: "0.25em",
                  textAlign: "left",
                  paddingLeft: "0.5em",
                }}
              >
                <Col span={5}>Leyman Fey</Col>
                <Col span={7}>You have been accepted to Let's learn math ...</Col>
                <Col span={5}>1:00 AM 17/12/2020</Col>
                <Col span={7}>
                  <Button type="danger">Delete</Button>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutMain>
  );
};
export default PersonalInbox;
