import React from "react";
import Styles from "./styles.module.scss";

function SelectOptions({
  variant = "white",
  type = "text",
  color = "gray",
  ...props
}) {
  return (
    <>
      <div className={`form-floating ${Styles.formFloating}`}>
        <select className={`form-select ${Styles.formSelect}`}>
          <option value={props.option1} selected>
            {props.option1}
          </option>
          <option value={props.option2}>{props.option2}</option>
        </select>
        <label>{props.label}</label>
      </div>
    </>
  );
}

export default SelectOptions;
