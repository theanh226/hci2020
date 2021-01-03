import React from "react";
import Sider from "../../components/sider/Sider";
import LayoutMain from "../../layouts/index";
import Mail from "../../components/mail/Mail";
import { Row, Col, Layout} from "antd";

const { Content} = Layout;

const PersonalInbox = () => {
  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider highlight={"5"}/>
        <Layout
          className="site-layout"
          style={{ background: "unset" }}
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
