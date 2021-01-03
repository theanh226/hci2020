import React from "react";
import Sider from "../../components/sider/Sider";
import LayoutMain from "../../layouts/index";
import GroupCard from "../../components/group-card/group-card.js";
import { Layout } from "antd";

const { Content } = Layout;

const PersonalGroupManage = () => {
  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider highlight={"4"}/>
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
