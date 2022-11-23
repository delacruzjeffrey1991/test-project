import { Row, Col, Container } from "react-bootstrap";
import Styles from "./index.module.scss";

import Group from "../../components/common/Group";
import Heading from "../../components/common/Heading";

import CreatePost from "../../components/CreatePost";
import Mentorship from "../../components/Mentorship";
import Posts from "../../components/Posts";
import ProfileCover from "../../components/ProfileCover";
import Recognition from "../../components/Recognition";
import FriendSuggestion from "../../components/common/FriendSuggestion";
// import EventImg from '../../../components/common/EventImg'
import Event from "../../components/common/Event";

import coverImg from "../../assets/images/video5.png";
import doneImg from "../../assets/images/done.png";
import inst1Img from "../../assets/images/inst1.png";
import inst2Img from "../../assets/images/inst2.png";
import inst3Img from "../../assets/images/inst3.png";
import inst4Img from "../../assets/images/inst4.png";
import inst5Img from "../../assets/images/inst5.png";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit-open-source";

const CommunityAmityAmity = () => {
    const userId = "jeffrey-test";
    const apiKey = "b0efec0f328df0614a668814540e14d9835adab1b2606c24";
  
  return (
    <>
      <Row>
              <div className="App">
                  <AmityUiKitProvider
                      key={userId}
                      apiKey={apiKey}
                      userId={userId}
                      displayName={userId}
                      apiRegion="us"
                  >
                      <AmityUiKitSocial />
                  </AmityUiKitProvider>
              </div>
      </Row>
    </>
  );
};

export default CommunityAmityAmity;
