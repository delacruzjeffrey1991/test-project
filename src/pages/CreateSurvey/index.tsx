import React from "react";
import { Col, Row } from "react-bootstrap";

import global from "../../global.module.scss";
import Styles from "./styles.module.scss";
import Button from "../../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Surveys() {
  return (
    <Row>
      <Col md={6}>
        <h1>Create a Survey</h1>
      </Col>
      <Col md={6}></Col>
    </Row>
  );
}

export default Surveys;
