import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import ContactImg from "../assets/images/contact-img.png";
import ContactImgTwo from "../assets/images/contact-img-two.png";
import FAQ from "../components/molecules/faq";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import ButtonDark from "../components/atoms/buttondark";
import animationData from "../assets/animations/scroll-down-animation.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { guestGateway } from "../utils/gateway";
import URLS from "../configs/urls";
import { toast } from "react-toastify";

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    message: "",
    services: [""],
  });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const checks = [
    "Website Design",
    "Brand Design",
    "UX/UI Design",
    "Design System",
    "UX Evaluation",
    "Other (Please specify in message)",
  ];

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleChange = (event: any) => {
    setDetail({ ...detail, [event.target.name]: event.target.value });
  };

  const handleService = (event: any, index: number) => {
    if (event.target.checked) {
      var serviceArr = detail.services[0] == "" ? [] : detail.services;
      serviceArr.push(checks[index]);
      setDetail({ ...detail, services: serviceArr });
    } else {
      var serviceArr = detail.services.filter(function (item) {
        return item !== checks[index];
      });
      setDetail({ ...detail, services: serviceArr });
    }
  };

  const handleSubmit = async() => {
    var errors = { name: "", email: "" };
    var is_error = 0;
    if (detail.email == "") {
      errors.email = "Please fill in the required field";
      is_error = 1;
    }
    if (detail.email.length > 0 && validateEmail(detail.email) == null) {
      errors.email = "Please enter a valid email address";
      is_error = 1;
    }
    if (detail.name == "") {
      errors.name = "Please fill in the required field";
      is_error = 1;
    }
    if (!is_error) {
      const url = URLS.CONTACT.CONTACT
      const response = await guestGateway('POST', url, JSON.stringify(detail));
      if (response.success) {
        setIsSubmit(true);
      } else {
        toast.error('Something went wrong');
      }
    }
    setErrors(errors);
  };

  const handleScroll = () => {
    const element = document.getElementById("faq");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Container fluid className="contact-page">
        <div className="position-relative">
          <div className="d-flex justify-content-center">
            <Lottie
              className="scroll-down-animation"
              animationData={animationData}
              loop={true}
            />
          </div>
          {!isSubmit ? (
            <Row className="contact">
              <Col md={7} className="contact-form">
                <h4>Got ideas? Let’s partner up.</h4>
                <div className="color-gray">
                  Reach me anytime at{" "}
                  <span>
                    <a href="mailto:smeetmak@gmail.com">smeetmak@gmail.com</a>
                  </span>{" "}
                  or{" "}
                  <span>
                    <a href="tel:+91-90048-55805">+91 9004855805</a>
                  </span>
                </div>
                <Form className="mt-1">
                  <Row>
                    <Col md={6}>
                      <Form.Group
                        className="mb-2 mt-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Name*</Form.Label>
                        <Form.Control
                          className="text-field"
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          onChange={(e) => handleChange(e)}
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className={errors.name ? "d-block" : ""}
                        >
                          <AiOutlineExclamationCircle /> {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className="mb-2 mt-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Email*</Form.Label>
                        <Form.Control
                          className="text-field"
                          type="email"
                          name="email"
                          placeholder="xyz@company.com"
                          onChange={(e) => handleChange(e)}
                        />
                        <Form.Control.Feedback
                          type="invalid"
                          className={errors.email ? "d-block" : ""}
                        >
                          <AiOutlineExclamationCircle /> {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>How can I help?</Form.Label>
                        <Form.Control
                          className="text-field"
                          type="text"
                          name="message"
                          placeholder="Tell me about your project…"
                          onChange={(e) => handleChange(e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Label className="mt-24 mb-3">
                    I’m interested in…
                  </Form.Label>
                  <Row className="mb-40px">
                    {checks.map((field, index) => (
                      <Col md={6} key={`default-${field}`} className="mb-2">
                        <Form.Check
                          inline
                          type="checkbox"
                          id={`default-${field}`}
                          label={field}
                          name="services"
                          onClick={(e) => handleService(e, index)}
                        />
                      </Col>
                    ))}
                  </Row>
                  <ButtonDark
                    width="225px"
                    handleClick={handleSubmit}
                    text="LET'S GET STARTED"
                  />
                </Form>
              </Col>
              <Col md={5} className="p-0">
                <img className="h-100 w-100" src={ContactImg} />
              </Col>
            </Row>
          ) : (
            <Row className="d-flex contact-confirm">
              <Col md={7} className="contact-submit">
                <h3>
                  Thank You for your time!
                  <br />
                  I’ve received your message.
                </h3>
                <p className="text-gray mt-4">
                  I’m excited to learn more about your project. I will
                  personally respond and acknowledge your request via email
                  within 24 hours.
                </p>
                <p className="text-gray mt-4">
                  In the meantime, you can check out the following:
                </p>
                <ul className="color-orange mb-5">
                  <li onClick={() => handleScroll()}>
                    Frequently Asked Questions
                  </li>
                  <li>
                    <Link to="/work">My Work</Link>
                  </li>
                  <li>
                    <Link to="/about">About Me</Link>
                  </li>
                </ul>
                <Link to="/">
                  <ButtonDark width="196px" text="BACK TO HOME" />
                </Link>
              </Col>
              <Col md={5}>
                <img src={ContactImgTwo} />
              </Col>
            </Row>
          )}
        </div>
      </Container>
      <FAQ />
    </>
  );
};

export default Contact;
