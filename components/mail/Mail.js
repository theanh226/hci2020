import React from "react";
import { Row, Col, Button} from "antd";

const Mail = () => {
  return (
      <Row style={{background: "white", marginTop: "0.25em", textAlign: "left", paddingLeft: "0.5em"}}>
          <Col span={5}>Max Mustermann</Col>
          <Col span={7}>You have been accepted to Group Math A ...</Col>
          <Col span={5}>8:00 PM 16/12/2020</Col>
          <Col span={7}><Button type="danger">Delete</Button></Col>
      </Row>
  );
};
export default Mail;
