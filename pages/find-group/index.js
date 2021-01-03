import React from 'react';
import Layout from '../../layouts/index';
import { Row, Col, Typography, Select, TimePicker, Button } from 'antd';
import moment from 'moment';
import styles from './FindGroup.module.css';
import GroupCard from '../../components/group-card/group-card.js';

const FindGroupPage = () => {
  const format = 'HH:mm';

  return (
    <Layout>
      <Row justify="center">
        <Col span={16}>
          <div className={styles.selectWrapper}>
            <Typography.Title level={3}>Find Group</Typography.Title>
            <Row justify="space-between">
              {/* SELECT SUBJECT */}
              <Col span={5}>
                <Select
                  showSearch
                  style={{ width: '100%' }}
                  placeholder="Select Subject"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                  size="large"
                >
                  <Select.Option value="1">Analysis</Select.Option>
                  <Select.Option value="2">Mensch Computer Interaktion</Select.Option>
                  <Select.Option value="3">Programmieren</Select.Option>
                  <Select.Option value="4">Lineare Algebra</Select.Option>
                  <Select.Option value="5">Software Technik</Select.Option>
                  <Select.Option value="6">IT-Sicherheit</Select.Option>
                </Select>
              </Col>
              {/* SELECT TIME */}
              <Col span={5}>
                <TimePicker
                  style={{ width: '100%' }}
                  defaultOpenValue={moment('00:00', format)}
                  format={format}
                  minuteStep={15}
                  size="large"
                />
              </Col>
              {/* AVAILABLE */}
              <Col span={5}>
                <Select defaultValue="All" style={{ width: '100%' }} size="large">
                  <Select.Option value="All">All</Select.Option>
                  <Select.Option value="Available">Available</Select.Option>
                </Select>
              </Col>
              <Col span={5}>
                <Button type="primary" size="large" style={{ width: '100%' }}>
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
    </Layout>
  );
};

export default FindGroupPage;
