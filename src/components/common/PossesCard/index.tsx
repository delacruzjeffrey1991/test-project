import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton";

import global from "../../../global.module.scss";
import Styles from "./styles.module.scss";


function PossesCard(props: any) {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div className={`${Styles.possBox} ${Styles[props.variant]} ${ checked ? Styles.checkedBox : '' }`}>
      <h3>{props.title}</h3>
      <div className={Styles.possImg}>
        <img src={props.image} alt="card" />
      </div>
      <p>{props.text}</p>
      <div className={Styles.possContent}>
        <ul>
          <li>Survey Builder</li>
          <li>Employee NPS </li>
          <li>Culture Scorecard </li>
          <li>Gap Analysis</li>
        </ul>
        <div className={Styles.chkboxBtn}>
          <input type="checkbox" id={props.inpId} className={Styles.chkInp} onChange={()=> setChecked(!checked) } />
          <label htmlFor={props.inpId}></label>
        </div>
      </div>
    </div>
  );
}

export default PossesCard;
