import React from "react";
import LayoutMain from "../../layouts/index";
import Sider from "../../components/sider/Sider";
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  DatePicker,
  Layout,
} from "antd";
import styles from "./CreateGroup.module.css";
import moment from "moment";
import { toast } from "react-toastify";

const { Content } = Layout;

const CreateGroupPage = () => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
  };
  const notify = () =>
    toast.success("Group created successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  //   SET TIME
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };

  const disabledDateTime = () => {
    return {
      disabledSeconds: () => [55, 56],
    };
  };

  return (
    <LayoutMain>
      <Layout style={{ background: "unset" }}>
        <Sider highlight="2" />
        <Layout className="site-layout" style={{ background: "unset" }}>
          <Content style={{ padding: "4em 15em" }}>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                textAlign: "center",
                background: "#f0f2f5",
              }}
            >
              <h2>Group Information Form</h2>
              {/* INPUT */}
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
              >
                <Row justify="center">
                  <Col span={24} className={styles.wrapper}>
                    <Row justify="center">
                      <Col span={16} style={{ marginRight: "1em" }}>
                        {/* GROUP NAME */}
                        <Form.Item
                          label="Group name"
                          name="Group name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Group name!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        {/* SUBJECT NAME */}
                        <Form.Item
                          label="Subject"
                          name="Subject"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Subject!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        {/* TIME */}
                        <Form.Item
                          label="Time"
                          name="Time"
                          rules={[
                            {
                              required: true,
                              message: "Please input time you want to study!",
                            },
                          ]}
                        >
                          <DatePicker
                            format="YYYY-MM-DD HH:mm"
                            disabledDate={disabledDate}
                            disabledTime={disabledDateTime}
                            showTime={{
                              defaultValue: moment("00:00:00", "HH:mm:ss"),
                            }}
                            hideDisabledOptions
                            minuteStep={15}
                            style={{ width: "100%" }}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={16} className={styles.introduction}>
                        <div className={styles.introductionWrapper}>
                          <div className={styles.introduceTitle}>
                            <span>Introduce words</span>
                          </div>
                          <Input.TextArea
                            className={styles.TextArea}
                            allowClear="true"
                            placeholder="Please say something about your group"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col span={24}>
                    <Form.Item {...tailLayout}>
                      <Button onClick={notify} type="primary" size="large" htmlType="submit">
                        <Typography.Title level={4} style={{ color: "white" }}>
                          Create Group
                        </Typography.Title>
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutMain>
  );
};

export default CreateGroupPage;
