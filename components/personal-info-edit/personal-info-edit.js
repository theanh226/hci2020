import React, { useState, Fragment } from 'react';
import { Modal, Button, Form, Input } from 'antd';

const PersonalInfoEdit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  return (
    <Fragment>
      <Button
        type="primary"
        size="large"
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        Edit
      </Button>
      <Modal
        title="Edit personal informations"
        visible={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
        }}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          labelAlign="left"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your new name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mail"
            name="mail"
            rules={[
              {
                required: true,
                message: 'Please input your new e-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Interest"
            name="interest"
            rules={[
              {
                required: true,
                message: 'Please input your new interest!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image link"
            name="imgSrc"
            rules={[
              {
                required: true,
                message: 'Please input link of your new image!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default PersonalInfoEdit;
