import React from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { Col, Row } from "react-bootstrap";

import global from "../../global.module.scss";
import Styles from "./styles.module.scss";

import BrandCategories from "../../components/BrandCategories";
import Heading from "../../components/common/Heading";
import IconButton from "../../components/common/IconButton";
import StrategyBox from "../../components/StrategyBox";
import QuestionRadioBox from "../../components/QuestionRadioBox";
import MultiSelectBox from "../../components/common/MultiSelectBox";

import planeImg from "../../assets/images/plan-circle.svg";
import targetImg from "../../assets/images/goal-circle.svg";
import coreImg from "../../assets/images/core-value.svg";
import purposeImg from "../../assets/images/purpose.svg";
import heartImg from "../../assets/images/heart.svg";
import missionImg from "../../assets/images/mission.svg";
import empImg from "../../assets/images/emp.svg";
import empbImg from "../../assets/images/empb.svg";

import geoImg from "../../assets/images/go-circle.svg";
import goalImg from "../../assets/images/go-sm.svg";

import possesImg from "../../assets/images/posses-icon.svg";
import possesSmImg from "../../assets/images/possess-sm.svg";
import PossesCard from "../../components/common/PossesCard";

import possesImg1 from "../../assets/images/Culture-img1.png";
import possesImg2 from "../../assets/images/Learning and Development.png";
import possesImg3 from "../../assets/images/Rewards and Recognition.png";
import possesImg4 from "../../assets/images/Community.png";
import possesImg5 from "../../assets/images/Campaigns.png";
import FilterBtn from "../../components/common/FilterBtn";
import Recommendation from "../../components/common/Recommendation";

function BrandCultureStartegy() {
  const filterOptions = [
    {
      value: '1',
      label:'1'
    },
    {
      value: '2',
      label:'2'
    },
    {
      value: '3',
      label:'3'
    }
  ]
  return (
    <Row>
      <Col md={8}>
        <BrandCategories />
        <div className={`${Styles.keyActions} ${global.dflexCenter}`}>
          <Heading label="Key Actions" variant="heading3" />
          <IconButton icon={<RiShareForwardLine />} />
        </div>

        <div className={Styles.strRightMain}>
          <div className={`${Styles.headingWithImg} ${global.dflexCenter}`}>
            <div className={global.roundImg55}>
              <img src={planeImg} alt="headingImg" className={global.fullImg} />
            </div>
            <div>
              <Heading label="Plan" variant="heading2" />
            </div>
          </div>
          <StrategyBox
            image={targetImg}
            heading="Target Audience"
            question="What groups of people are you aiming to reach with your brand?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={coreImg}
            heading="Core Value"
            question={`Your brand’s core value is the leading principle you want your brand to convey.`}
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={purposeImg}
            heading="Purpose"
            question="What is the reason behind your brand’s existence?"
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={heartImg}
            heading="Beliefs"
            question="A brand should have certain ideals that influence how it is portrayed."
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={missionImg}
            heading="Mission"
            question="Your mission is an action or difference that you plan to achieve wtih your brand."
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={empImg}
            heading="Employer Brand Promise"
            question="The Employer Brand Promise is a list of benefits you promise to your employees for working with you. Having a brand promise improves employee satisfaction and attracts new talent."
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <StrategyBox
            image={empbImg}
            heading="Employer Brand Audit"
            question={`You might not be fully aware of the reputation your company has among job seekers or even your own employees. Send out internal surveys, conduct social media searches, check out sites like Glassdoor to read reviews, or hire a firm that administers reputation monitoring. 
                        Ultimately, your research should uncover your employees’ favorite aspects of your company culture that you can focus on highlighting as well as any areas for improvement to ensure a strong employer brand.`}
          />

          <div className={`${Styles.brandingBox}`}>
            <div className={`${Styles.cardsAudit} ${global.grayBox}`}>
              <QuestionRadioBox heading="Branding" />
              <QuestionRadioBox heading="Recruitment" />
              <QuestionRadioBox heading="Satisfaction" />
            </div>
          </div>

          <div className={Styles.planMain}>
            <div className={`${Styles.headingWithImg} ${global.dflexCenter}`}>
              <div className={global.roundImg55}>
                <img src={geoImg} alt="headingImg" className={global.fullImg} />
              </div>
              <div>
                <Heading label="Position" variant="heading2" />
              </div>
            </div>

            <StrategyBox
              image={goalImg}
              heading="Goals"
              question="Select at least one goal you want to achieve with your brand strategy."
            />

            <MultiSelectBox />
          </div>

          <div className={Styles.planMain}>
            <div className={`${Styles.headingWithImg} ${global.dflexCenter}`}>
              <div className={global.roundImg55}>
                <img
                  src={possesImg}
                  alt="headingImg"
                  className={global.fullImg}
                />
              </div>
              <div>
                <Heading label="Possess" variant="heading2" />
              </div>
            </div>

            <StrategyBox
              image={possesSmImg}
              heading="Campaigns, Activations, and Tactics"
              question={`You might not be fully aware of the reputation your company has among job seekers or even your own employees. Send out internal surveys, conduct social media searches, check out sites like Glassdoor to read reviews, or hire a firm that administers reputation monitoring. 
                        Ultimately, your research should uncover your employees’ favorite aspects of your company culture that you can focus on highlighting as well as any areas for improvement to ensure a strong employer brand.`}
            />

            <div className={`${Styles.brandingBox}`}>
              <div className={`${Styles.cardsAudit} ${global.grayBox}`}>
                <PossesCard
                  variant="primary"
                  image={possesImg1}
                  title="Culture Check"
                  text="Find out what employees really think."
                  inpId="cultureCheck"
                />

                <PossesCard
                  variant="white"
                  image={possesImg2}
                  title="Learning and Development"
                  text="Find out what employees really think."
                  inpId="learningAndDevelopment"
                />

                <PossesCard
                  variant="secondary"
                  image={possesImg3}
                  title="Rewards and Recognition"
                  text="Reward employees in real time for their great work."
                  inpId="rewardsAndRecognition"
                />

                <PossesCard
                  variant="yellow"
                  image={possesImg4}
                  title="Community"
                  text="Build a positive community through our Social Feed."
                  inpId="community"
                />

                <PossesCard
                  variant="black"
                  image={possesImg5}
                  title="Campaigns"
                  text="Launch communications campaigns."
                  inpId="campaigns"
                />
              </div>
            </div>
          </div>
        </div>
      </Col>

      <Col md={4}>
        <div className={Styles.recommendationsMain}>
          <Heading label="Recommendations" variant="heading3" />
        </div>
        <div className={Styles.filterBtnsGroup}>
          <FilterBtn label="Filter" option={filterOptions} />
          <FilterBtn label="Sort" option={filterOptions} />
        </div>
        <div>
          <Recommendation
            subHeading="CULTURE CHECK"
            heading="Conduct a Survey"
            text="Uncover your employees’ favorite aspects of your company culture."
          />
          <Recommendation
            subHeading="CULTURE CHECK"
            heading="Check Employee NPS"
            text="Find your Employee Net Promoter Score"
          />
          <Recommendation
            subHeading="CULTURE CHECK"
            heading="View Culture Scorecard"
            text="Short description here, perspic unde omnis iste natus"
          />
          <Recommendation
            subHeading="CULTURE CHECK"
            heading="Provide Social and Monetary Rewards"
            text="Short description here"
          />
          <Recommendation
            subHeading="REWARDS AND RECOGNITION"
            heading="Reward Organizational Accomplishments"
            text="Short description here, perspic unde omnis iste natus"
          />
          <Recommendation
            subHeading="LEARNING AND DEVELOPMENT"
            heading="Teach Employees with Courses"
            text="Short description here, perspic unde omnis iste natus"
            buttonLabel="Take Action"
          />
        </div>
      </Col>
    </Row>
  );
}

export default BrandCultureStartegy;
