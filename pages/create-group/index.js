import React from 'react';
import Layout from '../../layouts/index';
import { Row, Col, Typography, Form, Input, Button, DatePicker } from 'antd';
import styles from './CreateGroup.module.css';
import moment from 'moment';

const CreateGroupPage = () => {
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };

  //   SET TIME
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };

  const disabledDateTime = () => {
    return {
      disabledSeconds: () => [55, 56],
    };
  };

  return (
    <Layout>
      {/* INPUT */}
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
      >
        <Row justify="center">
          <Col span={12} className={styles.wrapper}>
            <Typography.Title level={2} className={styles.title}>
              Create Group
            </Typography.Title>
            <Row justify="center">
              <Col span={10} style={{ marginRight: '1em' }}>
                {/* GROUP NAME */}
                <Form.Item
                  label="Group name"
                  name="Group name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Group name!',
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
                      message: 'Please input your Subject!',
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
                      message: 'Please input time you want to study!',
                    },
                  ]}
                >
                  <DatePicker
                    format="YYYY-MM-DD HH:mm"
                    disabledDate={disabledDate}
                    disabledTime={disabledDateTime}
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    hideDisabledOptions
                    minuteStep={15}
                    style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col span={10} className={styles.introduction}>
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
          <Col span={12}>
            <Row>
              <Col span={12}>
                <Button type="danger" size="large">
                  <Typography.Title level={4} style={{ color: 'white' }}>
                    Go Back
                  </Typography.Title>
                </Button>
              </Col>
              <Col span={12}>
                <Form.Item {...tailLayout} className={styles.buttonWrapper}>
                  <Button type="primary" size="large" htmlType="submit" className={styles.button}>
                    <Typography.Title level={4} style={{ color: 'white' }}>
                      Create Group
                    </Typography.Title>
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <div></div>
    </Layout>
  );
};

export default CreateGroupPage;
