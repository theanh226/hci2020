import React from "react";
import { Input } from 'antd';
import { Button } from "antd";
import Layout from "../../layouts/index";
import styles from "./Login.module.css";

const LoginPage = () => {
  return (
    <Layout>
      <form>
        <div className={styles.login}>
          <div className={styles.input}>
            <Input placeholder="Username" />
          </div>
          <div className={styles.input}>
            <Input.Password placeholder="Password" />
          </div>
          <div className={styles.register}>
            <p>Don't have an account? <a href="#" >Register</a></p>
          </div>
          <div className={styles.signin}>
            <Button type="primary" block>Sign in</Button>
          </div>
        </div>
      </form>
    </Layout>
  );
};
export default LoginPage;
