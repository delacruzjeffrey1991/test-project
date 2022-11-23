import React from "react";
import Styles from "./styles.module.scss";
import Heading from "../../components/common/Heading";
import Search from "../../components/common/Search";

function PageHeader() {
  return (
    <div className={Styles.pageHeader}>
      <div className={Styles.pageHeading}>
        <Heading label="Surveys" variant="heading1" />
      </div>
      <div className={Styles.pageSeach} >
        <Search
          placeholder="Serach  resource groups"
          icon={true}
          variant="seacrh2"
        />
      </div>
    </div>
  );
}

export default PageHeader;