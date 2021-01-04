import React from 'react';
import { Row, Col, Button } from 'antd';
import styles from './group-card.module.css';

const GroupCard = () => {
  return (
    <Row className={styles.wrapper}>
      <Col span={5}>
        <span className={styles.text}>Group A</span>
      </Col>
      <Col span={5}>
        <span className={styles.text}>2/4</span>
      </Col>
      <Col span={5}>
        <span className={styles.text}>Analysis</span>
      </Col>
      <Col span={5}>
        <span className={styles.text}>12:15 Freitag</span>
      </Col>
      <Col span={4} style={{ textAlign: 'right' }}>
        <Button type="primary" size="large">
          Join
        </Button>
      </Col>
    </Row>
  );
};

export default GroupCard;
