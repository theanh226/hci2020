import React from "react";
import { Row, Col, Button } from "antd";
import styles from "./group-card.module.css";
import { toast } from "react-toastify";

const GroupCard = () => {
  const notify = () =>
    toast.success("Join request send successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
      <Col span={4} style={{ textAlign: "right" }}>
        <Button onClick={notify} type="primary" size="large">
          Join
        </Button>
      </Col>
    </Row>
  );
};

export default GroupCard;
