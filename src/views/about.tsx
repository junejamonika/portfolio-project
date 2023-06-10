import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserFirst from "../assets/images/values/user-first.svg";
import ImpactDriven from "../assets/images/values/impact-driven.svg";
import Thoughtful from "../assets/images/values/thoughtful.svg";
import SteadFast from "../assets/images/values/steadfast.svg";
import Unity from "../assets/images/values/unity.svg";
import KeepItSimple from "../assets/images/values/keep-it-simple.svg";
import RaiseTheBar from "../assets/images/values/raise-the-bar.svg";
import AdobeXd from "../assets/images/tools/adobe-xd-2.png";
import Figma from "../assets/images/tools/figma-2.png";
import Photoshop from "../assets/images/tools/photoshop-2.png";
import Trello from "../assets/images/tools/trello-2.png";
import Zoom from "../assets/images/tools/zoom-2.png";
import Miro from "../assets/images/tools/miro-2.png";
import Zeplin from "../assets/images/tools/zeplin-2.png";
import AdobeIlludtrator from "../assets/images/tools/adobe-illustrator.png";
import Value from "../components/atoms/value";
import Tool from "../components/atoms/tool";
import ProjectOne from "../assets/images/passion-projects/1.png";
import ProjectTwo from "../assets/images/passion-projects/2.png";
import ProjectThree from "../assets/images/passion-projects/3.png";
import ProjectFour from "../assets/images/passion-projects/4.png";
import ProjectFive from "../assets/images/passion-projects/5.png";
import ProjectSix from "../assets/images/passion-projects/6.png";
import ProjectSeven from "../assets/images/passion-projects/7.png";
import ProjectEight from "../assets/images/passion-projects/8.png";
import ProjectNine from "../assets/images/passion-projects/9.png";
import ButtonDark from "../components/atoms/buttondark";
import Lottie from "lottie-react";
import animationData from "../assets/animations/scroll-down-animation.json";
import { Link } from "react-router-dom";
import { guestGateway } from "../utils/gateway";
import URLS from "../configs/urls";

const About = () => {
  const [description, setDescription] = useState("");
  const [valuesList, setValuesList] = useState([]);
  const [toolsList, setToolsList] = useState([]);
  const [projectsList, setProjectsList] = useState([{ image: "" }]);
  const [experienceList, setExperienceList] = useState([
    { company: "", designation: "", year: "" },
  ]);

  useEffect(() => {
    getAbout();
    getValuesList();
    getToolsList();
    getProjectsList();
    getExperiencesList();
  }, []);

  const getAbout = async () => {
    const response = await guestGateway("GET", URLS.ABOUT.ABOUT_ME);
    if (response.success) {
      setDescription(response.data.description);
    }
  };

  const getValuesList = async () => {
    const response = await guestGateway("GET", URLS.VALUES.GET_VALUES);
    if (response.success) {
      setValuesList(response.data);
    }
  };

  const getToolsList = async () => {
    const response = await guestGateway("GET", URLS.TOOLS.GET_TOOLS);
    if (response.success) {
      setToolsList(response.data);
    }
  };

  const getProjectsList = async () => {
    const response = await guestGateway("GET", URLS.PROJECTS.GET_PROJECTS);
    if (response.success) {
      setProjectsList(response.data);
    }
  };

  const getExperiencesList = async () => {
    const response = await guestGateway("GET", URLS.EXPERIENCE.GET_EXPERIENCE);
    if (response.success) {
      setExperienceList(response.data);
    }
  };

  return (
    <Container fluid className="p-0">
      <div className="about-banner position-relative">
        <div className="d-flex justify-content-center">
          <Lottie
            className="scroll-down-animation"
            animationData={animationData}
            loop={true}
          />
        </div>
        <div className="about-heading">ABOUT ME</div>
        <Row>
          <Col md={6}>
            <p
              className="color-gray"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </Col>
        </Row>
        <div className="d-inline-block">
          <p className="mt-2 fw-600 fs-24px">
            Bringing life to your digital experiences.
          </p>
          <div className="d-flex color-orange mb-3">
            <div className="d-flex w-100">
              <hr className="hr-length align-self-center" />
              <p className="text-nowrap">
                Your Design partner from Mumbai, India.
              </p>
            </div>
          </div>
        </div>
        <Link to="/contact">
          <ButtonDark width="185px" text="GET IN TOUCH" />
        </Link>
      </div>
      <div className="values-section">
        <div className="heading-orange mb-10px">WHAT DRIVES ME</div>
        <h2 className="fw-600 text-light text-center">Values & Beliefs</h2>
        <div className="values mt-5">
          {valuesList.map((data) => (
            <Value data={data} />
          ))}
        </div>
        <div className="heading-orange mt-120px mb-10px">
          CONVERTING IDEAS INTO RELAITY
        </div>
        <h2 className="fw-600 text-light text-center">Tools & Services</h2>
        <div className="tools mt-5">
          {toolsList.map((data) => (
            <Tool data={data} />
          ))}
        </div>
        <p className="text-gray text-center mt-3">And more...</p>
      </div>
      <div className="passion-section text-center">
        <h2>Passion Projects</h2>
        <p className="text-gray mb-5 mt-24">
          Here’s a small photo dump of something I occasionally dabble with.
          Painting, drawing and
          <br />
          digital sketching allows me to think beyond limits, polishing my
          creativity.
        </p>
        <Row>
          {projectsList.map((project) => (
            <Col md={4} className="mb-4">
              <img src={project.image} alt="" />
            </Col>
          ))}
        </Row>
      </div>
      <div className="work-experience-section">
        <Row>
          <Col md={6}>
            <h1 className="text-light">Work Experience</h1>
          </Col>
          <Col md={6}>
            <p className="text-gray">
              Over my <span className="text-light">5+ years</span> in the field,
              I have honed my keen eye for detail, which extends to my approach
              and results. In addition to my experience of working on{" "}
              <span className="text-light">wide array of projects</span>, I’ve
              also been taking on freelancing assignments.
            </p>
          </Col>
        </Row>
        <div className="vertical-line">
          {experienceList.slice(0).reverse().map((data) => {
            return (
              <div className="mb-5 d-flex">
                <div className="year-section color-orange fw-600 align-self-center">
                  <div className="year">
                    <p>{data.year}</p>
                  </div>
                </div>
                <div>
                  <h6 className="text-light main-heading">{data.company}</h6>
                  <h6 className="fw-300 color-gray sub-heading">
                    {data.designation}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default About;
