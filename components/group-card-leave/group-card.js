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
        <span className={styles.text}>LinA Group</span>
      </Col>
      <Col span={5}>
        <span className={styles.text}>2/4</span>
      </Col>
      <Col span={5}>
        <span className={styles.text}>Lineare Algebra A</span>
      </Col>
      <Col span={5}>
        <span className={styles.text}>13:45 Montag</span>
      </Col>
      <Col span={4} style={{ textAlign: "right" }}>
        <Button type="danger" size="large">
          Quit
        </Button>
      </Col>
    </Row>
  );
};

export default GroupCard;
