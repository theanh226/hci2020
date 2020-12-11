import React from "react";
import { Input,Button } from "antd";
import Layout from "../../layouts/index";
import styles from "./Login.module.css";

const LoginPage = () => {
  return (
    <Layout>
      <form>
        <div className={styles.login}>
          <Input placeholder="Username" className={styles.input}/>
          <Input.Password placeholder="Password" className={styles.input}/>
          <div className={styles.register}>
            <p>Don't have an account? <a href="#" >Register</a></p>
          </div>
          <div className={styles.signin}>
            <Button type="primary" block >Sign in</Button>
          </div>
        </div>
      </form>
    </Layout>
  );
};
export default LoginPage;
