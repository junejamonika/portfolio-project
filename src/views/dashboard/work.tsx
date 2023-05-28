import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { authGateway, guestGateway } from "../../utils/gateway";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import URLS from "../../configs/urls";
import ButtonDark from "../../components/atoms/buttondark";
import { useSearchParams } from "react-router-dom";
import Dropzone from "react-dropzone";
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";
import { AiOutlineDropbox } from "react-icons/ai";

const Work = () => {
  const navigate = useNavigate();
  const [faq, setFaq] = useState({ question: "", answer: "" });
  const [errors, setErrors] = useState({ question: "", answer: "" });
  const [searchParams, setSearchParams] = useSearchParams();
  const [tags, setTags] = useState([{ name: "", value: "" }]);

  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      getFaq(id);
    }
  }, [id]);

  const getFaq = async (id: string) => {
    const response = await authGateway("GET", URLS.FAQ.FAQ + "/" + id);
    if (response.success) {
      setFaq(response.data);
    }
  };

  const handleChange = (event: any) => {
    setFaq({ ...faq, [event.target.name]: event.target.value });
  };

  const handleTag = (event: any) => {
    setTags({ ...tags, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    var errors = { question: "", answer: "" };
    var is_error = 0;
    if (faq.question == "") {
      errors.question = "Please fill in the required field";
      is_error = 1;
    }
    if (faq.answer == "") {
      errors.answer = "Please fill in the required field";
      is_error = 1;
    }
    if (!is_error) {
      const url = `${URLS.FAQ.FAQ}${id ? "/" + id : ""}`;
      const method = id ? "PUT" : "POST";
      const response = await authGateway(method, url, JSON.stringify(faq));
      if (response.success) {
        navigate("/dashboard/faq-list");
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    }
    setErrors(errors);
  };
  return (
    <Container className="p-4">
      <div className="d-flex justify-content-between pt-3">
        <h5 className="heading">{id ? "Edit " : "Add "}Work</h5>
      </div>
      <Form>
        <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
          <Form.Label>Project Name*</Form.Label>
          <Form.Control
            className="text-field"
            type="text"
            name="question"
            onChange={(event) => handleChange(event)}
            defaultValue={faq.question}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.question ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> {errors.question}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
          <Form.Label>Title*</Form.Label>
          <Form.Control
            className="text-field"
            type="text"
            name="question"
            onChange={(event) => handleChange(event)}
            defaultValue={faq.question}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.question ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> {errors.question}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
          <Form.Label>Description*</Form.Label>
          <Form.Control
            className="text-field"
            type="text"
            name="question"
            onChange={(event) => handleChange(event)}
            defaultValue={faq.question}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.question ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> {errors.question}
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
              <div className="d-flex justify-content-between mb-2">
                <Form.Label>Tags</Form.Label>
                <GrAddCircle className="align-self-center" />
              </div>
              {tags.map((tag, index) => {
                return (
                  <div className="d-flex">
                    <Form.Control
                      className="text-field"
                      type="text"
                      name={"tag" + index}
                      onChange={(event) => handleTag(event)}
                      defaultValue={tag.value}
                    />
                    <GrSubtractCircle />
                  </div>
                );
              })}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-2 mt-4" controlId="formBasicEmail">
              <div className="d-flex justify-content-between mb-2">
                <Form.Label>Tags</Form.Label>
                <GrAddCircle className="align-self-center" />
              </div>
              {tags.map((tag, index) => {
                return (
                  <div className="d-flex">
                    <Form.Control
                      className="text-field"
                      type="text"
                      name={"tag" + index}
                      onChange={(event) => handleTag(event)}
                      defaultValue={tag.value}
                    />
                    <GrSubtractCircle />
                  </div>
                );
              })}
            </Form.Group>
          </Col>
        </Row>
        <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()} className="drop-box">
                <input {...getInputProps()} />
                <AiOutlineDropbox size={20}/>
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
        <ButtonDark width="150px" text="Submit" handleClick={handleSubmit} />
      </Form>
    </Container>
  );
};

export default Work;
