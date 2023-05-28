import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { authGateway, guestGateway } from "../../utils/gateway";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import URLS from "../../configs/urls";
import ButtonDark from "../../components/atoms/buttondark";
import { useSearchParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const About = () => {
  const navigate = useNavigate();
  const [faq, setFaq] = useState({ question: "", answer: "" });
  const [errors, setErrors] = useState({ question: "", answer: "" });
  const [searchParams, setSearchParams] = useSearchParams();

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
        <h5 className="heading">About Me</h5>
      </div>
      <Form>
        <Form.Group className="mb-5 mt-4" controlId="formBasicEmail">
          <Form.Label className="mb-3">Description*</Form.Label>
          <CKEditor
            editor={ClassicEditor}
            data={faq.answer}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFaq({ ...faq, answer: data });
            }}
          />
          <Form.Control.Feedback
            type="invalid"
            className={errors.answer ? "d-block" : ""}
          >
            <AiOutlineExclamationCircle /> {errors.answer}
          </Form.Control.Feedback>
        </Form.Group>
        <ButtonDark width="150px" text="Submit" handleClick={handleSubmit} />
      </Form>
    </Container>
  );
};

export default About;
