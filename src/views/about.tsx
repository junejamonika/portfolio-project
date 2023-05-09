import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserFirst from '../assets/images/values/user-first.svg'
import ImpactDriven from '../assets/images/values/impact-driven.svg'
import Thoughtful from '../assets/images/values/thoughtful.svg'
import SteadFast from '../assets/images/values/steadfast.svg'
import Unity from '../assets/images/values/unity.svg'
import KeepItSimple from '../assets/images/values/keep-it-simple.svg'
import RaiseTheBar from '../assets/images/values/raise-the-bar.svg'
import AdobeXd from '../assets/images/tools/adobe-xd-2.png'
import Figma from '../assets/images/tools/figma-2.png'
import Photoshop from '../assets/images/tools/photoshop-2.png'
import Trello from '../assets/images/tools/trello-2.png'
import Zoom from '../assets/images/tools/zoom-2.png'
import Miro from '../assets/images/tools/miro-2.png'
import Zeplin from '../assets/images/tools/zeplin-2.png'
import AdobeIlludtrator from '../assets/images/tools/adobe-illustrator.png'
import Value from '../components/atoms/value'
import Tool from '../components/atoms/tool'
import ProjectOne from '../assets/images/passion-projects/1.png'
import ProjectTwo from '../assets/images/passion-projects/2.png'
import ProjectThree from '../assets/images/passion-projects/3.png'
import ProjectFour from '../assets/images/passion-projects/4.png'
import ProjectFive from '../assets/images/passion-projects/5.png'
import ProjectSix from '../assets/images/passion-projects/6.png'
import ProjectSeven from '../assets/images/passion-projects/7.png'
import ProjectEight from '../assets/images/passion-projects/8.png'
import ProjectNine from '../assets/images/passion-projects/9.png'
import ButtonDark from '../components/atoms/buttondark'
import Lottie from 'lottie-react'
import animationData from '../assets/animations/scroll-down-animation.json';
import { Link } from 'react-router-dom'

const values = [
  {
    image: UserFirst,
    title: "User First",
    text: "Everything else will follow"
  },
  {
    image: ImpactDriven,
    title: "Impact Driven",
    text: "Dominate the targets"
  },
  {
    image: Thoughtful,
    title: "Thoughtful",
    text: "Everything with an intent"
  },
  {
    image: SteadFast,
    title: "Steadfast",
    text: "Remain resolute"
  },
  {
    image: Unity,
    title: "Unity",
    text: "Together as a partner"
  },
  {
    image: KeepItSimple,
    title: "Keep It Simple",
    text: "Yet trendy"
  },
  {
    image: RaiseTheBar,
    title: "Raise The Bar",
    text: "Change. Adapt. Evolve."
  }

]

const tools = [
  {
    image: AdobeXd,
    title: "Adobe Xd"
  },
  {
    image: Figma,
    title: "Figma"
  },
  {
    image: Photoshop,
    title: "Photoshop"
  },
  {
    image: AdobeIlludtrator,
    title: "Adobe Illustrator"
  },
  {
    image: Miro,
    title: "Miro"
  },
  {
    image: Zeplin,
    title: "Zeplin"
  },
  {
    image: Trello,
    title: "Trello"
  },
  {
    image: Zoom,
    title: "Zoom"
  },
]

const pasion_projects = [
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
  ProjectFive,
  ProjectSix,
  ProjectSeven,
  ProjectEight,
  ProjectNine
]

const work_experience = [
  {
    title: "Freelancing",
    desc: "UX Designer & Consultant",
    year: "Present"
  },
  {
    title: "PaperPlane Solutions",
    desc: "User Experience Designer",
    year: "2023"
  },
  {
    title: "39 IIFS",
    desc: "UX/UI & Strategy Designer",
    year: "2020"
  },
  {
    title: "Deloitte",
    desc: "UX/UI Designer",
    year: "2019"
  },
  {
    title: "Maruti Suzuki",
    desc: "Transportation Design Project",
    year: "2018"
  },
  {
    title: "Ripple Effect",
    desc: "Product Designer",
    year: "2018"
  },
  {
    title: "Association of Designers of India",
    desc: "Material Design Workshop",
    year: "2018"
  }
]

const About = () => {
  return (
    <Container fluid className='p-0'>
      <div className='about-banner position-relative'>
        <div className='d-flex justify-content-center'>
          <Lottie className='scroll-down-animation' animationData={animationData} loop={true} />
        </div>
        <div className='about-heading'>ABOUT ME</div>
        <Row>
          <Col md={6}>
            <p className='color-gray'>My expertise lies in leveraging current trends to <b>design websites, applications and brand identities</b> that are optimised for maximum engagement, reach and conversions.</p>
            <p className='color-gray'>I work not just for my clients but with them, and strive to understand the deeper business needs to <b>tailor my outcomes</b> accordingly.</p>
            <p className='color-gray'>During the last <b>half-decade</b>, I have been privileged to work with many enterprises of varying sizes, from <b>growing startups to multinationals</b>, across <b>10+ industries</b>.</p>
          </Col>
        </Row>
        <div className='d-inline-block'>
          <p className='mt-2 fw-600 fs-24px'>Bringing life to your digital experiences.</p>
          <div className='d-flex color-orange mb-3'><div className='d-flex w-100'><hr className='hr-length align-self-center' /><p className='text-nowrap'>Your Design partner from Mumbai, India.</p></div></div>
        </div>
        <Link to="/contact"><ButtonDark width="185px" text="GET IN TOUCH" /></Link>
      </div>
      <div className='values-section'>
        <div className='heading-orange mb-10px'>WHAT DRIVES ME</div>
        <h2 className='fw-600 text-light text-center'>Values & Beliefs</h2>
        <div className='values mt-5'>
          {values.map(data => <Value data={data} />)}
        </div>
        <div className='heading-orange mt-120px mb-10px'>CONVERTING IDEAS INTO RELAITY</div>
        <h2 className='fw-600 text-light text-center'>Tools & Services</h2>
        <div className='tools mt-5'>
          {tools.map(data => <Tool data={data} />)}
        </div>
        <p className='text-gray text-center mt-3'>And more...</p>
      </div>
      <div className='passion-section text-center'>
        <h2>Passion Projects</h2>
        <p className='text-gray mb-5 mt-24'>Here’s a small photo dump of something I occasionally dabble with. Painting, drawing and<br />digital sketching allows me to think beyond limits, polishing my creativity.</p>
        <Row>
          {pasion_projects.map(project => <Col md={4} className="mb-4"><img src={project} alt="" /></Col>)}
        </Row>
      </div>
      <div className='work-experience-section'>
        <Row>
          <Col md={6}><h1 className='text-light'>Work Experience</h1></Col>
          <Col md={6}><p className='text-gray'>Over my <span className='text-light'>5+ years</span> in the field, I have honed my keen eye for detail, which extends to my approach and results. In addition to my experience of working on <span className='text-light'>wide array of projects</span>, I’ve also been taking on freelancing assignments.</p></Col>
        </Row>
        <div className="vertical-line">
          {work_experience.map(data => {
            return (
              <div className='mb-5 d-flex'>
                <div className='year-section color-orange fw-600 align-self-center'>
                  <div className='year'><p>{data.year}</p></div>
                </div>
                <div>
                  <h6 className='text-light main-heading'>{data.title}</h6>
                  <h6 className='fw-300 color-gray sub-heading'>{data.desc}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default About