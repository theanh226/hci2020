import React from "react";
import { Row, Col } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Row justify="space-between" className={styles.header}>
      <Col span={12} className={styles.logo}>
        <Image src="/logo.png" alt="logo" width={181} height={46} />
      </Col>
      <Col span={12} className={styles.avatar}>
        <Avatar size={52} icon={<UserOutlined />} />
      </Col>
    </Row>
  );
};

export default Header;
