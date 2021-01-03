import React, { useState } from 'react';
import { Row, Col, Menu, Dropdown, Button } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link href="/personal-info">
          Account's information
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Link href="/login">
          Log out
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Row justify="space-between" className={styles.header}>
      <Col span={12} className={styles.logo}>
        <Image src="/logo.png" alt="logo" width={181} height={46} />
      </Col>
      <Col span={12} className={styles.avatar}>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <Avatar size={52} icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Header;
