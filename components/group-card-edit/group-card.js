import React from "react";
import { Row, Col, Button } from "antd";
import styles from "./group-card.module.css";

const GroupCard = () => {

  return (
    <Row className={styles.wrapper}>
      <Col span={5}>
        <span className={styles.text}>My Group</span>
      </Col>
      <Col span={5}>
        <span className={styles.text}>1/4</span>
      </Col>
      <Col span={5}>
        <span className={styles.text}>Analysis</span>
      </Col>
      <Col span={5}>
        <span className={styles.text}>10:00 Samstag</span>
      </Col>
      <Col span={4} style={{ textAlign: "right" }}>
        <Button type="default" size="default">
          Edit
        </Button>
      </Col>
    </Row>
  );
};

export default GroupCard;
