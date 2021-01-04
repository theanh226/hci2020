import React from "react";
import LayoutMain from "../../layouts/index";
import Sider from "../../components/sider/Sider";
import { Layout, Row, Col, Select, TimePicker, Button } from "antd";
import moment from "moment";
import styles from "./FindGroup.module.css";
import GroupCard from "../../components/group-card/group-card.js";

const { Content } = Layout;

const FindGroupPage = () => {
  const format = "HH:mm";

  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider highlight={"1"}/>
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
              <h2>Find Group</h2>
              <Row justify="center">
                <Col span={16}>
                  <div className={styles.selectWrapper}>
                    <Row justify="space-between">
                      {/* SELECT SUBJECT */}
                      <Col span={5}>
                        <Select
                          showSearch
                          style={{ width: "100%" }}
                          placeholder="Select Subject"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                          size="large"
                        >
                          <Select.Option value="1">Analysis</Select.Option>
                          <Select.Option value="2">
                            Mensch Computer Interaktion
                          </Select.Option>
                          <Select.Option value="3">Programmieren</Select.Option>
                          <Select.Option value="4">
                            Lineare Algebra
                          </Select.Option>
                          <Select.Option value="5">
                            Software Technik
                          </Select.Option>
                          <Select.Option value="6">IT-Sicherheit</Select.Option>
                        </Select>
                      </Col>
                      {/* SELECT TIME */}
                      <Col span={5}>
                        <TimePicker
                          style={{ width: "100%" }}
                          defaultValue={moment("00:00", format)}
                          format={format}
                          minuteStep={15}
                          size="large"
                        />
                      </Col>
                      {/* AVAILABLE */}
                      <Col span={5}>
                        <Select
                          defaultValue="All"
                          style={{ width: "100%" }}
                          size="large"
                        >
                          <Select.Option value="All">All</Select.Option>
                          <Select.Option value="Available">
                            Available
                          </Select.Option>
                        </Select>
                      </Col>
                      <Col span={5}>
                        <Button
                          type="primary"
                          size="large"
                          style={{ width: "100%" }}
                        >
                          Find Group
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row justify="center">
                <Col span={16}>
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                  <GroupCard />
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutMain>
  );
};

export default FindGroupPage;
