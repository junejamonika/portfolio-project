import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "../widgets/sidebar";
import { Route, Routes } from "react-router-dom";
import FaqList from "../views/dashboard/faq-list";
import Faq from "../views/dashboard/faq";
import Work from "../views/dashboard/work";
import WorkList from "../views/dashboard/work-list";
import About from "../views/dashboard/about";
import ValuesAndBeliefs from "../views/dashboard/values-and-beliefs";
import ToolsAndServices from "../views/dashboard/tools-and-services";
import PassionProjects from "../views/dashboard/passion-projects";
import WorkExperience from "../views/dashboard/work-experience";

const Dashboard = (props:any) => {
   

    return (
        <>
         <Container fluid>
                <Row>
                    <Col id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col id="page-content-wrapper">
                        <Routes>
                            <Route path="/faq-list" element={<FaqList/>}/>
                            <Route path="/faq" element={<Faq/>}/>
                            <Route path="/work-list" element={<WorkList/>}/>
                            <Route path="/work" element={<Work/>}/>
                            <Route path="/about-me" element={<About/>}/>
                            <Route path="/values-and-beliefs" element={<ValuesAndBeliefs/>}/>
                            <Route path="/tools-and-services" element={<ToolsAndServices/>}/>
                            <Route path="/passion-projects" element={<PassionProjects/>}/>
                            <Route path="/work-experience" element={<WorkExperience/>}/>
                        </Routes>
                    </Col> 
                </Row>

            </Container>
        </>
        );
  };
  export default Dashboard