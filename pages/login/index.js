import React from "react";
import Link from "next/link";
import { Input, Button } from "antd";
import Header from "../../layouts/Header-copy/Header";
import styles from "./Login.module.css";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <form
        style={{
          backgroundImage:
            "url(https://image.freepik.com/free-vector/flat-design-blue-comic-style-background_23-2148797743.jpg)",
          backgroundSize: "cover",
          paddingTop: "10em",
          height: "100vh"
        }}
      >
        <div className={styles.login}>
          <h2 className={styles.title}>Login</h2>
          <Input placeholder="Username" className={styles.input} />
          <Input.Password placeholder="Password" className={styles.input} />
          <div className={styles.register}>
            <p>
              Don't have an account? <Link href="/register">Register</Link>
            </p>
          </div>
          <Link href="/personal-info">
            <Button type="primary" block className={styles.signin}>
              Sign In
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
