import React from "react";
import Link from "next/link";
import { Input, Button } from "antd";
import Layout from "../../layouts/index";
import styles from "./Register.module.css";

import { toast } from "react-toastify";

const LoginPage = () => {
  const notify = () =>
    toast.success("Account is successfully registered!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <Layout>
      <form
        style={{
          backgroundImage:
            "url(https://image.freepik.com/free-vector/flat-design-blue-comic-style-background_23-2148797743.jpg)",
          backgroundSize: "cover",
          paddingTop: "10em",
          height: "100vh"
        }}
      >
        <div className={styles.register}>
          <h2 className={styles.title}>Register</h2>
          <Input placeholder="Username" className={styles.input} />
          <Input placeholder="E-mail" className={styles.input} />
          <Input.Password placeholder="Password" className={styles.input} />
          <Input.Password placeholder="Confirm Password" className={styles.input} />
          <div className={styles.signin}>
            <p>
              Already have an account? <Link href="/login">Sign in</Link>
            </p>
          </div>
          <Link href="/login">
            <Button type="primary" onClick={() => notify()}>
              Register
            </Button>
          </Link>
        </div>
      </form>
    </Layout>
  );
};
export default LoginPage;
