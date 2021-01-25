import React from 'react';
import Sider from '../../components/sider/Sider';
import LayoutMain from '../../layouts/index';
import { Row, Col, Layout, Button } from 'antd';
import PersonalInfoEdit from '../../components/personal-info-edit/personal-info-edit';

const { Content } = Layout;

const PersonalInfo = () => {
  return (
    <LayoutMain>
      <Layout style={{ background: 'unset' }}>
        <Sider highlight="3" />
        <Layout className="site-layout" style={{ background: 'unset' }}>
          <Content style={{ padding: '4em 17em' }}>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                textAlign: 'center',
                background: '#f0f2f5',
              }}
            >
              <h2>Personal Info</h2>
              <Row>
                <Col span={16}>
                  <Row
                    style={{
                      textAlign: 'left',
                      lineHeight: '3',
                      fontSize: '1.2em',
                    }}
                  >
                    {/* Name */}
                    <Col span={8}>Name:</Col>
                    <Col span={16}>Max Musteruserman</Col>
                    {/* Mail */}
                    <Col span={8}>Mail:</Col>
                    <Col span={16}>mustermail@mmm</Col>
                    {/* Interest */}
                    <Col span={8}>Interest:</Col>
                    <Col span={16}>Programming, Math</Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <img
                    src="https://a2.tvspielfilm.de/imedia/2748/10132748,h9mG+u3sBHexzIGgTqt6rWCk3asDJWPD6CWmzekVslQIkikfIsktlRkjOerP_1olW_iOZWnEXchssqyRkZG7Wg==.jpg"
                    width="200"
                    height="160"
                  ></img>
                </Col>
              </Row>
            </div>
            <div style={{ textAlign: 'Right', marginTop: '1em' }}>
              <PersonalInfoEdit />
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutMain>
  );
};
export default PersonalInfo;
