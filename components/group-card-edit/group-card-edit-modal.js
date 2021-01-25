import React, { useState } from 'react';
import { Row, Col, Button, Modal, Typography, Form, Input, Layout, DatePicker } from 'antd';
import moment from 'moment';
import { toast } from 'react-toastify';
import styles from './group-card.module.css';

const ButtonEdit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
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

  const notify = () => {
    toast.success('Group edit successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <Button type="default" size="default" onClick={() => setIsModalVisible(true)}>
        Edit
      </Button>
      <Modal
        title="Edit your study group."
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        style={{ width: '100%' }}
      >
        <Layout className="site-layout" style={{ background: 'unset' }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: 'center',
              background: '#f0f2f5',
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
                    <Col span={24} style={{ marginRight: '1em', marginTop: '1em' }}>
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
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24} className={styles.introduction}>
                      <div className={styles.introductionWrapper}>
                        <div className={styles.introduceTitle}>
                          <Typography.Title level={4}>Introduce words</Typography.Title>
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
                    <Button
                      onClick={notify}
                      type="primary"
                      size="large"
                      htmlType="submit"
                      style={{ marginTop: '2em', width: '50%' }}
                    >
                      <Typography.Title level={4} style={{ color: 'white' }}>
                        Edit Group
                      </Typography.Title>
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </Layout>
      </Modal>
    </div>
  );
};

export default ButtonEdit;
